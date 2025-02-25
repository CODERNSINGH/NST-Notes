def find_strong_numbers_in_range(a, b):
    fact = 1
    s = 0
        
    for i in range(a,b+1):
        while i >0:
            p = i %10 
            for j in range(1,p+1):
                fact *= j
            s += fact
            i//10
        
    if fact == i:
        print(i)
        

print(find_strong_numbers_in_range(1,500))
