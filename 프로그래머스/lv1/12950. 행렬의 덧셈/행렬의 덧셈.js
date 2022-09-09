function solution(arr1, arr2) {
    let answer = [];
    for(i=0; i<arr1.length; i++) {
        let add = [];
        for(j=0; j<arr1[i].length; j++) {
            add.push(arr1[i][j] + arr2[i][j]);
        } 
        answer.push(add)
    }
    return answer;
}