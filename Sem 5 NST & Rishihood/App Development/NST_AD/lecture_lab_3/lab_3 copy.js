const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const songDir = path.join(__dirname, 'songs');
let allSongs = null;
let cursor = 0;
let currentMusicSelectionIndex = 0;
let isPaused = true;
let vlcProcess = null;
let previousLinesCount = 0;

function listSongs(songDirPath) {
    allSongs = fs.readdirSync(songDirPath);

    // Move cursor up to overwrite previous menu output
    if (previousLinesCount > 0) {
        if (previousLinesCount > 1) {
            process.stdout.write(`\x1b[${previousLinesCount - 1}A`);
        }
        process.stdout.write('\r\x1b[0J'); // Return to column 1 and clear downwards
    }

    const menuText = allSongs.map((songName, index) => {
        return ((index === cursor ? '>': ' ') +songName + '\x1b[K')
    }).join("\n")


    process.stdout.write(menuText);
    previousLinesCount = allSongs.length;
}

function playSong(songFinalPath) {
    vlcProcess = spawn('vlc', ['--intf','rc', songFinalPath],{
        stdio: 'inherit',
    });
}

listSongs(songDir);

process.stdin.setRawMode(true);
process.stdin.on('data', (data) => {
    // either you can compare with string values or hexadecimal values using (0x followed by the hexavalue ) or decimal value (ascii values)

    // converting data to string value does not work because, toString takes only the first btye and convert it into its following ascii code / value ( issue comes with the arrow key selection )

    // const stringValue = data.toString();

    // arrow values detection
    // up arrow key -> Buffer 1b, 5b, 41(A)
    // down arrow key -> Buffer 1b, 5b, 42(B)
    // right arrow key -> Buffer 1b, 5b, 43(C)
    // left arrow key -> Buffer 1b, 5b, 44(D)
    
    if(data[0] === 0x1b) {
        if(data[1] === 0x5b) {
            if(data[2] === 0x41){
                // up arrow key
                cursor--; // should be in the loop of songs i.e use module operator
                if (cursor < 0) cursor = allSongs.length - 1;
            } else if(data[2] === 0x42) {
                cursor++; // should be in the loop of songs i.e use module operator
                if (cursor >= allSongs.length) cursor = 0;
                // down arrow key
            } else if(data[2] === 0x43) {
                // right arrow key
                console.log('>')
            } else if(data[2] === 0x44) {
                console.log('<');
                // left arrow key
            }
        }

        listSongs(songDir)
        return
    }


    // enter key capture in default mode
    // if(data[0] === 0x0c) {
    //     currentMusicSelectionIndex = cursor;
    //     const finalSong = path.join(songDir, allSongs[currentMusicSelectionIndex]);
    //     playSong(finalSong);
    //     return;
    // }

    // enter in raw mode
    if(data[0] === 0x0d) {
        currentMusicSelectionIndex = cursor;
        const finalSong = path.join(songDir, allSongs[currentMusicSelectionIndex]);
        playSong(finalSong);
        return;
    }

    // when in raw mode, the process get 0x03, does not provide SIGINT signal ( this gets in default mode )
    if(data[0] === 0x03) {
        process.stdout.write('\n'); // Ensure the prompt starts on a new line
        process.exit(); // generates SIGINT and exit the nodejs process
    }

    // play pause
    if(data[0] === 0x20) {
        // to stop the process we will use SIGSTOP command
        if(isPaused) {
            vlcProcess.kill('SIGCONT');
            isPaused = false
        } else {
            vlcProcess.kill('SIGSTOP');
            isPaused = true
        }
    }
})

