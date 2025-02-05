# a = list(map(int,input().split()))
# i = 
# for i in range()

lst = [1,2,3,4,5,6,7,8,9,10]
n = len(lst)
target = 11

i = 0
j = n-1

while i <= j:
    if lst[i] + lst[j] > target:
        j -= 1
    elif lst[i] + lst[j] < target:
        i += 1
    else:
        print(i,j)
        break