type User = {
  id: string;
  name: string;
};

type Employee = User & {
  email: string;
};

const people: (User | Employee)[] = [
  { id: "1", name: "Kyle" },
  { id: "2", name: "Sally" },
  { id: "3", name: "John", email: "john@test.com" },
  { id: "4", name: "Mike", email: "mike@test.com" },
];

people.forEach((person) => {
  if (isEmployee(person)) {
    console.log(`My employee email is ${person.email}`);
  } else {
    console.log(`I'm just a user named ${person.name}`);
  }
});

// To put if-check logic to separate function in TS you need to show return statement as positive return
function isEmployee(person: User | Employee): person is Employee {
  return "email" in person;
}

