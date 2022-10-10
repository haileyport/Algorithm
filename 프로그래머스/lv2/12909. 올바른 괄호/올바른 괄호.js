function solution(s){
    let bracket = 0;
    for (i of s) {
        if (i === '(') bracket ++;
        else bracket --;
        if(bracket < 0) return false;
    }
    return bracket === 0;
}