function solution(s) {
    const arr = s.split(' ').map(el => +el).sort((a,b) => a-b);
    return `${arr[0]} ${arr[arr.length-1]}`
}