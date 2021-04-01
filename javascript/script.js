// establish vars
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
    name: "Technical Meth for IT",
};
let class4 = {
    code: "empty - to be filled by invalid user input",
    name: null,
};

var num_exists = false;

var courseList = [class1, class2, class3];



// functioning code

let user;
do{
    given_code = prompt("Enter a 4-digit number code... IF YOU DARE!!!!!")
} while(given_code.length !== 4 || isNaN(given_code));

for (let item of courseList) {
    if (item.code.includes(given_code) === true) {
        console.log(`Yes, I am taking ${item.code} - ${item.name}`);
        alert(`Yes, I am taking ${item.code} - ${item.name}`);
        num_exists = true
        break;
    }
    else {
        console.log("NO!!!!, I am NOT taking " + item.code + " - " + item.name);
    };
};

if (num_exists === false) {
    class4.code = given_code
    courseList.push(class4)
    console.log("Class4 added")
}
else {
    num_exists === false
};
