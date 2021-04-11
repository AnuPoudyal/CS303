/*class User{
    constructor(name){
this.name=name;
    }
set name(value){
    this._name=value;
}
get name(){
    return this._name;
}}
let john=new User('John');
console.log(john.name);*/

/*class User{
constructor(name){
    this.name=name;
}
set name(value){
if(value.length<4){
    console.log("too short");
}else{
    this._name=value;
}}}
let user=new User("john");
console.log(user.name);
user.name='fred';
let user2=new User("");*/


//setName() and getName()
class User{
constructor(name){
    this.setName(name);
}
setName(name){
    this._name=name;
}
getName(){
    return this._name;
}}
let user=new User('John');
console.log(user.getName());
user.setName('tina');
console.log(user.getName());
