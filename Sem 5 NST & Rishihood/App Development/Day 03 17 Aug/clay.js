// const { spawn } = require("child_process")

// function playSong(song_path){
//     const player = spawn("afplay", [song_path])

//     player.on('close', (code) => {
//         console.log(`Finished playing ${song_path} (exit code ${code})`)
//     })

//     player.stderr.on('data', (data) => {
//         console.error(data.toString())
//     })
// }

// const SONG_DIR = "./songs"

  
// function listSong(directory_path) {
//     const scanner = spawn("ls", [directory_path])
    


//     scanner.stdout.on('data',(data)=>{
//         const songs = data.toString().trim().split("\n")
//         songs.forEach((song,ind) => {
//             console.log(song,ind)
//         });
//     })
// }

// // listSong(SONG_DIR)


const { spawn } = require("child_process")
const readline = require("readline")

const SONG_DIR = "./songs"

function playSong(song_path) {
    const player = spawn("afplay", [song_path])

    player.on("close", (code) => {
        console.log(`Finished playing ${song_path}`)
    })
}

function listSong(directory_path) {
    const scanner = spawn("ls", [directory_path])

    scanner.stdout.on("data", (data) => {
        const songs = data.toString().trim().split("\n")

        songs.forEach((song, ind) => {
            console.log(`${ind + 1}. ${song}`)
        })

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question("Choose a song: ", (choice) => {
            const song = songs[choice - 1]

            playSong(`${directory_path}/${song}`)

            rl.close()
        })
    })
}

listSong(SONG_DIR)