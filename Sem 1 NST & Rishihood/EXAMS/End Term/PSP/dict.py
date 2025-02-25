# hi how are you i am Absloutly fine what about You ??

dic = dict(name = "Narendra", age="19", gender="male")

print(dic["name"])

timepass = dic.get("age")
print(timepass)

dic.update({"age": 32, "city": "america"})

print(dic)

del dic["age"]
print(dic)

name = dic.pop("age", "Not Found")
print(name)

key,values = dic.popitem()