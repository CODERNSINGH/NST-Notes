set1 = {1,3,4,5}
set2 = {2,9,7,6}

union = set1 | set2
print(union)
print(set1.union(set2))


intersection = set1 & set2
print(intersection)
print(set1.intersection(set2))


divisible_3 = {x for x in range(1,31) if x%3 ==0}
print(divisible_3)