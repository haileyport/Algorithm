function solution(s){
    let answer = true;
    
    const arr = s.split('').map(el => el.toLowerCase());
    
    const p = arr.filter( el => el === 'p');    
    const y = arr.filter( el => el === 'y');

    answer = p.length === y.length;
    return answer;
}