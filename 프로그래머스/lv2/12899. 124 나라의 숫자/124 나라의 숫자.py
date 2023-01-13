def solution(n):
    answer = ''
    result = 0
    

    while n >= 1:
        n -= 1
        answer = '124'[n%3] + answer        
        n //= 3
        
    return answer