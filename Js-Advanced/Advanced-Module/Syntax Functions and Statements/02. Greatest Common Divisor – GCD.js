function gcd(a, b) {
  let larger = 0;
  let smaller = 0;

  if (a > b) {
    (larger = a), (smaller = b);
  } else {
    (larger = b), (smaller = a);
  }

  let current = smaller;
  while (current > 0) {
    if (
      Number.isInteger(larger / current) &&
      Number.isInteger(smaller / current)
    ) {
      return current;
    }

    current--;
  }
}

gcd(2154, 458);
