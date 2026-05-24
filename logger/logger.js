const screenshot = require("screenshot-desktop");
const sharp = require("sharp");
const Tesseract = require("tesseract.js");
const fs = require("fs");
const path = require("path");
const config = require("./config.json");

let route = [];
let markers = [];
let lastPoint = null;

const readline = require("readline");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

let paused = true;

console.log("Starting recorder...");

// Load existing markers if they exist
if (fs.existsSync("./markers.json")) {
    markers = JSON.parse(fs.readFileSync("./markers.json"));
}

function distance(a, b) {
    return Math.sqrt(
        (a.x - b.x) ** 2 +
        (a.y - b.y) ** 2 +
        (a.z - b.z) ** 2
    );
}

function saveMarker(name, point) {

    markers.push({
        name,
        t: Date.now(),
        x: point.x,
        y: point.y,
        z: point.z
    });

    fs.writeFileSync(
        path.join(__dirname, "..", "visualizer", "markers.json"),
        JSON.stringify(route, null, 2)
    );

    console.log(`📍 Saved marker: ${name}`);
}

async function capture() {

    if (paused) return;

    try {

        const img = await screenshot({ format: "png" });

        fs.writeFileSync("./debug/latest.png", img);

        const cropped = await sharp(img)
            .extract(config.capture)
            .resize(3000)
            .grayscale()
            .linear(1.8, -0.2)
            .threshold(160)
            .png()
            .toBuffer();

        fs.writeFileSync("./debug/crop.png", cropped);

        const result = await Tesseract.recognize(
            cropped,
            "eng",
            {
                tessedit_char_whitelist:
                    "0123456789.-,LocRot: "
            }
        );

        let text = result.data.text;

        console.log(text);

        let locMatch = text.match(/Loc:\s*([-0-9.,\s]+)/i);

        if (!locMatch) {
            console.log("No coordinates detected");
            return;
        }

        let nums = locMatch[1]
            .replace(/,/g, ".")
            .match(/-?\d+\.?\d*/g);

        if (!nums || nums.length < 3) {
            console.log("Could not parse numbers");
            return;
        }

        let point = {
            t: Date.now(),
            x: Number(nums[0]),
            y: Number(nums[1]),
            z: Number(nums[2])
        };

        lastPoint = point;

        let last = route[route.length - 1];

        if (last) {

            if (
                distance(last, point) <
                config.minDistance
            ) {
                return;
            }

        }

        route.push(point);

        fs.writeFileSync(
            path.join(__dirname, "..", "visualizer", "route.json"),
            JSON.stringify(route, null, 2)
        );

        console.log("Saved:", point);

    } catch (err) {
        console.error(err);
    }
}

process.stdin.on("keypress", (str, key) => {

    if (!key) return;

    // PAUSE: ]
    if (key.sequence === "]") {
        paused = true;
        console.log("⏸ Paused");
    }

    // RESUME: [
    if (key.sequence === "[") {
        paused = false;
        console.log("▶ Running");
    }

    // SAVE MARKER
    if (key.sequence === "\\") {

        if (!lastPoint) {
            console.log("No coordinate available yet");
            return;
        }

        // temporarily disable raw mode for typing
        process.stdin.setRawMode(false);

        console.log("Marker name: ");

        process.stdin.once("data", (data) => {

            let name = data.toString().trim();

            process.stdin.setRawMode(true);
            process.stdin.resume();

            if (!name) {
                console.log("Cancelled");
                return;
            }

            saveMarker(name, lastPoint);
        });
    }

    if (key.ctrl && key.name === "c") {
        process.exit();
    }
});

setInterval(capture, config.interval);