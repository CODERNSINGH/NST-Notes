# reversing string using two pointer

str = ['h','e','l','l','o']

n = len(str)
i = 0
j = n-1

while i >= j:
    if i == j:
        str[i] = str[j]
    else:
        str[i],str[j] = str[j],str[i]
    i += 1
    j -= 1

print(str)
