const { resolve } = require("path");
const fs = require("fs");
const { rejects } = require("assert");

class FileHandler {
  constructor() {
    FileHandler.instance = this;

    if (FileHandler.instance) {
      return FileHandler.instance;
    }
  }

  mkdir(fileName) {
    fs.mkdir(`./${fileName}`, { recursive: false }, (err) => {
      if (err) {
        // Create a custom error object
        const error = {
          type: "FileSystemError",
          message: `❌ Could not create folder "${fileName}".`,
          details: err.message,
        };

        // Show user-friendly error message
        return false;
      }
      return true;
    });
  }
}

module.exports = new FileHandler();
