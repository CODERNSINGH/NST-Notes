def print_perfect_numbers(a, b):
    for i in range(a, b+1):
        total = 0
        for j in range(1,i+1):
            if a%j ==0:
                total += j
        if (total/2) == a: #Kyoki vo itself ek factor jo return ho raha hai
            return int(total/2)

print(print_perfect_numbers(0,29))