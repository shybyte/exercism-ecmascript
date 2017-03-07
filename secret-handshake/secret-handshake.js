const COMMANDS = [
  'wink',
  'double blink',
  'close your eyes',
  'jump'
];

export  default (n) => {
  if (!Number.isInteger(n)) {
    throw new Error('Handshake must be a number');
  }
  const isBitTrue = bit => n & 1 << bit;
  return {
    commands: () => {
      const commands = COMMANDS.filter((_, i) => isBitTrue(i));
      return isBitTrue(4) ? commands.reverse() : commands;
    }
  }
}