class Node:

    def __init__(self,data):
        self.data  = data
        self.next = None
    
def travesal(head):
    curr = head

    while curr != None:
        print(curr.data,end="->")
        curr = curr.next
    # return ""

first_node = Node(10)
second_node = Node(20)
third_node = Node(30)
fourth_node = Node(40)

first_node.next = second_node
second_node.next = third_node
third_node.next = fourth_node

print(travesal(first_node))