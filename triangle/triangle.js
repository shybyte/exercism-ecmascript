export default (...abc) => ({
  kind: () => {
    const [a,b,c] = abc.sort((a, b) => a - b);
    switch (true) {
      case a <= 0 || (a + b <= c):
        throw new Error('Illegal triangle!');
      case a == c:
        return 'equilateral';
      case a == b || b == c:
        return 'isosceles';
      default:
        return 'scalene'
    }
  }
})