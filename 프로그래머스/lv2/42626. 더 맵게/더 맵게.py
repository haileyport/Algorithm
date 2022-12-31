import heapq

def solution(scoville, K):
    answer = 0
    # 스코빌 섞기
    # 가장 맵지 않은 거 + (두번째로 안 매운거*2)
    # 모든 음식의 스코빌지수가 K 이상일 때까지
    
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        a = heapq.heappop(scoville)
        b = scoville[0]
        heapq.heappop(scoville)
        heapq.heappush(scoville, a + b*2)
        answer += 1
        
        if len(scoville) < 2 and scoville[0] < K:
            return -1
    
    return answer