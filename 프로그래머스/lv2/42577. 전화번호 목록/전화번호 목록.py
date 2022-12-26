def solution(phone_book):
    answer = True
    hash = {}
    for i in phone_book:
        hash[i] = 1
    
    for i in phone_book:
        temp = ''
        for j in i:
            temp += j #한 글자씩 추가
            if temp in hash and temp != i: #i와 temp가 완전히 동일하지도 않은데 hash안에 temp가 존재하면 false
                answer = False
    
    return answer