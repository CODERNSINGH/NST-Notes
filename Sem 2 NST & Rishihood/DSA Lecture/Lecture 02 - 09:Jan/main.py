# # DSA
# # Prifix sum

# lst = list(map(int,input().split()))
# # PrifixSum = []
# n = len(lst)
# PrifixSum = [0] * n # [0,0,0,0,0]

# PrifixSum[0] = lst[0]

# for i in range(n):
#     PrifixSum[i] = PrifixSum[i-1] + lst[i]

# print(PrifixSum)

# # trying my own

# lst = list(map(int,input().split()))
lst = [10,20,30,40,50]
n = len(lst)
prifix = [0] * n

for i in range(n):
    prifix[i] = prifix[i-1] + lst[i]

print(prifix)