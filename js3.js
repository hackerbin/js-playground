var Person = function (a) {
    console.log("instance created");
    var self = this;
    this.name = a;
    this.printName = function () {
        console.log("this persons name is: "+self.name);
    }

}

var person1,person2;

function createPersons() {
    person1 = new Person("robin");
    person2 = new Person("tanvir");
}

