n = int(input())

def s_o_e(n):
    prime = [True] * (n+1)
    p=2
    while(p**2 <=n):
        if prime[p]:
            for i in range(p**2, n+1,p):
                prime[1] = False
        p += 1