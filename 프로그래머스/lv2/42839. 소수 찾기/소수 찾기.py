import itertools

def solution(numbers):
    answer = 0
    num = []
    temp = []
    
    # 1, 7이 있으면
    # 17, 71, 1, 7
    
    def box(n, l):
        if l == 0:
            return
        nCr = itertools.permutations(n, l)
        temp = []
        for k in nCr:
            if k[0] == '0':
                continue
            temp.append(int(''.join(k)))
        num.extend(temp)
        return box(n, l-1)
    
    def prime(n):
        if n < 2:
            return False
        for i in range(2, n):
            if n%i == 0:
                return False
        return True
    
    box(list(numbers), len(numbers))
    num = list(set(num))
    
    for k in num:
        if prime(k):
            answer += 1
    
    return answer