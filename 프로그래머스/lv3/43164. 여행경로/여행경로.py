from collections import defaultdict

def solution(tickets):
    answer = []
    stack = ["ICN"]
    
    obj = defaultdict(list)
    for (s, e) in tickets:
        obj[s].append(e)
        
    for air in obj.keys():
        obj[air].sort(reverse = True)
    
    while stack:
        p = stack.pop()
        
        if p not in obj or not obj[p]:
            answer.append(p)
        else:
            stack.append(p)
            stack.append(obj[p].pop())
        
    return answer[::-1]