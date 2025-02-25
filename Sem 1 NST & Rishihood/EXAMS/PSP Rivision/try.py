
def reverse(x):
            
    temp = x
    if temp < 0:
        temp *= -1

    ans = 0
    while temp != 0:

        digit = (temp%10)

        if temp//10 != 0:
            ans += digit
            ans *= 10
            temp //= 10
        else:
            ans += digit
            temp //= 10

    if x > 0:              
        return ans
    else:
        return -ans

    
print(reverse(int(input())))

