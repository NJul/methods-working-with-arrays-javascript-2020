// 1.
// forEach()
console.log(
  '1. forEach() Этот метод применяет функцию к каждому элементу массива'
);
// Этот метод применяет функцию к каждому элементу массива

const myAwesomeArray = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Mary' },
];

myAwesomeArray.forEach((element) => console.log(element.name));

/* Output:
Alice
Anna
Mary 
*/
