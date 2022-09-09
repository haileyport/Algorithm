function solution(n) {
  let answer = 0;

  const isPrime = (num) => {
    if (num % 2 === 0) {
      if (num === 2) {
        return true;
      } else {
        return false;
      }
    }

    const sqrt = Math.floor(Math.sqrt(num));

    for (i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (k = 2; k <= n; k++) {
    isPrime(k) ? answer++ : answer;
  }

  return answer;
}