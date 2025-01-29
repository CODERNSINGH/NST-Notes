import math;
n = 25
x = 75




lst = [10,12,14,18,20,22,30,35,100]

rank = n*(len(lst)-1)/100
d = rank - int(rank)
value = lst[math.floor(rank)] + d*(lst[math.ceil(rank)] - lst[math.floor(rank)])



rank2 = x*(len(lst)-1)/100
d2 = rank2 - int(rank2)
value2 = lst[math.floor(rank2)] + d2*(lst[math.ceil(rank2)] - lst[math.floor(rank2)])

print(int(value2 - value))



