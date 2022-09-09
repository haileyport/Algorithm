function solution(num) {
    let answer = 0;
    
    const collatz = (n) => {
        if(n === 1) return answer;
        if(answer > 500) return -1;
        
        if(n%2 === 0) {
            answer ++;
            return collatz(n/2);
        } else {
            answer ++;
            return collatz((n*3)+1);
        }
    }
    
    answer = collatz(num);
    
    return answer;
}