a = 2
b = 162

while b > a:
    
    if b %2 == 0:
        b = b/2
    
    if str(b)[-1] == '1':
        b = int(str(b)[:len(b)])
        

print(a,b)