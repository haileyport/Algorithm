function solution(phone_number) {
    let answer = '';
    const len = phone_number.length;
    answer = '*'.repeat(len-4);
    answer += phone_number.slice(len-4);
    return answer;
}