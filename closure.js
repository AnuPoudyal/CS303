/*function a() {
    console.log(x); // consult Global for x and print 20 from Global
    }
    function b() {
    const x = 10;
    a(); // consult Global for a
    }
    const x = 20;
    b();*/

    /*function b() {
        function a() {
        console.log(x);
        }
        const x = 10;
        a();
        }
        const x = 20;
        b(); */

      /*  function b() {
            function a() {
            console.log(x);
            }
            a();
            }
            const x = 20;
            b();*/

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




