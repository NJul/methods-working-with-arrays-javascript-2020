// https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8

// 0.
/*
// Instead of using this way
myAwesomeArray.some(test => {
  if (test === "d") {
    return test
  }
})
// We'll use the shorter one
myAwesomeArray.some(test => test === "d")
*/

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

// 4.
// flat()
console.log(
  '4. flat() Этот метод принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив верхнего уровня. Обратите внимание, что этот метод работает только для одного уровня. Возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth. const newArray = arr.flat(depth)'
);

/* Этот метод принимает в качестве аргумента массив массивов и сглаживает вложенные массивы в массив верхнего уровня. Обратите внимание, что этот метод работает только для одного уровня. Возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth. const newArray = arr.flat(depth) */

const myAwesomeArray4 = [[1, 2], [3, 4], 5, [6, [7, 8]]];
console.log(myAwesomeArray4);
const flat4 = myAwesomeArray4.flat(2);
console.log(flat4);
console.log(myAwesomeArray4);

/* Output:
(4) [Array(2), Array(2), 5, Array(2)]
(8) [1, 2, 3, 4, 5, 6, 7, 8]
(4) [Array(2), Array(2), 5, Array(2)]
*/

// 5.
// map()
console.log(
  '5. map() Этот метод принимает функцию в качестве параметра и создает новый массив с результатом вызова указанной функции для каждого элемента массива. Он всегда будет возвращать одинаковое количество элементов.'
);

/* map() Этот метод принимает функцию в качестве параметра и создает новый массив с результатом вызова указанной функции для каждого элемента массива. Он всегда будет возвращать одинаковое количество элементов. */

// const flat4 = myAwesomeArray4.flat(2); (8) [1, 2, 3, 4, 5, 6, 7, 8] ↑
const myAwesomeArray5 = flat4.map((x) => x * x);
console.log(myAwesomeArray5);

/* Output:
(8) [1, 4, 9, 16, 25, 36, 49, 64]
*/

// 6.
// reduce()
console.log(
  '6. reduce() Этот метод принимает функцию, которая имеет в качестве аргумента аккумулятор и значение. Он применяет функцию к аккумулятору и каждому значению массива, чтобы в результате вернуть только одно значение.'
);

/* reduce() Этот метод принимает функцию, которая имеет в качестве аргумента аккумулятор и значение. Он применяет функцию к аккумулятору и каждому значению массива, чтобы в результате вернуть только одно значение. 

Если аргумент initialValue не задан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве. 
*/

const myAwesomeArray6 = [1, 2, 3, 4, 5];
const reduce6 = myAwesomeArray6.reduce((total, value) => total * value);
console.log(reduce6);

// 1 * 2 * 3 * 4 * 5

/* Output:
120
*/

/*
array.reduce(callback[, initalValue]) callback - функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента. 

Если вы зададите начальное значение initialValue, результат будет выглядеть так: 
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array){
  return accumulator + currentValue;
}, 10);

accumulator = 10
currentValue = 0
index = 0
array = [0, 1, 2, 3, 4]

10 11 13 16 20
*/

// 7.
// every()
console.log(
  '7. every() Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Он вернет значение true, если каждый элемент совпадет с проверяемой функцией, и значение false - если нет.'
);

/* every() Этот метод проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. Он вернет значение true, если каждый элемент совпадет с проверяемой функцией, и значение false - если нет.
 */

const myAwesomeArray7 = ['a', 'b', 'c', 'd', 'e'];
const every7 = myAwesomeArray.every((test) => test === 'd');
console.log(every7);
/* Output:
false
*/

const myAwesomeArray72 = ['a', 'a', 'a', 'a', 'a'];
const every72 = myAwesomeArray72.every((test) => test === 'a');
console.log(every72);
/* Output:
true
*/

// 8.
// findIndex()
console.log(
  '8. findIndex() Этот метод принимает функцию в качестве параметра и в дальнейшем применяет ее к массиву. Метод findIndex не изменяет массив, для которого он был вызван. Он возвращает индекс найденного элемента, если элемент удовлетворяет условию проверяющей функции, переданной в качестве аргумента. Если не удовлетворяет, возвращается -1'
);

/* findIndex() Этот метод принимает функцию в качестве параметра и в дальнейшем применяет ее к массиву. Метод findIndex не изменяет массив, для которого он был вызван. Он возвращает индекс найденного элемента, если элемент удовлетворяет условию проверяющей функции, переданной в качестве аргумента. Если не удовлетворяет, возвращается -1
 */

// const myAwesomeArray7 = ['a', 'b', 'c', 'd', 'e']; ↑
const findIndex8 = myAwesomeArray7.findIndex((element) => element === 'e');
console.log(findIndex8);
/* Output:
4
*/

const findIndex82 = myAwesomeArray7.findIndex((element) => element === 'f');
console.log(findIndex82);
/* Output:
-1
*/

// const myAwesomeArray72 = ['a', 'a', 'a', 'a', 'a']; ↑
const findIndex83 = myAwesomeArray72.findIndex((element) => element === 'a');
console.log(findIndex83);
/* Output:
0
*/

// 9.
// find()
console.log(
  '9. find() Этот метод принимает функцию в качестве аргумента и в дальнейшем применяет ее к массиву. Он возвращает значение первого найденного в массиве элемента, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается undefined'
);

/* find() Этот метод принимает функцию в качестве аргумента и в дальнейшем применяет ее к массиву. Он возвращает значение первого найденного в массиве элемента, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается undefined
 */

/* const myAwesomeArray = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Mary' },
]; ↑ */
const find9 = myAwesomeArray.find((element) => element.id === 3);
console.log(find9);
/* Output:
{id: 3, name: "Mary"}
*/

const find92 = myAwesomeArray.find((element) => element.id === 5);
console.log(find92);
/* Output:
undefined
*/
