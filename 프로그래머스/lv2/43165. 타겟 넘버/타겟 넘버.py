def solution(numbers, target):
    answer = 0
    
    def make_num(n, p):
        if n == len(numbers):
            if p == target:
                nonlocal answer
                answer += 1
            return
        else:
            make_num(n+1, p + numbers[n])
            make_num(n+1, p - numbers[n])
    
    make_num(0, 0)
    
    return answer