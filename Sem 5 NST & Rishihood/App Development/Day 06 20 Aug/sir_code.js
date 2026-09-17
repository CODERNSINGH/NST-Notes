const {readdirSync} = require('fs');
const {spawn} = require("child_process")
const {join} = require('path')


let allSongs = [];
let currentMusicIndex = 0;
let cursor = 0;



function listSongs(songDirPath){
    const songDirPath = join(__dirname,'song')
    allSongs = readdirSync(songDirPath)

    allSongs.forEach((data,index) => {
        console.log(`${cursor === index ? '>': ''} ${data}`)
    });
}

function playSong(songPath){
    spawn('afplay',[songPath])
}

process.stdin.on('data',data =>{
    const final = data.toString();
    if (data === '^[[A'){
        listSongs()
        return
    }

    if (data = '^[[B'){
        // up arrow key
        cursor++;
        listSongs()
    }
    


})