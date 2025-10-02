
// 1. Unique Words Counter
// ------------------------
//Input: A string
// const text = "JavaScript is great and JavaScript is powerful";
// Task: Return an object with each unique word and its count.

// const text = "JavaScript is great and JavaScript is powerful";

// function countUniqueWords(str) {
//   const words = str.toLowerCase().split(" ");
//   const result = {};
//   words.forEach(word => {
//     result[word] = (result[word] || 0) +1;
//   });
//   return result;
// }

// console.log(countUniqueWords(text));
// --------------------------------------------------------------------------------------------------------------------

// 2. Group Students by Class
// ---------------------------
// Input: Array of objects
// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];
// Task: Return an object like { "10th": [...], "9th": [...] }

// const students = [
//     { name: "Ali", class: "10th" },
//     { name: "Sara", class: "9th" },
//     { name: "Ahmed", class: "10th" },
//     { name: "Zara", class: "9th" }
// ] ;

// function groupByClass(students) {
//     const result = {};
//     students.forEach(student => {
//       const { class: className } = student;
//       result[className] = result[className] || [];
//       result[className].push(student);
//     });
//     return result;
//   }
    
//   console.log(groupByClass(students));


//  --------------------------------------------------------------------------------------------------------------------
// 3. Filter Products by Price Range
// ----------------------------------
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 },
// ];
// Task: Create a function that takes min and max price and returns filtered products

// const products = [
//     { name: "Laptop", price: 800 },
//     { name: "Mouse", price: 20 },
//     { name: "Phone", price: 500 },
//   ];
  
//   function filterByPrice(min, max) {
//     return products.filter(p => p.price >= min && p.price <= max);
//   }
  
//   console.log(filterByPrice(100, 600));
// ------------------------------------------------------------------------------------------------------------------

// 4. Check Palindrome Using Function
// -----------------------------------
// Input: A string like "madam"
// Task: Check if it is palindrome using a function

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }
  
//   console.log(isPalindrome("madam"));
// --------------------------------------------------------------------------------------------------------------------
// 5. Flatten Array
// -----------------
// const nestedArray = [1, [2, [3, 4]], 5];
// Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods

// const nestedArray = [1, [2, [3, 4]], 5];

// function flatten(arr) {
//   return arr.flat(Infinity); // ES6 simple method
// }

// console.log(flatten(nestedArray));
// --------------------------------------------------------------------------------------------------------------------
// 6. Total Salary Calculation (Using Reduce)
// -------------------------------------------
// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 },
// ];
// Task: Get total salary of all employees

// const employees = [
//     { name: "Ali", salary: 1000 },
//     { name: "Zara", salary: 1500 },
//     { name: "Ahmed", salary: 1200 },
//   ];
  
//   function getTotalSalary(employees) {
//     return employees.reduce((total, emp) =>  total + emp.salary, 0);}
  
//   console.log(getTotalSalary(employees));
// ------------------------------------------------------------------------------------------------------------------
// 7. Sum of All Even Numbers in Nested Array
// --------------------------------------------
// const data = [1, 2, [4, 5, [6, 8]], 10];
// Task: Return sum of all even numbers, regardless of depth

// const data = [1, 2, [4, 5, [6, 8]], 10];

// function sumEvenNumbers(arr) {
//     return arr.reduce((total, num) => {
//       if (typeof num === 'number' && num % 2 === 0) {
//         return total + num;
//       }
//       return total;
//     }, 0);
//   }
  
//   console.log(sumEvenNumbers(data));
// ------------------------------------------------------------------------------------------------------------------
// 8. Sum of All Even Numbers in Nested Array
// --------------------------------------------
// const data = [1, 2, [4, 5, [6, 8]], 10];
// Task: Return sum of all even numbers, regardless of depth

// const data = [1, 2, [4, 5, [6, 8]], 10];

// function sumEvenNumbers(arr) {
//     return arr.reduce((total, num) => {
//       if (typeof num === 'number' && num % 2 === 0) {
//         return total + num;
//       }
//       return total;
//     }, 0);
//   }
  
//   console.log(sumEvenNumbers(data));
// ------------------------------------------------------------------------------------------------------------------
// 9. Frequency Count with Spread
// -------------------------------
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Task: Count how many times each fruit occurred using spread & reduce

// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// function countFruits(arr) {
//     const counts = {};
//     for (const fruit of arr) {
//       counts[fruit] = (counts[fruit] || 0) + 1;
//     }
//     return counts;
//   }
  
//   console.log(countFruits(arr));
// ------------------------------------------------------------------------------------------------------------------
// 10. Toggle Status
// ------------------
// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true },
// ];
// Task: Write a function that toggles done status of a task by id

// const tasks = [
//     { id: 1, name: "Code", done: false },
//     { id: 2, name: "Eat", done: true },
//   ];
  
//   function toggleTaskStatus(tasks, taskId) {
//     return tasks.map(task => {
//       if (task.id === taskId) {
//         return { ...task, done: !task.done };
//       }
//       return task;
//     });
//   }
  
//   console.log(toggleTaskStatus(tasks, 1));   
// ------------------------------------------------------------------------------------------------------------------
// 11. Sort by Name Length
// ------------------------
// const names = ["Ali", "Zara", "Ahmed", "Usman"];
// Task: Sort names by length in ascending order

// const names = ["Ali", "Zara", "Ahmed", "Usman"];

// function sortByLength(names) {
//     return names.sort((a, b) => a.length - b.length);
//   }
  
//   console.log(sortByLength(names));