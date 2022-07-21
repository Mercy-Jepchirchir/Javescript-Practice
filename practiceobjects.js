let b=  ["mango","Apple"];
let c = new Array("Banana", "Apple");
b.push("orange");
b.unshift("grapes");
b.pop();
b.shift();

console.log(b);
console.log(c);

let d = c.map(item => `i love ${item}`);
// return `i love ${item}`;
console.log(d);

console.log(c.splice(1,1));
console.log(c);

var people = {
    name : 20,
    country : "US",

};
// console.log(people["country"]);//or
// console.log(people.country);

var person = new Object(people);
console.log(person.name);
person["age"]= 35;
console.log(person);

for ([keys,values] of Object.entries(person)) {
    console.log(`${keys} ${values}`);
}
//delete a property
delete (person.age)
console.log(person);

// object.assign(person, {school:"AkiraChix"});//not yet done
// console.log(person);

var student = {
    name : "Student",
    country: "Kenya",
    hobby:function(){// we use this to refence the 
        console.log(`my name is ${this.name} and my country is ${this.country}`);

        return "my favourite game";
    },
    friends:{
        name: "Joy",
        age: 23
    
    }
    
}
console.log(student.hobby());
console.log(student.country);
console.log(student.hobby);
console.log(student.friends);

// nested
