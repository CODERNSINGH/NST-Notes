def terms(n):
    if n ==1:
        print(1)
        return
    terms(n-1)
    print(n)

print(terms(10))