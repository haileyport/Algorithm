from collections import Counter

def solution(topping):
    answer = 0
    tp = Counter(topping)
    check = set()
    for i in topping:
        tp[i] -= 1
        check.add(i)
        if tp[i] == 0:
            tp.pop(i)
        if len(tp) == len(check):
            answer += 1
            
    return answer