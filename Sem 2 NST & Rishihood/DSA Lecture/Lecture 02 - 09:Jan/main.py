# DSA
# Prifix sum

lst = list(map(int,input().split()))
# PrifixSum = []
n = len(lst)
PrifixSum = [0] * n # [0,0,0,0,0]

PrifixSum[0] = lst[0]

for i in range(n):
    PrifixSum[i] = PrifixSum[i-1] + lst[i]

print(PrifixSum)

