//Question 1: For a given array, sum all the elements which are greater than 20.
//[1, 50, 40, 3, 10] => Print result: 90

let arr=[1,50,40,3,10];
let totalSum=arr.filter(item=>item>20)
                 .reduce(function(sum,item){
                     return sum + item;
                    },0);
                     console.log(totalSum);
//Question 2: For a given String array, return a new array which contains all string, length is greater than and equals to 5, and contains letter ‘a’.

let arr1=["mango","apple","grapes,pineapple","kiwi"];
 let filtered=arr1.filter(function(item){
if(item.length>=5 && item.includes("a")){
    return item;
}
});
console.log(filtered);


//Question 3:
//Create a constructor function Employee with properties: firstName, lastName, birthdate: Date type, methods: getFullName(), getAge()
//Create an array with a few Employee objects with different firstName, lastName, birthdate.
//Find if there is any employee which age is greater than 20
//Return a String array which contains the full name of employee and born after 2000

function Employee(firstName,lastName,birthdate){
    this.firstName=firstName;
    this.lastName=lastName;
     this.birthdate=birthdate;
    this.getFullName=function (){
return this.firstName + " " +this.lastName;
    }
    this.getAge=function (){
 
        let current=new Date().getFullYear();
        let bd=new Date(this.birthdate).getFullYear();
        return current-bd;
    }
}
 
let employee1=new Employee("Mary","coh","1998-1-23");
let employee2=new Employee("Sima","doe","2006-2-4");
let employee3=new Employee("Jazz","smith","1989-5-6");
let employee4=new Employee("Ruby","jae","1983-4-6");
 
let arr2=[employee1,employee2,employee3,employee4];
 
let foundItem=arr2.filter(function(item){
    if(item.getAge()>20){
        return foundItem;
    }});
console.log(foundItem);

let str=arr2.filter(function(item){
    if(item.getAge()<21){return item;
    }}).map(function(item){
        return item.getFullName();
    });

console.log(str); 


