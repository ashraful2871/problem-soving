// Q.1
const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karim", age: 30, gender: "male" },
  { name: "Ayesha", age: 22, gender: "female" },
  { name: "Nusrat", age: 28, gender: "female" },
];

const maleNames = people.filter((person) => person.gender !== "female");

const result = maleNames.map((person) => person.name);

// Q.2
const books = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
];

const bookTitles = books.map((book) => book.title);

// Q.3
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composedFunction = (num) => addFive(double(square(num)));

// Q.4
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "BMW", model: "X5", year: 2019 },
];

const sortedCars = cars.sort((a, b) => a.year - b.year);

// Q.5
const persons = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 },
];

const updateAge = (arr, name, newAge) => {
  return arr.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
};

// Q.6
const numbers = [1, 2, 3, 4, 5, 6, 8];

const sumOfEven = numbers.reduce((sum, num) => {
  return num % 2 === 0 ? sum + num : sum;
}, 0);

// Q.7
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
