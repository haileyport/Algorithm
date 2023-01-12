def getDivisor(num):
    divisor = []
    for i in range(1, int(num**(1/2)) + 1):
        if num%i == 0:
            divisor.append(i)
            if (i**2) != num:
                divisor.append(num//i)
    return len(divisor)
    
def solution(number, limit, power):
    answer = 0
    sword = []    
    
    for i in range(1, number+1): 
        sword.append(getDivisor(i))
    
    def conver_to_limit(d):
        if d > limit:
            return power
        else:
            return d
    
    for k in map(conver_to_limit, sword):
        answer += k
        
    
    return answer