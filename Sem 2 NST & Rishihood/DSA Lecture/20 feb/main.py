lst = [10,40,15,20,1,4]
n = len(lst)

for i in range(n):
    find_min = min(lst[i:])
    # print(find_min)
    if find_min < lst[i]:

        # print(lst.index(find_min))
        lst[i],lst[lst.index(find_min)] = lst[lst.index(find_min)],lst[i]

print(lst)

