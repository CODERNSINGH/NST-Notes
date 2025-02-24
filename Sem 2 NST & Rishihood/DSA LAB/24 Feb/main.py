# insersation sort 

lst = [24,3,55,3,2,66,12,2]
n = len(lst)

for i in range(n):
    for j in range(i):
        if lst[i] < lst[j]:
            lst[i],lst[j] = lst[j],lst[i]


print(lst)