class Solution(object):
    def sortArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        def quicksort(arr,low,high):
            if (low < high):
                pivotidx = pivotindex(arr,low,high)
                quicksort(arr,low,pivotidx-1)
                quicksort(arr,pivotidx+1,high)

            
        

        def pivotindex(arr,low,high):

            pivot = arr[low]
            
            i = low + 1 # using to so that it will be easy to swap pivot
            j = high

            while (i <= j):
                while i <= j and arr[i] <= pivot:
                    i += 1
                
                while i <= j and arr[j] > pivot:
                    j -=1

                if (i < j):
                    arr[i],arr[j] = arr[j],arr[i]

            arr[low],arr[j] = arr[j],arr[low]
            return j

        low = 0
        high = len(nums) -1
        quicksort(nums,low,high)
        return nums
    
class Solution(object):
    def findKthLargest(self, nums, k):
        

        def quicksort(arr,low,high):

            if (low<high):
                pivot_idx = partition(arr,low,high)
                quicksort(arr,low,pivot_idx-1)
                quicksort(arr,pivot_idx+1,high)

        
        def partition(arr,low,high):

            i = low
            j = high
            pivot = arr[i]

            while i < j:
                
                while i <= high and arr[i] <= pivot:
                    i += 1
                
                while j >= low and arr[j] > pivot:

                    j -= 1 
                
                if (i < j):
                    arr[i],arr[j] = arr[j],arr[i]

            arr[low],arr[j] = arr[j],arr[low]

            return j
        
        low = 0
        high = len(nums)-1

        quicksort(nums,low,high)
        # print(nums)
        return nums[-k]