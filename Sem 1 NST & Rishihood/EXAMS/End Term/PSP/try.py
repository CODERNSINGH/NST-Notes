def fact(n):
    if n == 1:
        return 1
    
    return n * fact(n-1)

l = list(map(int,input().split()))
n = len(l)
Factorial = fact(n)/fact(n-r)
print(fact)