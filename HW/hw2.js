//Question 1: Sum all numbers till the given one
function sum(n){
if(n===1){
    return 1;
}else{
    return n + sum(n-1);
}
}
console.log(sum(5));






//Use Object literal to create an object named linkedlist which has the following methods:
//linkedlist.add(1)
//linkedlist.remove(2) – remove the first one
//linkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }


let linkedList = {};
linkedList.next = { value: 1 };
linkedList.next.next = { value: 2 };
linkedList.next.next.next = { value: 5 };
linkedList.next.next.next.next = { value: 2 };
linkedList.next.next.next.next.next = { value: 7, next: null };
console.log(`linkedList {${printList(linkedList.next)}}`);
let node = linkedList.next.next;
linkedList.next = node;
node = null;
console.log(`linkedList {${printList(linkedList.next)}}`);
function printList(linkedList) {
if (linkedList.next == null) {
return linkedList.value;
 } else {
return linkedList.value + ", " + printList(linkedList.next);
 }
}



