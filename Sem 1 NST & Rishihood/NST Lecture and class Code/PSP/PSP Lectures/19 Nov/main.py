air_quality = {
    "delhi" : 500,
    "Jaipur" : 80,
    "Mumbai" : 200,
    "Jammu" : 300
}

for i in air_quality:
    print(i)
    print(air_quality[i])

# what is output of .keys

for i in air_quality.keys():
    print(i)

for i in air_quality.values():
    print(i)

for i in air_quality.items():
    print(i)

city,aqi = ('Delhi', 500)
print(city)
print(aqi)

# for key,value in dict.items():
#     print(i)

for city,aqi in air_quality.items():
    print(city,aqi)


# Nastd Dictionnaries

cars = {
    "SUV" : {"G-Wagon": 35000000, "Scorpio": 1200000},
    "Sedan" : {"Honda city": 35000000, "Verna": 1200000}
}


k = cars["SUV"]
print(k["Scorpio"])

print(cars["SUV"]["G-Wagon"])


# Dictionary comprehension

#{key_expression: value_expression for items in iterable if condition}

squres = {key : key**3 for key in range(1,11)}
print(squres)