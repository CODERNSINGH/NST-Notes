n = int(input())
nums = list(map(int,input().split()))


# Reverse house robary 
# def rob(nums):

#     def solve(nums,i):
#         if i < 0:
#             return 0
        
#         include = nums[i] + solve(nums,i-2)
#         exclude = solve(nums,i-1)
#         return max(include,exclude)
#     return solve(nums,n-1)

# print(rob(nums))

# thired way

def rob(nums):
    dp = [0]*n

    dp[0] = nums[0]
    dp[1] = max(nums[0],nums[1])

    for i in range(2,n):
        dp[i] = max(nums[i] + dp[i-2],dp[i-1] )

    return dp[n-1]

print(rob(nums))
