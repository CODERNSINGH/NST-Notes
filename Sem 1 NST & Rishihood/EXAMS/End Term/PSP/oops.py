def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    return fib(n-1) + fib(n-2)

n = int(input())
fibo = []
for i in range(1,n+1):
    t = fib(i)
    fibo.append(t)

print(fibo)