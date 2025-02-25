# Itrating a List:

# itrating list with Loops 
list = [1,2,3,4,5,6]
op = 0
for i in list:
    print(i,end=" ") #include all the elements last also
    op += i
    
print()

print(op)

n = len(list)

for i in range(0,n):
    print(list[i])

#while Loop Error Avoid
#initiaalization
#termination
#updation
i =0
while (i<n):
    print(list[i], end="--")
    i += 1


# Linear Search Alogorithm

fruits = ['apple','banana','orange','litchi']
# f = "orange"

def fruitsIs(name):
    for i in fruits:
        if i == name:
            return True
        # else:
        #     return False # we cannot do this after checking all elemet then only we can say that it not exist
    
    return False

print(fruitsIs('orange'))


# Build Function
#any() and all() 

L = [5,3,1,8,2]

even_status = any(num%2 == 0 for num in L)
print(even_status)


this = [5,3,2,1,8]

this.sort() #do list in accending 

print(this)

thisop = [5,3,2,1,8]
new = sorted(this) # arranged order no need of reverse
print(thisop)
print(new)