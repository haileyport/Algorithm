function solution(arr) {
    var answer = [];
    let sm = arr[0];
    arr.forEach(el => {
        if(sm > el) sm = el;
    })
    
    answer = arr.filter(el => el !== sm)
    
    if(answer.length === 0) {
        return [-1]
    } else {
        return answer;
    }
}