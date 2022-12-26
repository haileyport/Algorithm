def solution(clothes):
    answer = 1
    hash = {}
    
    for c in clothes:
        if c[1] in hash.keys():
            hash[c[1]] = hash.get(c[1], 0) + 1
        else:
            hash[c[1]] = 1
            
    for h in hash:
        answer *= (hash[h] + 1)
    
    answer -= 1
    
    return answer