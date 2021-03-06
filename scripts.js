// https://dev.to/ibrahima92/15-must-know-javascript-array-methods-in-2020-1kd8
// https://gist.github.com/joyrexus/7366429
// https://github.com/NJul/methods-working-with-arrays-javascript-2020

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

let myAwesomeArray42 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(myAwesomeArray42);
let flat42 = myAwesomeArray42.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flat42);

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

// 10.
// sort()
console.log(
  '10. sort() Этот метод принимает функцию в качестве параметра. Он сортирует элементы массива и возвращает их'
);

/* sort() Этот метод принимает функцию в качестве параметра. Он сортирует элементы массива и возвращает их'
 */

/* const myAwesomeArray6 = [1, 2, 3, 4, 5]; ↑ */
console.log(myAwesomeArray6);
// Сортировать от самого большого до самого маленького
myAwesomeArray6.sort((a, b) => b - a);
/* Output:
[5, 4, 3, 2, 1]
*/
console.log(myAwesomeArray6);

// Сортировать от наименьшего к наибольшему
myAwesomeArray6.sort((a, b) => a - b);
/* Output:
[1, 2, 3, 4, 5]
*/
console.log(myAwesomeArray6);

// const myAwesomeArray7 = ['a', 'b', 'c', 'd', 'e']; ↑
console.log(myAwesomeArray7);

myAwesomeArray7.push('2 Letter', 'letter', 'Letter', 1);
console.log(myAwesomeArray7);
/* Output:
(9) ["a", "b", "c", "d", "e", "2 Letter", "letter", "Letter", 1]
*/

myAwesomeArray7.sort();
console.log(myAwesomeArray7);
/* Output:
(9) [1, "2 Letter", "Letter", "a", "b", "c", "d", "e", "letter"]
*/

// 11.
// concat()
console.log(
  '11. concat() Этот метод возвращает новый массив, состоящий из массива, на котором он был вызван, соединенного с другими массивами и/или значениями, переданными в качестве аргументов. Соединяемые массивы/значения останутся неизменными. Любая операция над новым массивом (если только элемент не является ссылкой) не будет затрагивать исходные массивы и наоборот'
);

/* concat() Этот метод возвращает новый массив, состоящий из массива, на котором он был вызван, соединенного с другими массивами и/или значениями, переданными в качестве аргументов. Соединяемые массивы/значения останутся неизменными. Любая операция над новым массивом (если только элемент не является ссылкой) не будет затрагивать исходные массивы и наоборот
 */

/* 
[1, 2, 3, 4, 5]
[1, "2 Letter", "Letter", "a", "b", "c", "d", "e", "letter"]
↑ */
const concat11 = myAwesomeArray6.concat(myAwesomeArray7, 17);
console.log(concat11);
/* Output:
(15) [1, 2, 3, 4, 5, 1, "2 Letter", "Letter", "a", "b", "c", "d", "e", "letter", 17]
*/

// 12.
// fill()
console.log(
  '12. fill() Этот метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0) до конечного индекса (по умолчанию array.length). Возвращаемое значение - измененный массив'
);

/* fill() Этот метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0) до конечного индекса (по умолчанию array.length). Возвращаемое значение - измененный массив
 */

console.log(concat11);
/* 
concat11 
(15) [1, 2, 3, 4, 5, 1, "2 Letter", "Letter", "a", "b", "c", "d", "e", "letter", 17]
↑ */

// The first argument (0) is the value
// The second argument (2) is the starting index
// The third argument (7) is the ending index
const fill12 = concat11.fill(0, 2, 7);
console.log(fill12);
/* Output:
(15) [1, 2, 0, 0, 0, 0, 0, "Letter", "a", "b", "c", "d", "e", "letter", 17]
*/
console.log(concat11);
/* Output:
(15) [1, 2, 0, 0, 0, 0, 0, "Letter", "a", "b", "c", "d", "e", "letter", 17]
*/

// 13.
// includes()
console.log(
  '13. includes() Этот метод возвращает значение true, есил массив содержит определенный элемент, и значение false - если нет'
);

/* includes() Этот метод возвращает значение true, есил массив содержит определенный элемент, и значение false - если нет */

console.log(myAwesomeArray6);
// (5) [1, 2, 3, 4, 5] ↑
const myAwesomeArray13 = myAwesomeArray6.includes(3);
console.log(myAwesomeArray13);
/* Output:
true
*/

const myAwesomeArray132 = myAwesomeArray6.includes(8);
console.log(myAwesomeArray132);
/* Output:
false
*/

// 14.
// reverse()
console.log(
  '14. reverse() Этот метод меняет порядок следования элементов в массиве на обратный. Первый элемент становится последним, а последний элемент будет первым'
);

/* reverse() Этот метод меняет порядок следования элементов в массиве на обратный. Первый элемент становится последним, а последний элемент будет первым */

console.log(myAwesomeArray6);
/* Output:
(5) [1, 2, 3, 4, 5] 
*/
myAwesomeArray6.reverse();
console.log(myAwesomeArray6);
/* Output:
(5) [5, 4, 3, 2, 1]
*/

// 15.
// flatMap()
console.log(
  '15. flatMap() Этот метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив. Он объедиеяет метод flat() и метод map() в одну функцию'
);

/* flatMap() Этот метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив. Он объедиеяет метод flat() и метод map() в одну функцию */

console.log(myAwesomeArray42);
// [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] ↑
const flatMap152 = myAwesomeArray42.flat(Infinity).map((arr) => arr * 10);
console.log(flatMap152);
/* Output:
(10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
*/

console.log([1, 2, 3, 4].flat(1).map((x) => [x * 2]));
// [[2], [4], [6], [8]]

// 16.
// splice()
console.log(
  '16. splice() Этот метод изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые. Возвращаемое значение: массив, содержащий удаленные элементы. Если будет удален только один элемент, вернется массив из одного элемента. Если никакие элементы не будут удалены, вернется пустой массив. Если количество уазанных вставляемых элементов будет отличным от количества удаляемых элементов, массив изменит длину после вызова. Параметр start если отрицателен, указывает индекс элемента с конца'
);

/* splice() Этот метод изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые. Возвращаемое значение: массив, содержащий удаленные элементы. Если будет удален только один элемент, вернется массив из одного элемента. Если никакие элементы не будут удалены, вернется пустой массив. Если количество уазанных вставляемых элементов будет отличным от количества удаляемых элементов, массив изменит длину после вызова. Параметр start если отрицателен, указывает индекс элемента с конца */

// Удаляет 0 элементов по индексу 2 и вставляет "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish);
// (4) ["angel", "clown", "mandarin", "sturgeon"]
let removed = myFish.splice(2, 0, 'drum');
console.log(myFish);
// (5) ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed);
// []

// Удаляет 1 элемент по индексу 3
console.log(myFish);
// (5) ["angel", "clown", "drum", "mandarin", "sturgeon"]
removed = myFish.splice(3, 1);
console.log(myFish);
// (4) ["angel", "clown", "drum", "sturgeon"]
console.log(removed);
// ["mandarin"]

// Удаляет 1 элемент по индексу 2 и вставляет "trumpet"
console.log(myFish);
// (4) ["angel", "clown", "drum", "sturgeon"]
removed = myFish.splice(2, 1, 'trumpet');
console.log(myFish);
// (4) ["angel", "clown", "trumpet", "sturgeon"]
console.log(removed);
// ["drum"]

// Удаляет 1 элемент по индексу -2 с конца
console.log(myFish);
// (4) ["angel", "clown", "trumpet", "sturgeon"]
removed = myFish.splice(-2, 1);
console.log(myFish);
// (3) ["angel", "clown", "sturgeon"]
console.log(removed);
// ["trumpet"]
