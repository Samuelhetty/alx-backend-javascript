process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const cheq = process.stdin.read();

  if (cheq) {
    process.stdout.write(`Your name is: ${cheq}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});