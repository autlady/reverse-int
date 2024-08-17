module.exports = function reverse (n) {
  if (n<0) {
    return ((-1)*n).toString().split('').reverse().join('');
  } else {
    return n.toString().split('').reverse().join('');
  }
}