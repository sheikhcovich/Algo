function multiplyBy(a) {
  return (b) => a * b;
}
const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);
console.log(multiplyByTwo(4));
console.log(multiplyByTen(4));
