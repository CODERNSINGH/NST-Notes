# nasted loop 

# m,n = int(input().split())
# a = []
# for i in range(m):
#     lst = list(map(int,input().split()))
#     n.append(lst)

# q = int(input())
# for _ in range(q):
#     sum = 0
#     for i in range(m):
#         for i in range(n):
#             if m + n == k :
#                 sum += lst[m][n]

#     print(sum)

# matrix multiplication 

a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
b = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
    ]
n = 3 # row and column size 
c = []
for i in range(n):
    c.append([])
for i in range(n):
    for j in range(n):
        for k in range(n):
            c[i][j] = a[i][k] * [k][j] + a