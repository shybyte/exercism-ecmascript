class Bob {
  hey(messageRaw) {
    const message = messageRaw.trim();
    switch (true) {
      case message.length === 0:
        return 'Fine. Be that way!'
      case message.toUpperCase() === message && message !== message.toLowerCase():
        return 'Whoa, chill out!';
      case message.endsWith('?'):
        return 'Sure.';
      default:
        return 'Whatever.';
    }
  }
}

export default Bob;

