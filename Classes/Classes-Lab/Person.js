class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}


function getPeople(){
    return [new Person("Ana", "Simson", 22, "ana@yahoo.com"),
            new Person("SoftUni"),
            new Person("Stephan", "Johnson", 25),
            new Person("Gabriel", "Peterson", 34, "g.p@gmail.com")];
}

console.log(getPeople().toString())