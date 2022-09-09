function solution(x) {
    var answer = true;
    const str = String(x).split('')
    let hashard = 0;
    
    for(i=0; i<str.length; i++) {
        hashard += Number(str[i]);
    }
    
    if(x%hashard !== 0) {
        answer = false;
    }
    
    return answer;
}