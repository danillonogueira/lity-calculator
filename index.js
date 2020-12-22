import Calculator from './app/core/Calculator';
import './app/styles/main.scss';

const $ = document.querySelector.bind(document);
const calculator = new Calculator($('#screen'));

const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

document.querySelectorAll.bind(document)('input[type="button"]').forEach((button) => {
  button.addEventListener('click', calculator.click.bind(calculator));
});