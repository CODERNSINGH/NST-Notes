s = int(input())

if s <= 50000:
    print("5%")
elif s <= 80000:  # No Need to check for 50k
    print("10%")
elif s <= 100000:
    print("20%")
else:
    print("25%")

# we can alos use elif 