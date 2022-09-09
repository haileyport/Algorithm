function solution(arr) {
    var answer = 0;
    const add = arr.reduce((acc,cur) => {
        return acc + cur;
    })
    answer = add/arr.length;
    return answer;
}