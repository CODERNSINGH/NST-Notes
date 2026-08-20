const { spawn } = require("child_process");
const { join } = require("path");
const { readdir } = require("fs");

// spawn - transfers the data from the parent to child

// function listSongs(directoryPath) // list of songs (takes the root of the directory path and return the array of songs name)
// function playSong(filePath) // play the song (takes the file path of the song and play it using  Node audio player ) 
// afplay is used to play the song on mac, start on windows

const SONGS_DIR = "./songs";

let songArray = []; 

function listSongs(directoryPath) {
    readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }
        songArray = files;
        songArray.forEach((s, id) => {
            console.log(`${id}: ${s}`);
        });
    });
}

function playSong(filePath) {
    const command = process.platform === 'win32' ? 'start' : 'afplay';
    const options = process.platform === 'win32' ? { shell: true } : {};
    const player = spawn(command, [filePath], options);
}

listSongs(SONGS_DIR);


// take users song selection
process.stdin.setRawMode(true)


process.stdin.on('data', (rawUsersInput) =>{
    if(rawUsersInput[0] === 0.03){
        process.exit(0)
    }else{
        if(rawUsersInput[0] === 0xb1){
            if 
        }
    }
})






// 
process.stdin.on("data", (data) => {
    const userInput = data.toString().trim(); 
    const userChoice = Number(userInput);
    
    if (!isNaN(userChoice) && songArray[userChoice]) {
        console.log("Playing:", songArray[userChoice]);
        playSong(join(SONGS_DIR, songArray[userChoice]));
    } else {
        console.log("Invalid choice. Please try again.");
    }
});