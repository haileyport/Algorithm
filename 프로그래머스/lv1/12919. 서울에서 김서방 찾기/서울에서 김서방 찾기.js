// function solution(seoul) {
//     let answer = '';
//     seoul.forEach((el, idx) => {
//         if(el === 'Kim') {
//             answer = `김서방은 ${idx}에 있다`
//             return;
//         }  
//     })
//     return answer;
// }

// 이 코드가 조금 더 빠르당
function solution(seoul) {
    let answer = '';
    const idx = seoul.indexOf('Kim');
    answer = `김서방은 ${idx}에 있다`
    return answer;
}