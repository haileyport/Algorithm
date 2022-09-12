function solution(a, b) {
    let answer = 0;
    // 내적 = 각 i번째 요소끼리 곱해서 더하는 거
    
    a.forEach((el, idx) => {
        answer += el * b[idx]
    })
    return answer;
}