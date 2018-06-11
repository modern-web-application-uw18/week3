export function removeRental(array, index) {
  return array.filter(function (el, i) {
    return index !== i;
  });
}

export default removeRental
