/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const connect = require('./client');

let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  //turns off 
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === "w") {
      console.log("w")
      conn.write("Move: up")
    } else if (key === "s") {
      console.log("s")
      conn.write("Move: down")
    } else if (key === "a") {
      console.log("a")
      conn.write("Move: left")
    } else if (key === "d") {
      console.log("d")
      conn.write("Move: right")
    }
  });

  stdin.resume();
  return stdin;
}


module.exports = setupInput;