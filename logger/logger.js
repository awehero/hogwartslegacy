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
            .grayscale()
            .threshold(180)
            .png()
            .toBuffer();

        fs.writeFileSync(
            "./debug/crop.png",
            cropped
        );

        const result = await Tesseract.recognize(
            cropped,
            "eng"
        );

        let text = result.data.text;

        console.log(text);

        let match = text.match(
            /X[: ]*(-?\d+).*?Y[: ]*(-?\d+).*?Z[: ]*(-?\d+)/is
        );

        if (!match) {
            console.log("No coordinates detected");
            return;
        }

        let point = {
            t: Date.now(),
            x: Number(match[1]),
            y: Number(match[2]),
            z: Number(match[3])
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
