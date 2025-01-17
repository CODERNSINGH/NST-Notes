# how to print sub sequence 
# Your code here
n,k = map(int,input().split())
lst = list(map(int,input().split()))
count = 0
m = []
for i in range(n):
    f = []
    m.append(f) 
    for j in range(i,n):
        seq = lst[i:j+1]
        f.append(seq) # list

        if sum(seq) >= k :
            count += 1
    
print(m)
print(count)


# how to optimize these solutions