class BankAccount:
    def __init__(self,owner,Balence):
        self.owner = owner
        self.Balence = Balence

    def Deposite(self,amount):
        print("Balence is: ", self.Balence + amount)
    def withdraw(self,amount):
        if self.Balence > amount:
            print("Current Balence", self.Balence - amount)
        
        else:
            print("Insufficent Balance ")
    def showbalence(self):
        print("Balence is ", self.Balence)

    
customer1 = BankAccount("Narendra Singh", 90000)
customer2 = BankAccount("Keshav Singh", 9000000)
customer3 = BankAccount("Founder Singh", 9000)

const = BankAccount(customer1)
const()
