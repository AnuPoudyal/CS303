//Question 1: Sum all numbers till the given one
function sum(n){
if(n===1){
    return 1;
}else{
    return n + sum(n-1);
}
}
console.log(sum(5));

//Question 2: - use recursion to implement print() method

let linkedList = { value: 1 };
linkedList.next = { value: 2 };
linkedList.next.next = { value: 3 };
linkedList.next.next.next = { value: 4 };
linkedList.next.next.next.next = null;
function print(linkedList){
console.log(linkedList.value);
}
if(linkedList.next){
    print(linkedList.next);
}

print(linkedList);






//Use Object literal to create an object named linkedlist which has the following methods:
//linkedlist.add(1)
//linkedlist.remove(2) – remove the first one
//linkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }






