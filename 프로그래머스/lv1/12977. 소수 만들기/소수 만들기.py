from itertools import combinations

def solution(nums):
    answer = 0
    
    def prime(num):
        if num < 3:
            return False
        for i in range(2, num):
            if num%i == 0:
                return False
        return True
    
    new_list = []
    
    new_list = list(combinations(nums,3))
    
    for n in new_list:
        plus = sum(n)
        if prime(plus):
            answer += 1
        
    return answer