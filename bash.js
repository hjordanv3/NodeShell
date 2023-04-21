//Output a prompt
process.stdout.write('prompt > ');
  
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); //remove the newline
  const [cmd, fileName] = input.split(' '); // split input into command and filename
  const pwd = require('./pwd');
  const ls = require('./ls');
  const cat = require('./cat')

  process.stdout.write('You typed: ' + input);
  process.stdout.write('\nprompt > ');
  pwd(cmd);
  if (cmd === "ls") {
    ls()
  }
  if (cmd === "cat") {
    cat(fileName) // pass filename to cat function
  }
});
