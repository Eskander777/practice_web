var people = [
    { id: "1", name: "Kyle" },
    { id: "2", name: "Sally" },
    { id: "3", name: "John", email: "john@test.com" },
    { id: "4", name: "Mike", email: "mike@test.com" },
];
people.forEach(function (person) {
    if (isEmployee(person)) {
        console.log("My employee email is ".concat(person.email));
    }
    else {
        console.log("I'm just a user named ".concat(person.name));
    }
});
// To put if-check logic to separate function in TS you need to show return statement as positive return
function isEmployee(person) {
    return "email" in person;
}
