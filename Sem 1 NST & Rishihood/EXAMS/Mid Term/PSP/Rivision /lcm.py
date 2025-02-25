a = int(input())
b = int(input())

def gcd(a,b):
    while a != 0:
        b = a
        a = b%a
    return b

print(gcd(a,b))