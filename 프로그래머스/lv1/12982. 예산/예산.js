function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a,b) => {
        return a-b;
    });
    for (i=0; i<d.length; i++){
        sum+=d[i];
        if(sum<budget || sum==budget){
            answer+=1;
        }
    }
    return answer;
}