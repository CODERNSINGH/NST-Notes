def finb(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    return (n + finb(n-1))

print(finb(int(input())))