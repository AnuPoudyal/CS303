/*let animal={ eats:true};
let rabbit={jumps:true};
rabbit.__proto__=animal;
console.log(rabbit.eats);*/

/*let animal={eats:true,
      walk:function(){
        console.log("animal walk");
      }};
let rabbit=Object.create(animal);
      rabbit.jumps=true;
      rabbit.walk(); */

      /*let animal={eats:true,
        walk:function(){
          console.log("animal walk");
        }};
        let rabbit=Object.create(animal);
        rabbit.jumps=true;
        let longEar=Object.create(rabbit);
        longEar.earLength=10;
        longEar.walk();*/

        /*let animal={
          eat:true,
          walk:function(){
            console.log("animal walk");
           }};
           let rabbit=Object.create(animal);
           rabbit.walks=true;
           rabbit.walk=function(){
             console.log("rabbit walk");
           }
rabbit.walk();*/

//this
/*let user={ firstName:"default",
lastName:"default",
getFullName:function(){
  console.log(this.firstName+ " "+ this.lastName);
}};
let john=Object.create(user);
john.firstName='john';
john.lastName='smith';
john.getFullName();//john smith 
let william=Object.create(john)
william.firstName='william';
william.lastName='happy';
william.getFullName();//william happy


//for..in loop
let animal={eats:true};
let rabbit=Object.create(animal);
rabbit.jumps=true;
console.log(object.keys(rabbit));//jumps
for(let key in rabbit){
  console.log(key); //jumps,eat
} */

/*let head={glass:1};
let table=Object.create(head);
table.pen=3;
let bed=Object.create(table);
bed.sheet=1;
bed.pillow=2;
let pockets=Object.create(bed);
pockets.money=2000;
console.log(pockets.pen);//3
console.log(table.glass);//1 */

/*let head={glass:1};
let table={pen:3,
__proto__:head,
};
let bed={
  sheet:1,
  pillow:2,
  __proto__:table};
  let pockets={
    money:2000,
    __proto__:bed
  };
  console.log(pockets.pen);
*/

//constructor
/*function User(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
}
let user1=new User('john','smith');
let user2=new User('johny','happy');
User.prototype.getFullName=function(){
  console.log(this.firstName+" "+this.lastName);
}
user1.getFullName();
user2.getFullName();
*/

//add eat method which will be available for rabbitand longear
 //animal.eat=function(){...};

//for User function add eat method which is available for user1 and user2
//user.prototype.eat=function(){..}; 

/*function Calculator(n1,n2){
this.num1=n1;
this.num2=n2;
}
Calculator.prototype.add=function(){
  return this.num1+this.num2;
}
Calculator.prototype.substract=function(){
  return this.num1-this.num2;
}
Calculator.prototype.multiply=function(){
  return this.num1*this.num2;
}
Calculator.prototype.divide=function(){
  return this.num1/this.num2;
  }
  const calc=new Calculator(2,5);
  console.log(calc.add());*/
 

      
