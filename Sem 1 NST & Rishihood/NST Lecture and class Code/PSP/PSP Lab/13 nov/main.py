# hi = input()
# # print space spreated 
# # for i in hi:
#     #print(i,end=" ")

    

# listop = [x for x in hi]
# # listop.sort()
# listop.reverse()
# print(listop)
# # for i in listop:

#     print(i,end=" ")

# using For indexing
s = input()

# for i in range(len(s)-1,-1,-1):
#     print(s[i], end=" ")
secondstr = ""
for i in range(len(s)-1,-1,-1):
    
    # if i == 0:

    #     print(s[i], end="")
    #     final = s[i]
    # else:
    #     print(s[i], end="-")
    secondstr += s[i] 
    

# print(input(),sep="-")
print(secondstr)


op = input()
def reversestr(op):
    secondstr = ""
    for i in range(len(op)-1,-1,-1):
        secondstr += op[i] 
    return secondstr

print(reversestr(op))


