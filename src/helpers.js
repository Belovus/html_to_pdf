// 15 - Кол-во которое помещается на 1 листе, если он 1
// 29 - Кол-во которое помещается на 1 листе если он не 1
// Макс. кол-во меняется из-за того что есть динамический Header и Footer

export function rowsToPages(data) {
  // ToDO Использовать метод slice и делать массив объектов и отрисовывать его
  const { payments } = data;
  const paymentsCopy = [...payments];
  let count = [];
  let remainder = null;
  remainder = payments.length;

  function calculator() {
    if (remainder <= 15 && remainder !== 0) {
      count.push(remainder);
      remainder = 0;
      calculator();
    }
    if (remainder > 15 && remainder < 29) {
      count.push(remainder, 0);
      remainder = 0;
      calculator();
    }
    if (remainder >= 29) {
      count.push(29)
      remainder = remainder - 29;
      calculator();
    }
    return count;
  }

  return calculator().map((value) => paymentsCopy.splice(0, value));
}
