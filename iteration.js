var person = {
    fname: "Nick",
    lname: "Jonas",
    age: 26
 }; 
 for (let x in person) {
    console.log(x + ": "+ person[x])
 }
for(let x of Object.keys(person))
{
    // const {fname}=person;
    console.log(person[x]);
}

