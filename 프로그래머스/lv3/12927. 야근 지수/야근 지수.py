import heapq

def solution(n, works):
    answer = 0
    
    if n >= sum(works):
        return 0

    works = [-w for w in works]
    heapq.heapify(works)
    
    for _ in range(n):
        i = heapq.heappop(works)
        i += 1
        heapq.heappush(works, i)
    
    for i in works:
        answer += i*i
    
    return answer