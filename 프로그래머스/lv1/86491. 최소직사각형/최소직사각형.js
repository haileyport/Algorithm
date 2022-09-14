function solution(sizes) {
    // 모든 명함을 수납할 수 있는 것 중 가장 작은 지갑 크기
    sizes = sizes.map(el => {
        return el.sort((a,b) => a-b)
    }).sort((a, b) => {
        if(a[0] > b[0]) {
            return 1 
        } else if (a[0] < b[0]) {
            return -1
        } else {
            return 0;
        }
    })
    
    const wallet = [0, 0];
    
    sizes.forEach(el => {
        wallet[0] = el[0] > wallet[0] ? el[0] : wallet[0]
        wallet[1] = el[1] > wallet[1] ? el[1] : wallet[1]
    })
    
    return wallet[0] * wallet[1]
}