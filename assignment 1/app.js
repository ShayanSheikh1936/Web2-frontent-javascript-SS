// 1) Write a program that checks whether a number is even or odd.
// const Userinput = prompt("Enter Number")
// if(Userinput % 2 ==0)
// {
//     console.log(`${Userinput} Number is even`)
// }
// else
// {
//     console.log(`${Userinput} Number is odd`)
// }
// ---------------------------------------------------------------------------------------------------------------------------------------
// 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".

// const Userinput = prompt("Enter Number");
// if(Userinput >=18 )
// {
//     console.log("Eligible to vote")
// }
// else
// {
//     console.log("Not Eligible")
// }
// ----------------------------------------------------------------------------------------------------------------------------
//  3) Print numbers from 1 to 10 using a for loop.

// for(let num=1; num<=10; num++)
// {
//     console.log(`${num} `)
// }
// ------------------------------------------------------------------------------------------------------------------------
// 4) Print even numbers between 1 to 20 using a while loop.

// let evenNum =0;
// while(evenNum <= 18)
// {
//     console.log(`${evenNum +=2}`);  
// }
// --------------------------------------------------------------------------------------------------------------------------------
// 5) Print the reverse of a given string using a for loop.

// let supposeString = "Shayan Sheikh";
// for(let i=supposeString.length -1; i>=0; i--)
// {
//     let reverseString = supposeString[i];
//     console.log(reverseString)
// }
// ---------------------------------------------------------------------------------------------------------------------------
// 6) Write a function that adds two numbers and returns the result.
// const num1 = prompt("Enter First Number");
// const num2 = prompt("Enter Last Number");
//     function add ()
//     {
//         return Number(num1)+Number(num2);
//     }
// console.log(add());
// ---------------------------------------------------------------------------------------------------------------------------------
// 7) Write a function that returns the factorial of a number.
// const num1 = prompt("Enter Number");

// function factorialNum()
// {
//     if(Number(num1)<0)
//     {
//         console.log("not")
//     }
//     let result= 1;
//     for(let i =2; i<=Number(num1); i++ )
//     {
//         result*=i;
//     }
//     return result;
// }
// console.log(factorialNum());
// --------------------------------------------------------------------------------------------------------------------------
// 8) Write a function that checks if a given string is a palindrome (e.g., "madam").
// function isPalindrome(string) {
//     const reversed = string.split("").reverse().join("")
//     let equal = string===reversed;
//     return equal;
//   }
//   if(isPalindrome("madam")===Boolean(true))
//   {
//     console.log(`This is palindrom string`)
//   }
//   else{
//     console.log("This is not palindrome string");
//   }
// --------------------------------------------------------------------------------------------------------------
// 9) Create an object student with the following properties:
// name, rollNo, marks, isPassed
// const stdobj ={
//   name: "shayan Sheikh",
//   rollNo: 1936,
//   obtainedMarks: 836/1100,
//   isPassed: true
// }
// ----------------------------------------------------------------------------------------------------------------------------
// 10) Access the properties of the student object using dot and bracket notation.
// const stdobj ={
//   name: "Shayan Sheikh",
//   rollNo: 1936,
//   obtainedMarks: "836/1100",
//   isPassed: true
// }
// // using for dot notation
// console.log(`${stdobj.name}\n ${stdobj.rollNo}\n ${stdobj.obtainedMarks}\n ${stdobj.isPassed} `)
// // using for square bracket notation
// console.log(`${stdobj["isPassed"]}\n ${stdobj["obtainedMarks"]}\n ${stdobj["rollNo"] }\n ${stdobj["name"]}`);
// ---------------------------------------------------------------------------------------------------------------------------
// 11) Add a method inside the student object that prints:
// "Hello, I am [name]"
// const stdobj ={
//     name: "Shayan Sheikh",
//     rollNo: 1936,
//     obtainedMarks: "836/1100",
//     isPassed: true,
//     method: function()
//     {
//       console.log(`Hello, I am ${stdobj.name}`);
      
//     }
//   }
// stdobj.method()
// -------------------------------------------------------------------------------------------------------------------------------------
// 12) Create a function that takes an object and prints all keys and values using a loop.
// const stdobj ={
//     name: "Shayan Sheikh",
//     rollNo: 1936,
//     obtainedMarks: "836/1100",
//     isPassed: true
//   }
// biodata(stdobj);

// function biodata(obj)
// {   
//   for(let key in obj)
//   {
//     console.log(`${key}: ${obj[key]}`)
//   }
// } 
// ------------------------------------------------------------------------------------------------------------------------------- 
// 13) Create an array of your favorite fruits.
// const favfruit = ["Apple", "mango", "orange", "Peach", "guava"];
// console.log(favfruit);
// ---------------------------------------------------------------------------------------------------------------------------
// 14) Add a new fruit to the array.
// const favfruit = ["Apple", "mango", "orange", "Peach", "guava"];
// favfruit.push("banana") // this method use to add element end point
// favfruit.unshift("kiwi") // this method use to add element start pointlog
// console.log(favfruit);
// --------------------------------------------------------------------------------------------------------------------------------
// 15) Remove the last fruit from the array.
// const favfruit = ["Apple", "mango", "orange", "Peach", "guava"];
// favfruit.pop(); // this method use to remove element end point
// favfruit.shift(); // this method use to remove element start point
// console.log(favfruit);
// ---------------------------------------------------------------------------------------------------------------------------------
// 16) Check if "banana" is present in the array using .includes().
// const favfruit = ["Apple", "mango", "orange", "Peach", "guava", "banana"];
// if(favfruit.includes("banana"))
// {
//     console.log("banana is present");
// }
// else
// {
//     console.log("banana is not include");
// }

// -----------------------------------------------------------------------------------------------------------------------
// 17) Create an array of numbers. Return a new array where each number is multiplied by 2.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let Multi2 = arr.map((num)=> 
// {
//      return num*2;
// })
// console.log(Multi2);
// -------------------------------------------------------------------------------------------------------------------------
// 18) Create an array of ages. Return only those who are 18 or older.
// const ages = [2,4,5,10,15,18,19,24,36,50];

// let ageCheck = ages.filter((age) =>
// {
//     return age>=18;
// })
// console.log(`age: ${ageCheck.join(",")}`);
// ------------------------------------------------------------------------------------------------------------------------------
// 19) Use .find() to get the first number greater than 10 from an array.
// const arr = [3, 7, 11, 4, 25, 9];

// const checkValue = arr.find((num) => num > 10);

// console.log(checkValue); 


// ---------------------------------------------------------------------------------------------------------------------------------
// 20) Use .forEach() to print every name from an array of names.

// const students = [
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// students.forEach((names)=> console.log(names.name));
// ----------------------------------------------------------------------------------------------------------------------------------
// 21) Use .map() to return an array of only student names.

// const students = [
//       { name: "Ali", marks: 80 },
//       { name: "Zara", marks: 95 },
//       { name: "Umar", marks: 45 }
//     ]
// let getStdname = students.map((names)=>
// {
//     return names.name
// })
// console.log(getStdname);
// --------------------------------------------------------------------------------------------------------------------------------
// 22) Use .filter() to return students who scored more than 50.

// const stdData = [
//     {
//         name: "Shayan",
//         score: 70
//     },
//     {
//         name: "Ahmed",
//         score: 55
//     },
//     {
//         name: "Affan ",
//         score: 51
//     },
//     {
//         name: "Atif",
//         score: 40
//     },
//     {
//         name: "Sohail",
//         score: 20
//     }
// ]
// const scoreCheck = stdData.filter((score)=>
// {
//     if(score.score>50)
//     {
//         console.log(`${score.name}: gain 50 above score`);
        
//     }
// });
// -------------------------------------------------------------------------------------------------------------------------------
// 23) Use .find() to get the student whose name is "Zara".
// const stdName =[
//     {name: "Zara"},
//     {name: "Shayan"},
//     {name: "Ahmed"}
// ]
//  const nameFind = stdName.filter((names)=>
// {
//     if(names.name==="Zara")
//     {
//         console.log(names)
//     }
// })

// ------------------------------------------------------------------------------------------------------------------------
// 24) Use .forEach() to print each student’s name and marks.

// const  stdData  =[
//     {
//         name: "Sohail",
//         marks: 100
//     },
//     {
//         name: "Ahmed",
//         marks: 200
//     },
//     {
//         name: "Shayan Sheikh",
//         marks: 300
//     }
// ]
// stdData.forEach( print =>
// {
//     console.log(print);
    
// })
// -------------------------------------------------------------------------------------------------------------------------------------
// 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.

// const arr =[2,4,6,8];
// const newArr = arr.map((value)=>
// {
//    return value*value;

// })
// console.log(newArr);
// ------------------------------------------------------------------------------------------------------------------------
// 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.

// const name = ["Ali", "Zara", "Umar", "Ahmed"];
// name.forEach(element => {
//     document.write(`${element} <br>`);  
// });
// ------------------------------------------------------------------------------------------------------------------------
// 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.

// const age =[12, 25, 17, 20, 16, 30];

// const form = age.filter((ages) =>
// {
//     if(ages>18)
//     {
//         return ages;
//     }
// })
// console.log(form);
// ---------------------------------------------------------------------------------------------------------------------------------
// 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].

// const fruitName= ["banana", "mango", "grapes", "apple"];

// let find = fruitName.find((fruit)=>
// {
//     if(fruit==="apple")
//     {
//         console.log("Apple exist in array");
        
//     }
// })
// ---------------------------------------------------------------------------------------------------------------------------
// 29) From the following list, find the first student who scored more than 90:
// [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ]

// const students = [
//       { name: "Ali", marks: 75 },
//       { name: "Zara", marks: 92 },
//       { name: "Umar", marks: 85 }
//     ]
// const firstStdNAme = students.find((names)=> 
// {
//   return  names.marks>90;
// })
// console.log(firstStdNAme.name);
// ------------------------------------------------------------------------------------------------------------------------
// 30) You have an array [200, 150, 300, 100]. Return the total sum.
// → Output: 750

// const arr = [200, 150, 300, 100];
// let number =0;
//  for(let addingNum of arr)
// {
//     number+=addingNum;
// }
// console.log(`-> output: ${number}`);
// --------------------------------------------------------------------------------------------------------------------------------
// 31) From this array:
// [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ]
// Return a new array of only usernames.

// let arr =
// [ 
//      { id: 1, username: "ali123" },
//       { id: 2, username: "zara88" },
//       { id: 3, username: "umar_01" }
// ]
// let onlyName = arr.map((names)=> names.username)
// console.log(onlyName);
// -------------------------------------------------------------------------------------------------------------------------
// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// → Output: [1, 3, 5]

// const arr = [1, 2, 3, 4, 5, 6];

// let checkOdd = arr.filter((value)=>
// {
//    return value % 2 !==0;
// })
// console.log(checkOdd);
// --------------------------------------------------------------------------------------------------------------------------------
// 33) Count how many vowels are present in the string "javascript".

//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     const str = "javascript";
//     const charArray = str.split('');
//     const vowelArray = charArray.filter(char => vowels.includes(char));
//     console.log(vowelArray.length);
// -----------------------------------------------------------------------------------------------------------------------------
// 34) Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// const tasks = [
//     { task: "Assignment", completed: true },
//     { task: "Homework", completed: false }
//   ];
  
//   tasks.forEach(item => {
//     const status = item.completed ? "Completed" : "Incomplete";
//     console.log(`Task: ${item.task} - Status: ${item.completed}`);
//   });
// ---------------------------------------------------------------------------------------------------------------------------
// 35) From a list of employees, return a new array that adds a new field:
// "status": "active" to each object.
const employes =[
  {
    name: "Adnan"
  },
  {
    name: "Shayan"
  },
  {
    name: "Ahmed"
  }
];

const newArr = employes.filter((add)=>
{
  return add.status ="active";   
})
console.log(newArr);
