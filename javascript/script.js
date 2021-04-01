

let class1 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies",
};

let class2 = {
    code: "ACIT 1515",
    name: "Scripting for IT",
};

let class3 = {
    code: "MATH 1310",
    name: "Technical Matyh for IT",
};

var courseList = [class1, class2, class3]

let user;
do{
    code = prompt("Enter a code.")
} while(isNaN(code) || length(code) !== 4)
















// // alert("hello");
// let result =1;
// for(let i=1; i<11; i=i+1)
// {
//     result = result *2;
//     console.log(result);
// }

// while(result<1024)
// {
//     result = result *2;
//     console.log(result);
// }
// let user;
// do{
//     user= prompt("what is your name?");
// } while(!isNaN(user)); //isNaN returns false for a number
// alert("Hello " + user);

// let fruits = ["Apple", "Banana"];

// console.log(fruits);
// let length = fruits.push("Orange");
// // console.log("The length: " + length)
// console.log(fruits);
// // let element = fruits.pop();
// console.log(fruits);
// // console.log("The removed element: " + element);
// fruits.unshift("Mango");
// console.log(fruits);
// console.log(fruits.includes("strawberry"));
// console.log(fruits.indexOf("strawberry"));

// let sequence = [1,1,2,3,5,8,13];

// for(let i =0; i <sequence.length; i++)
// {
//     if(sequence[i]%2 === 1)
//     {
//         console.log(sequence[i]);
//     }
// }

// for(let item of sequence)
// {
//     if(item%2 === 1)
//         {
//             console.log(item);
//         }
// // console.log(item);
// }

///////// let person=
///////// {
/////////     name :'Celeste',
/////////    age:31,
/////////    height:'170cm',
///////// };
// for (let key in person )
// {
//     console.log(`Person's ${key} is ${person[key]}`);
//     // console.log(person.key) This doesn't work
// }

// console.log("my name is " + person["name"][0] + " " + person.name[1]);
// console.log(`my name is ${person["name"][0]} ${person.name[1]}`);


////////

// let student1 = {
//   ID: "A00022",
//   GPA: 3.0,
//   program: "CIT",
// };

// let student2 = {
//   ID: "A01000",
//   GPA: 3.1,
//   program: "CST",
// };

// let student3 = {
//   ID: "A00114",
//   GPA: 3.2,
//   program: "CIT",
// };

// let students = [student1, student2, student3];
// let counter = 0;
// // for (let i = 0 ; i <students.length; i++)
// // {
// //     console.log(students[i])
// // }
// for(let stu of students)
// {
//     // console.log(stu);
//     if(stu.program === "CIT" && stu.GPA > 3)
//     {
//         counter ++;
//     }
// }
// console.log("number of students in CIT with GPA greater than 3: " + counter)
