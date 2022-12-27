import operator

def solution(genres, plays):
    answer = []
    music = {}
    i = 0
    for _ in range(len(genres)):
        if genres[i] in music.keys():
            music[genres[i]][i] = plays[i]
        else:
            music[genres[i]] = {i: plays[i]}
        i += 1
    
    genre_play = {}
    music_play = {}
    for m in music.keys():
        d = sorted(music[m].items(), key=operator.itemgetter(1), reverse = True)
        genre_play[m] = sum(music[m].values())
        music[m] = dict(d[:2])
    play_time = sorted(genre_play.items(), key=operator.itemgetter(1), reverse = True)
    
    for j in dict(play_time):
        answer += list(music[j].keys())
        
    return answer