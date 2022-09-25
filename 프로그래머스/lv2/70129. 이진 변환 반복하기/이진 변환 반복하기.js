function solution(s) {
    let trans = s;
    let origin = s;
    let zero = 0;
    let turn = 0;
    
    while(trans.length > 1) {        
        turn++;
        
        trans = trans.replace(/0/g, "");
        const len = trans.length;
        zero += origin.length - len;
        
        trans = len.toString(2);
        origin = trans;
    }
    
    return [turn, zero];
}