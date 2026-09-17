const { app, BrowserWindow } = require("electron");

function createWindow() {
    const window = new BrowserWindow({
        height: 400,
        width: 400,
        fullscreen: true
    })

    window.loadURL('http://localhost:5173/')
    window.webContents.openDevTools();
}

app.whenReady().then(createWindow);