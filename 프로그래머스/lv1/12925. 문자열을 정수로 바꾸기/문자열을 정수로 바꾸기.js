function solution(s) {
    var answer = 0;
    answer = answer[0] === '-' ? '-'+Number(s.slice(1)) : Number(s);
    return answer;
}

//1점??