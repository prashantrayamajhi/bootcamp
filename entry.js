const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "Bootcamp",
    width: 800,
    height: 600,
  });

  // mainWindow.loadURL("")
  mainWindow.loadFile("home.html");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
