function solution(arr) {
  let answer = 0;

  // a%b 나누어지면 최대 공약수는 더 작은 수임
  // 안 되면 a%b를 다시 나눈다
  // 나누어 질 때까지 수행

  const LCM = (a, b) => {
    const GCD = (n, m) => {
      if (m === 0) {
        return n;
      }
      return GCD(m, n % m);
    };
    return (a * b) / GCD(a, b);
  };

  arr.reduce((acc, cur) => {
    answer = LCM(acc, cur);
    return answer;
  });

  return answer;
}
