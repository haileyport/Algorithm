// 4점
function solution(a, b) {
  let days = b;
  for (i = 1; i < a; i++) {
    if (i < 8) {
      days += i % 2 === 0 ? 30 : 31;
    } else {
      days += i % 2 === 0 ? 31 : 30;
    }
    days -= i === 2 ? 1 : 0;
  }
  const weeks = ["", "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const idx = days % 7 === 0 ? 7 : days % 7;
  return weeks[idx];
}
