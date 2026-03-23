var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.id = genrateID();
        this.dateOfBirth = new Date();
        this.dataOfJoining = new Date();
    }
    return Person;
}());
