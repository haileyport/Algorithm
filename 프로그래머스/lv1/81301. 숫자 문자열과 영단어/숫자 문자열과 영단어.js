function solution(s) {
    //문자열 중 숫자가 아닌 것을 찾아 숫자로 변환
    let answer = 0;
    const number = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7, 
        eight: 8,
        nine: 9,
    }
    for (key in number) {
        while (s.includes(key)){
            s = s.replace(key, number[key])
        }
    }
    answer = Number(s);
    return answer;
}