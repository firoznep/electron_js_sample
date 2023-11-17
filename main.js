const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

// if (require("electron-squirrel-startup")) app.quit();

const createMainWindow = () => {
  const win = new BrowserWindow({
    width: "700",
    height: "500",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
};

// app.on("ready", createMainWindow);

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong...");
  createMainWindow();

  // for mac only
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
