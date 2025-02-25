# Constructor
class book:
    def __init__(self, title, author, genre):
        self.title = title
        self.author = author
        self.genre = genre

book1 = book("Harry", "J.K Rowling", "Fantansy")
print(book1.title)
print(book1.author)
print(book1.genre)


class dog:
    def __init__(self, a,b,c):
        self.name = a
        self.breed = b
        self.color = c

dog1 = dog("tommy", "Godern retriver", "Brown")
print(dog1)
print(dog1.breed)
print(dog1.color)
print(dog1.name)