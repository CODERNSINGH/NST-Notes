# Lecture one is Nothing just intro to Subject and cariculam


#Patter Printing - Square 

n = 5

# for i in range(1,n+1):
#     for j in range(1,n+1):
#         print("*", end="")
#     print()


# for i in range(1,n+1):
#     for j in range(1,n+3):
#         print("*", end=" ")
#     print()

# for i in range(n): # why it's not running - reason is n is range from 0 - n-1 so in next loop range(i) firstly become range(0) which is nothing so we use n+1
#     for j in range(i):
#         print("*", end=" ")

#     print()

# for i in range(1,n+1):
#     for j in range(i):
#         print("*", end=" ")

#     print()



# for i in range(n): #range from 0 - 5 
#     for j in range(n-i): # for first one 5-0 = 5 means print 5 starts 
#         print("*", end=" ")

#     print()


# Time for arrow >
# Method - 01
for i in range(1,n):
    for j in range(i):
        print("*", end=" ")
    print()
    
for i in range(n):
    for j in range(n-i):
        print("*", end=" ")
    print()
    

