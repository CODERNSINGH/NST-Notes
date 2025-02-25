# 

marks = {"PSP": 95,"Maths" : 85, "S&W" : 99 }

print(marks["Maths"]) # same accsess values in JS

marks["PSP"] = 99
print(marks)

student = dict(name="Narendra Singh", Section="D")

empty = {}
empty["Maths"] = 34

print(marks.get("RUFP", 0))
# 0 is default if Rufp not exist then output will be 0

print(len(marks)) #no of Keys

#update 

print(student)

student.update({"Name" : "Narendra Singh", "Gender" : "male"})

print(student)

# Removing Keys-value Pair 

Healthy_food = {"vegitable": "peas", "fruit" : "banana", "snaks":"chocos"}

del Healthy_food["snaks"] #delete Key
# del Healthy_food will delete whole dict even no Empty dict will be Left

#using pop
Healthy_food.pop("snaks") # Return what pop deleted 
Deleted = Healthy_food.pop("snaks")
print("Deleted Value is :", Deleted)

#Healthy_food.pop() #removes last Element 

# Leefo Operation like copy chaking put at last chekced First
# similarly pop work

# Merge
d1 = {
    "a" :89,
    "b" :99,
    "c" :79
}
d2 = {
    "x" :59,
    "y" :69,
    "z" :49
}

d1.update(d2) # d2 is added to d1
print(d1)

# only key and Valuse
print(d1.keys())
print(d1.values())

#print Tuples
print(d1.items())