//find user whose name is in array
let users=[
           {id:1,name:"john"},
           {id:2,name:"pete"},
           {id:3,name:"mary"}
];

      let result= users.find(user=> user.name==="pete");
console.log(result);

//find user whose id is 1
let user=users.find(user=>user.id===1);
console.log(user.name);

//find index
let indexResult=users.findIndex(user=>user.name==="pete");
    console.log(indexResult);
//filter find array whose name containing e

let filtered=users.filter(function(item,index,array){
return item.name.includes('e');
});
console.log(filtered);

let filterd=users.filter(item=>item.name.includes('e'));
console.log(filtered);

//map return the length of names

let mapped=users.map(function(item){
return item.name.length;
});
console.log(mapped);
//map return the id

let maped=users.map(function(item){
return item.id;
});
console.log(maped);

//using map get the result 
//{index:0,name:"john",length:4}

let res=users.map(function(item,idx,array){

return {index:idx,name:item.name,length:item.name.length};

});
console.log(res);

//reduce: single value
//find the sum of array using reduce

let arr=[1,2,3,4,5,10,8];

let reduced=arr.reduce(function(sum,item,index,array){
return sum+item;
},0);
console.log(reduced);

//exercise// count total no of users whose name length is greater than 4
 
let total=users.filter(user=>user.name.length>4)
                .reduce(function(sum,item,index,array){
                    return sum+1;
                },0);
                console.log(total);


                let tot=users.filter(user=>user.name.length>4).length;
                console.log(tot);

                //return an array whose  users name contains letter a

                let namelen=users.filter(item=>item.name.includes('a'))
                     .map(item=>item.name.length);
                     console.log(namelen);



let totl=users.filter(user=>user.name.length>4)
               .map(function(sum,item,index,array){
               return sum+1;
               
            },0);
              console.log(totl);
              
              let nameLenArray=users.filter(item=>item.name.includes('a'))
                                     .map(item=>item.name.length);
                                     console.log(nameLenArray);

//For a given array, sum all the elements which are greater than 20.
////[1, 50, 40, 3, 10] => Print result: 90


let arr3=[1,50,40,3,10];
let filteredd=arr3.filter(item=>item>20)
                .reduce(function(sum,item){
                    return sum+item;
                },0);
                console.log(filtered);


                let arr4=["mango","apple","grapes","kiwi"];
                let filted=arr4.filter(function(item,index){
                 if(item.length>5 && item.includes("a")){
                     return item;
                 }

                });
                console.log(filted);


                function makeArmy() {
                    let shooters = [];
                    let i = 0;
                    while (i < 10) {
                    let shooter = function() {
                    alert(i);
                    };
                    shooters.push(shooter);
                    i++;
                    }
                    return shooters;
                    }
                    let army = makeArmy();
                    army[0];