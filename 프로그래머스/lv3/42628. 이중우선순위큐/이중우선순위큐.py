import heapq

def solution(operations):
    answer = []
    # I 숫자 : push
    # D 숫자 : 최댓값 삭제
    # D -1 : 최솟값 삭제
    
    heap = []
    max_heap = []
    
    for i in operations:
        arr = i.split(' ', maxsplit=2)
        if 'I' == arr[0]:
            heapq.heappush(heap, int(arr[1]))
            heapq.heappush(max_heap, -int(arr[1]))
        if 'D -1' == i:
            if len(heap) == 0:
                continue
            else:
                a = heapq.heappop(heap)
                max_heap.pop()
        if 'D 1' == i:
            if len(heap) == 0:
                continue
            else:
                b = heapq.heappop(max_heap)
                heap.pop()
            
    if len(heap) == 0:
        return [0,0]
    else:
        answer = [max_heap[0]*-1, heap[0]]
        return answer