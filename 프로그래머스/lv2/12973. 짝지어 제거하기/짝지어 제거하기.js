function solution(s)
{
    // let stack = [s[0], s[1]];
    // let vsNum = 0;
    // let i = 2;    
//     const arrPop = () => {        
//         if(i > s.length) return 0;
        
//         if(i > 0 && stack.length === 1) {
//             stack.push(s[i]);
//             i++;
//             return;
//         };
        
//         if(stack[vsNum] === stack[vsNum+1]) {
//             i > s.length ? null : stack.push(s[i]);
//             stack = stack.filter((el, idx) => idx!== vsNum && idx !== vsNum+1);
//             vsNum  = vsNum-- <= 0 ? 0 : vsNum--;
//         } else {
//             i >= s.length ? null : stack.push(s[i]);
//             vsNum ++;
//         }
//         i++;
//     }
    
//     while(true){
//         if(stack[0] === undefined) return 1;
//         const tet = arrPop();
//         if(tet === 0) return 0;
//     }
    
//결국 어디서 보고 긁어온 정답...
    let answer;
    let notPairStack = []
    notPairStack.push(s[0])
    for(let i=1; i<s.length; i++){
        //notPairStack의 마지막으로 들어온 요소와 s의 i번째 요소가 동일한지 확인
        if(notPairStack[notPairStack.length-1] === s[i]){
            //동일한 경우 마지막으로 들어온 요소 제거
            notPairStack.pop()
        }else{
            //아닌 경우 다음 요소 추가
            notPairStack.push(s[i])
        }
    }
    answer = notPairStack.length === 0 ? 1 : 0
    return answer;
}

//aaavv를 예시로 든다면
//처음에 a가 들어있는 상태
//1) a > a와 s[1]동일한가 > aa로 동일
//2) 비어있으니까 s[2]추가 > a추가
//3) a와 s[3]이 동일한가 > s[3]은 v임, v추가
//4) v와 s[4]는 동일한가 > 동일함, v제거
//결국 for를 다 돌아도 a가 남아있으니 0 리턴