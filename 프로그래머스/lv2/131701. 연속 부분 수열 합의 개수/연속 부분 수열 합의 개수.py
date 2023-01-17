def solution(elements):
    res = set()
    eleLen = len(elements)
    ele = elements * 2
    
    for i in range(eleLen):
        for j in range(eleLen):
            res.add(sum(ele[j:j+i+1]))
    return len(res)