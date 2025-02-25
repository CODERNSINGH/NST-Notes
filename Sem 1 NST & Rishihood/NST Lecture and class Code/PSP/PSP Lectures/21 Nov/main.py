#s = {} #this is empty not Sets
set_structure = set() # Empty set

s = {1,2,4,5,6}

s.add(5)
print(s)

l = [2,4,2,5,23,23,7]

s = set(l)
print(s)

# not Throw

s = {1,2,3}
s.add(1)
print(s)


s.update({3,4,5})
print(s)

s1 = {9,8,7,6}
s2 = {4,3,2,1}
s1.update(s2)
print(s1)

# Loops in ses
for i in s1:
    print(i)

listop = [2,3,4,2,3,7]
p = set(listop)

if len(listop) == len(p):
    print("No Duplicates")
else:
    print(" it have some duplicate")



listop = [2,3,4,2,3,7]

sets = set()
for i in listop:
    if i in sets:
        print("duplicate",i)
    else:
        sets.add(i)

s = {8,2,4,3,2}
print(s.pop())
