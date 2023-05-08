const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const filename = 'output.txt';

const writeStream = fs.createWriteStream(filename, { flags: 'a' });

console.log('Please input some text. Type "exit" or press "Ctrl+C" to exit.');

rl.on('line', (input) => {
    if (input === 'exit') {
    console.log('Bye!');
    process.exit();
    } else {
    writeStream.write(`${input}\n`);
    }
});