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


lst = [1,2,3,4,5,6,7,8,9,10]

n = len(lst)

prifix = [0] * n
sufix = [0] * n

prifix[0] = lst[0]
sufix[n-1] = lst[n-1]

for i in range(n-2,-1,-1):
    sufix[i] = sufix[i+1] + lst[i]

for i in range(1,n):
    prifix[i] = prifix[i-1] + lst[i]

print(sufix)
print(prifix)