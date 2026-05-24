const screenshot = require("screenshot-desktop");
const sharp = require("sharp");
const Tesseract = require("tesseract.js");
const fs = require("fs");

const config = require("./config.json");

let route = [];

function distance(a, b) {

    return Math.sqrt(
        (a.x - b.x) ** 2 +
        (a.y - b.y) ** 2 +
        (a.z - b.z) ** 2
    );

}

async function capture() {

    try {

        const img = await screenshot({
            format: "png"
        });

        fs.writeFileSync(
            "./debug/latest.png",
            img
        );

        const cropped = await sharp(img)
            .extract(config.capture)
            .resize(3000)
            .grayscale()
            .normalize()
            .sharpen()
            .png()
            .toBuffer();

        fs.writeFileSync(
            "./debug/crop.png",
            cropped
        );

        const result = await Tesseract.recognize(cropped, "eng", {
            tessedit_char_whitelist: "0123456789.-,LocRot: "
        });

        let text = result.data.text;

        console.log(text);

        let locMatch = text.match(
            /Loc:\s*([-0-9.,\s]+)/i
        );

        if (!locMatch) {
            console.log("No coordinates detected");
            return;
        }

        let nums = locMatch[1]
            .replace(/,/g, ".")
            .match(/-?\d+\.?\d*/g);

        if (!nums || nums.length < 2) {
            console.log("Could not parse numbers");
            return;
        }

        let point = {
            t: Date.now(),
            x: Number(nums[0]),
            y: Number(nums[1])
        };

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
            "./route.json",
            JSON.stringify(route, null, 2)
        );

        console.log("Saved:", point);

    } catch (err) {

        console.error(err);

    }

}

setInterval(
    capture,
    config.interval
);
