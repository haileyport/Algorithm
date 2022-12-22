def solution(priorities, location):
    answer = 0
    # 대기 목록 맨 앞 문서 오픈
    # 맨 앞 문서보다 중요도 높은 게 있으면 다시 맨 뒤로 넣기
    # 아니면 인쇄
    # location이 몇 번째로 인쇄되는지 return 하여라
    
    while len(priorities) > 0:
        if max(priorities) != priorities[0]:
            priorities.append(priorities[0])
            if 0 == location:
                location = len(priorities) - 2
            else:
                location -= 1
        else:
            answer += 1
            if 0 == location:
                break
            else:
                location -= 1
        del priorities[0]
    return answer