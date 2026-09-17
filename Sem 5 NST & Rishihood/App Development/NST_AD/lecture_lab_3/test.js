const keyboard = process.stdin;
keyboard.setRawMode(true);    // Don't wait for the "Enter" key! Just listen to every single press.
keyboard.resume();            // Wake up and start listening!
keyboard.setEncoding('utf8'); // Understand the letters we type.

console.log("🎮 Hello! Press any key on your keyboard to discover its secret number!");
console.log("🛑 (If you want to stop playing, just press Ctrl+C)");

keyboard.on('data', function(key) {

  if (key === '\u0003') {
    console.log("Bye bye! 👋");
    process.exit(); // Stop the program
  }
  
  // 3. Every letter on your keyboard has a hidden number code (called an ASCII value).
  // We can find out what it is using charCodeAt(0)
  const secretNumber = key.charCodeAt(0);
  
  // 4. Print it out for the player to see!
  console.log(`You pressed: [ ${key} ]! Its secret number is: ${secretNumber}`);
});
