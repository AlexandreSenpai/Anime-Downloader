const {app, BrowserWindow} = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow () {

  const mainWindow = new BrowserWindow({ 
    width: 425, 
    height: 768, 
    resizable: false,
    backgroundColor: '#1d1d1d',
    titleBarStyle: 'hidden',
    thickFrame: true,
    frame: false,
    icon: __dirname + '/resources/favicon.ico'
  })

  mainWindow.loadURL('http://localhost:3000');

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {

  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
