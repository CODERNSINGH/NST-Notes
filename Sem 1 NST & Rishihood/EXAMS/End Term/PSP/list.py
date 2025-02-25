l = [2,3,4,6,7,8,0]
l2 = [2,3,4,6,7,8,0]

l.insert(1,1000000)
l.extend(l2)
print(l)