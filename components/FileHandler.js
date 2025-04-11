const fs = require("fs");

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
          message: `❌ Could not create folder ${fileName}.`,
          details: err.message,
        };

        // Show user-friendly error message
        return error;
      }
      const error = {
        type: "FileSystemError",
        message: `Successfully created folder ${fileName}.`,
        details: " ",
      };
      return error;
    });
  }

  rmdir(fileName) {
    const fs = require("fs");

    // Delete directory (and its contents) recursively
    fs.rm(`./${fileName}`, { recursive: true, force: true }, (err) => {
      if (err) {
        const error = {
          type: "FileSystemError",
          message: `❌ Could not remove folder ${fileName}.`,
          details: err.message,
        };

        return error;
      }
      const error = {
        type: "FileSystemError",
        message: `Successfully removed ${fileName}.`,
        details: " ",
      };
      return error;
    });
  }
}

module.exports = new FileHandler();
