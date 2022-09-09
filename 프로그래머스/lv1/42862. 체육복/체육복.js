//11점 획득
function solution(n, lost, reserve) {
    let answer = n;
    //순서대로 sort먼저 필요(n-1번호부터 빌려야 하니까)
    //여벌이 있으나 도난당했으면 빌려줄 수 없는 학생
    const xReserve = [];
    
    let lostStudent = lost.sort((a,b) => a-b).filter(el => {
        if(!reserve.includes(el)) {
            return el;
        } else {
            xReserve.push(el);
        }
    })
    
    let reserveStudent = reserve.sort((a,b) => a-b).filter(el => !xReserve.includes(el))
    
    //빌려주는 로직
    //lostStudent[i]-1이 reserveStudent에 존재할 때 해당 체육복 빌림
    //lostStudent[i]와 reserveStudent에서 i-1값인 친구 삭제
    //없으면 lostStudnet[i]+1로 찾아서 반복
    
    const reserving = (num) => {
        let popNum = 0;
        if(reserveStudent.includes(num-1)){
            popNum = num-1;
        } else if (reserveStudent.includes(num+1)) {
            popNum = num+1;
        }
        
        if(popNum === 0) {
            return 0;
        } else {
            reserveStudent = reserveStudent.filter(el => el !== popNum);
            return num;
        }
    }
    
    lostStudent.forEach(el => {
        const result = reserving(el);
        result === 0 ? answer-- : answer;
    })
    
    return answer;
}