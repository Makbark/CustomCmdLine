const rl = require("./components/Readline");
const Home = require("./Home");

const home = new Home();

console.log("Welcome to Lotta Lil Money Tech👾\n");

prompt();

function prompt() {
  rl.question(
    "Navagte to a location \n\nOpen Locations:\nhome\n\n💾 ",
    (location) => {
      navRouter(location);
    }
  );
}

const navRouter = (location) => {
  switch (location) {
    case "home":
      home.render();
      break;
    default:
      console.log("\n⁉️ Location not open or doesn't exist.");
      prompt();
  }
};
