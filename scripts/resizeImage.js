#!/usr/bin/env node
const shell = require("shelljs");
const sharp = require("sharp");
const yargs = require("yargs")
    .usage("$0 -d [string] -f [string] -w [num] -h [num]")
    .alias("f", "file")
    .describe("f", "File to resize")
    .alias("d", "directory")
    .describe("d", "Directory to parse")
    .alias("w", "width")
    .describe("w", "Desired width of image")
    .alias("h", "height")
    .describe("h", "Desired height of image")
    .demandOption(["w","h"], "Please provide both desired width and height of image")
    .argv;

const { width, height } = yargs;
const imagePattern = new RegExp(/\.(gif|jpg|jpeg|tiff|png)$/i);

if (yargs.directory) {
    const files = shell.ls("-d",`${yargs.directory}/**`);

    for (let file of files) {
        resizeFile(file, width, height);
    }
} else {
    resizeFile(yargs.file, width, height);
}


function resizeFile(file, fileWidth, fileHeight) {
    if (imagePattern.test(file)) {
        const extension = imagePattern.exec(file);
        const output = `./${file.slice(0, -extension[1].length)}${fileWidth}x${fileHeight}.${extension[1]}`;
        shell.touch(output);
    
        sharp(file)
            .resize(fileWidth, fileHeight, {
                fit: "fill"
            })
            .toFile(output, (err) => {
                if (err) console.log(err);
            });
    }
}