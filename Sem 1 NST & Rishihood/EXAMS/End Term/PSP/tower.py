# def tower(A, B,C, n):
#     if n == 0:
#         return
#     tower(A,C,B, n-1)
#     print(f"move disk {n} from rod {A} to Rod {C}")
#     tower(B,A,C, n-1)

# n = int(input())

# tower("A","B","C",n)

def tower(a,b,c,n):
    if n==0:
        return 
    tower(a,c,b,n-1)
    print(f"Move {n} from {a} to {c}")
    tower (b,a,c,n-1)


n = int(input())

tower("a","b","c",n)

