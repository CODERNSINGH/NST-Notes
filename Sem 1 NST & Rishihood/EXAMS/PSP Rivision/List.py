# List and Tuples One shop

fruits = ["Banana, Orange, Apple"]
Marks = [39,47,33,22]

# Using For loop
for x in fruits:
    print(x)

# Using While Loop
index = 0

while index < len(fruits):
    element = list[index]

    index += 1
    print(element)

# Build in Function in List

Narendra_Marks = [39,47,33,22]
print(max(Narendra_Marks))
print(min(Narendra_Marks))

# Direct Sum
print(sum(Narendra_Marks))

# ----> Improtant any and all Function <----
# any

# numbers = [8,5,36,3,6]
# any_grater_number = any(numbers > 10 for i in numbers)
# print(any_grater_number) # True


# all_smaller_than_0 = all(numbers < 0 for i in numbers)
# print(any_grater_number) # False

# # Arrange in Acending Order

Natural_no = [8,6,4,1,2,3,4,5,6,7]

Natural_no.sort()
print(Natural_no)

# shorted Return New List Without Chaingin Old One
my_list = [1,2,4,5,6,2,4,3,2,43,2]
my_list.sort() # Work
# my_list.sorted() # Not work

# Coount Occurrences 

print(my_list.count(2))

# index

print(my_list.index(2)) # Gives index of First

# 
my_list.append(69)
print(my_list)
# my_list.clear() # Delete all the elements form the List
# print(my_list)

# Extend : combine two List

new_list = [2,5,8,5,2]
my_list.extend(new_list)
print(my_list)

# insert 
my_list.insert(0, "Hii")
print(my_list)

my_list.pop(0)
print(my_list)

# Remove
my_list.remove(3)
print(my_list)
