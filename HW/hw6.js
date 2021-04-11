
//Object Literal

 /*let student = {
 firstName: "default",
   lastName: "default",
   grades: [90, 80, 70],
   inputNewGrade: function (newGrade) {
     this.grades.push(newGrade);
   },
   computeAverageGrade: function () {
     let average = this.grades.reduce(
       (sum, item, index, arr) => sum + item / arr.length,0);
     return average;},
    };

let john= Object.create(student);
john.firstName = "John";
john.lastName = "smith";
john.grades = [60, 90, 80];

let bobby = Object.create(student);
bob.firstName = "Bob";
bob.lastName = "Doe";
bob.grades = [85, 95, 83];

let cathrine = Object.create(student);
cathrine.firstName = "Cathy";
cathrine.lastName = "Jade";
cathrine.grades = [90, 80, 95];

let arr = [john, bobby, cathrine];

 let averages = arr.map((item) => item.computeAverageGrade());
 console.log(averages);*/

//Constructor function

function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
  }
  Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
    return this.grades;
  };
  Student.prototype.computeAverageGrade = function () {
    let average = this.grades.reduce(
      (sum, item, index, arr) => sum + item / arr.length,
      0
    );
    return average;
  };
  let john = new Student("John", "Smith", [60, 70, 80]);
let bobby = new Student("Bob", "Doe", [85, 95, 83]);
let cathrine = new Student("cathy", "jade", [90, 80, 95]);
let arr = [john, bobby, cathrine];

let averages = arr.map((item) => item.computeAverageGrade());
console.log(averages);


Student.prototype.sort = function () {
    let sorted = this.grades.sort((x, y) => x - y);
    console.log(sorted);
    return sorted;
  };
  
  john.sort();