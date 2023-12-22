//Values are stored on the stack

const name = "Abhishekh"
const age = 27

// Reference values are stored on the heap

const person = {
    name :"Akhil",
    age :27
}

let newName = name;
newName="John"

let newPerson = person
newPerson.name = "Brad"

console.log(name,newName)
console.log(person,newPerson)
