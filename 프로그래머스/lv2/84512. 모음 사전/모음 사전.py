import itertools

def solution(word):
    answer = 1
    dic = 'AEIOU'
    all_word = []
    
    for i in range(1, 6):
        case = itertools.product(list(dic), repeat=i)
        for j in case:
            all_word.append(''.join(j))
    
    all_word.sort()
    answer += all_word.index(word)
    
    return answer