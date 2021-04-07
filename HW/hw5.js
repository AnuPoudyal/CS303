//Question 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
/*function askPassword(ok, fail) {
let password = prompt("Password?", '');
if (password == "rockstar") ok();
else fail();
}
let user = {
name: 'John',
loginOk() {
alert(`${this.name} logged in`);
},
loginFail() {
alert(`${this.name} failed to log in`);
},
};
askPassword(user.loginOk, user.loginFail);
*/
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
    }
    let user = {
    name: 'John',
    loginOk() {
    console.log(`${this.name} logged in`);
    },
    loginFail() {
    console.log(`${this.name} failed to log in`);
    },
    };
    askPassword(user.loginOk.bind(user),user.loginFail.bind(user));





//Fix the code below using bind
/*let group = {
title: "Our Group",
students: ["John", "Pete", "Alice"],
showList: function() {
this.students.forEach(function(student) {
console.log(this.title + ": " + student);
});
}
};
group.showList();*/

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
    this.students.forEach(function(student) {
    console.log(this.title + ": " + student);
    }.bind(this));
    }
    };
    group.showList()