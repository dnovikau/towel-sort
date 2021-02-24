
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const asc = (a, b) => a - b;
  const desc = (a, b) => b - a;

  const result = [];
  return matrix && matrix.length ? matrix.reduce((result, line, index) => {
    const isOdd = index > 0 && !(index % 2 === 0);
    result.push(...line.sort(isOdd ? desc : asc));

    return result;
  }, []) : [];

}
