# find the power 2 ki power 9
"""
Constraints
1 <= a <= 10^18
0 <= b <= 10^18"""

a = 2
b = 5

ans= 1
for i in range(b):
    ans = ans * i # it can produce error if number become too it hard to store than we cannot do moudulo at the end so this approch is not good 

print(ans)

# let now  a = 7 and b = 41
# 7^41 = 7^20 * 7^20 * 7