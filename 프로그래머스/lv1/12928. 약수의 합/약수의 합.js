function solution(n) {
    let answer = 0;
    
    for(i=1; i<=n; i++) {
        answer = n%i === 0 ? answer+=i : answer;
    }
    
    return answer;
}