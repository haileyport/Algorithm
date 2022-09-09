function solution(s) {
    let answer = true;
    const len = s.length;
    if(len !== 4 && len !== 6) answer = false;
    s.split('').forEach(el => {
        if(isNaN(el)) answer = false;
    })
    return answer;
}