const { spawn } = require("child_process");
const { join } = require("path");
const { readdir } = require("fs");



const SONGS_DIR = "./songs";

let songArray = [];
let selectedSong = 0;

function listSongs(directoryPath) {
    readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        songArray = files;

        showSongs();
    });
}

function showSongs() {
    console.clear();

    songArray.forEach((song, id) => {
        if (id === selectedSong) {
            console.log(`> ${id}: ${song}`);
        } else {
            console.log(`  ${id}: ${song}`);
        }
    });

}

function playSong(filePath) {
    const command = process.platform === "win32" ? "start" : "afplay";
    const options = process.platform === "win32" ? { shell: true } : {};

    const player = spawn(command, [filePath], options);
}

listSongs(SONGS_DIR);

process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on("data", (rawUsersInput) => {

    if (rawUsersInput[0] === 3) {
        process.exit(0);
    }

    if (rawUsersInput.toString() === "\x1b[A") {
        if (selectedSong > 0) {
            selectedSong--;
        }

        showSongs();
    }

    else if (rawUsersInput.toString() === "\x1b[B") {
        if (selectedSong < songArray.length - 1) {
            selectedSong++;
        }

        showSongs();
    }

    else if (rawUsersInput[0] === 13) {
        if (songArray.length > 0) {
            console.log("Playing:", songArray[selectedSong]);

            playSong(
                join(SONGS_DIR, songArray[selectedSong])
            );
        }
    }
});