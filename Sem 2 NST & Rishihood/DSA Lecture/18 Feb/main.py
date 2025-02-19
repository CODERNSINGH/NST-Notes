lst = [10,9,7,3,1,4]
for o in range(len(lst)):
    
    for i in range(len(lst)-o-1):
        if lst[i] > lst[i+1]:
            lst[i],lst[i+1] = lst[i+1],lst[i]
            
    
        print("what we are Doing -> ", lst)
    


print(lst)


# optimize solution


lst = [1,4,3]
for o in range(len(lst)):
    swapping = False
    for i in range(len(lst)-o-1):
        if lst[i] > lst[i+1]:
            lst[i],lst[i+1] = lst[i+1],lst[i]
            swapping = True
        
        print("what we are Doing -> ", lst)
        
    if swapping == False:
        print(lst)

