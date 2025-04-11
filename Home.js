const rl = require("./components/Readline");
const FileHandler = require("./components/FileHandler");

class Home {
  constructor() {
    this.commands = ["ext", "mkdir"];
    this.active = false;
  }

  prompt() {
    rl.question("🏠 ", (cmd) => {
      this.navigation(cmd);
    });
  }

  render() {
    console.log("Location -> Home: ");
    this.prompt();
  }

  async navigation(input) {
    const [cmd, ...args] = input.trim().split(" ");
    const fn = args.join(" "); // supports folders with spaces

    switch (cmd) {
      case "h":
        console.log(this.commands);
        this.prompt();
        break;
      case `mkdir`:
        await FileHandler.mkdir(fn);
        this.prompt();
        break;
      case `rmdir`:
        await FileHandler.rmdir(fn);
        this.prompt();
        break;
      case "ext":
        rl.close();
        break;
      default:
        console.log("❌ Command doesn't exist.");
        this.prompt();
        break;
    }
  }
}

module.exports = Home;
