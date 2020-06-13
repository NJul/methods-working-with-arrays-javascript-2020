Methods working with arrays JavaScript 2020

## Mutation Methods

### That modify the array:


array.reverse - Reverse the order of the elements of the array.

array.shift - Remove the first element from the array.

array.sort - Sort the elements of the array.

array.splice - Add or remove elements from the array.

array.unshift - Add one or more elements to the front of the array.

array.fill - This method fills all the elements of a given array with the same value, from a start index (default 0) to an end index (default array.length).


## Accessor Methods

### That return some representation of the array:


array.concat - Join the array with other array(s) or value(s).

array.join - Join all elements of the array into a string.

array.slice - Extract a section of the array.

array.indexOf - Find the first occurrence of a value within the array.

array.lastIndexOf - Find the last occurrence of a value within the array.

array.findIndex - This method receives a function as a parameter and will apply it to the array. It returns the index of an element found and which satisfies the test function passed as an argument or -1 if none satisfies it.

array.find - This method receives a function as an argument and will apply it to the array. It returns the value of an element found in the array and which satisfies the test function. Otherwise, it returns undefined.


## Iteration Methods

### That apply functions to elements in the array:


array.filter - Create a new array with only the elements for which a predicate is true.

array.forEach - Call a function for each element in the array.

array.every - See if every element in the array satisfies a predicate.

array.map - Create a new array with the result of a function of every element in the array.

array.some - See if at least one element in the array satisfies a predicate.

array.reduce - Apply a function to reduce the array to a single value (from left-to-right).

array.reduceRight - Apply a function to reduce the array to a single value (from right-to-left).

array.flat - This method creates a new array that contains the elements holden on the sub-array and flat it into the new array.

array.flatMap - The method applies a function to each element of the array and then flatten the result into an array. It combines flat() and map() in one function.

array.includes - This method will return true if the array contains a certain element, and false if not.
