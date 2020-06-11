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

// 2.
// filter()
console.log(
  '2. filter() Этот метод принимает функцию в качестве параметра и возвращает новый массив, содержащий все элементы массива, для которого функция фильтрации передавалась в качестве аргумента, и возвращает ее со значением true.'
);
/* Этот метод принимает функцию в качестве параметра и возвращает новый массив, содержащий все элементы массива, для которого функция фильтрации передавалась в качестве аргумента, и возвращает ее со значением true. */

const myAwesomeArray2 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'Kirill' },
  { id: 5, name: 'Kirill' },
];

const arr2 = myAwesomeArray2.filter((element) => element.name === 'Kirill');

/* Output:
(2) [{…}, {…}]
0: {id: 4, name: "Kirill"}
1: {id: 5, name: "Kirill"}
length: 2

false
false
false
true
true
*/

console.log(arr2);
console.log(myAwesomeArray2);

// 3.
// some()
console.log(
  '3. some() Этот метод проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. Он вернет значение true, если хотя бы один элемент совпадает с проверяемой функцией, и значение false - если нет.'
);
/* Этот метод проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. Он вернет значение true, если хотя бы один элемент совпадает с проверяемой функцией, и значение false - если нет. */

const some3 = myAwesomeArray2.some((element) => element.name === 'Alice');
console.log(some3);

/* Output:
true
*/
