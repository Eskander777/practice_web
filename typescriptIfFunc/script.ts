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

// Generic types

// Generic type is used for predescribing types, that will be used in function without strictly describing them

// Function shoud return passed array's first element, but types of values are indifferent
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
// It may be used with numbers
const firstNum = getFirstElement(numbers);

const strings = ["1", "2", "3"];
// It may be used with strings
const firstString = getFirstElement(strings);

// Generic types may be created in types themselves, it is useful when some parts of types unknown beforehand
// Generic type uses default value
// type ApiResponse<Data = { status: number }> = {
//   data: Data;
//   isError: boolean;
// };

type ApiResponse<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

// Generic types are used to create different types of ApiResponse
// ApiResponse type is used as parent type
type UserResponse = ApiResponse<{ name: string; age: number }> & {
  headers: { name: string; version: number };
};

type BlogResponse = ApiResponse<{ title: string }> & { headers: string };

const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 28,
  },
  headers: { name: "Firefox", version: 101 },
  isError: false,
};

const blogResponse: BlogResponse = {
  data: {
    title: "Blog title",
  },
  headers: "Chrome",
  isError: false,
};

const statusResponse: ApiResponse = {
  data: { status: 200 },
  isError: false,
};

