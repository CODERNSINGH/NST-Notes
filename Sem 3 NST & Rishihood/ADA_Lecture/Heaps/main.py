# INSERTING AN NODE IN HEAP

class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self,x):
        self.heap.append(x)

        i = len(self.heap) -1

        while i > 0:

            parent = (i - 1) // 2

            if self.heap[i] > self.heap[parent]:
                self.heap[i],self.heap[parent] = self.heap[parent],self.heap[i]

                i = parent
        
            else:
                break

h = MaxHeap()
for num in [50, 30, 40, 10, 5, 20, 60]:
    h.insert(num)

print(h.heap)
            