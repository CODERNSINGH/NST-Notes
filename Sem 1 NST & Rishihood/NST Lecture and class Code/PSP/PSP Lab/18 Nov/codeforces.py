# # Set is used to Remove duplicate charecter

# a = set(list(input()))

# if len(a)%2 == 1:
#     print("IGNORE HIM!")
# else:
#     print("CHAT WITH HER!")

# s = input()
# t = input()
# word = ""

# for x in range(len(s)-1,-1,-1):
#     word += s[x]

# if word == t:
#     print("YES")
# else:
#     print("NO")

ph1 = input()
ph2 = input()
ph3 = input()

count1 = 0
count2 = 0
count3 = 0

for x in ph1:
    if x == "a" or x == "i" or x == "o" or x == "u" or x == "e":
        count1 += 1
    else:
        continue

for y in ph2:
    if y == "a" or y == "i" or y == "o" or y == "u" or y == "e":
        count2 += 1
    else:
        continue

for z in ph3:
    if z == "a" or z == "i" or z == "o" or z == "u" or z == "e":
        count3 += 1
    else:
        continue

if count1 == 5 and count2 == 7 and count3 == 5:
    print("YES")
else:
    print("NO")
