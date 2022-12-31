import itertools

def solution(k, dungeons):
    answer = 0
    case = []
    
    idx = [i for i in range(len(dungeons))]
    c = itertools.permutations(idx, len(dungeons))    
    
    for i in c:
        case.append(list(i))
    
    for n in case:
        res = 0
        health = k
        for m in n:
            if health < dungeons[m][0]:
                break
            else:
                health -= dungeons[m][1]
                res += 1
            if res == len(dungeons):
                return len(dungeons)
        if answer < res:
            answer = res
    return answer