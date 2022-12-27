def solution(bridge_length, weight, truck_weights):
    answer = 0
    trucks = truck_weights[:]
    bridge = [0 for _ in range(bridge_length)]
    sum = 0
    for b in bridge:
        sum += b
    while bridge:
        
        answer += 1
        rm = bridge.pop(0)
        sum -= rm
        
        if trucks:
            if sum + trucks[0] <= weight:
                t = trucks.pop(0)
                bridge.append(t)
                sum += t
            else:
                bridge.append(0)
    return answer