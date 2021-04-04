/*➢ Draw a lexical environment diagram for the right
code and show:
➢ global lexical environment (LE)
➢ LE for makeArmy()
➢ LE for LE of the while loop
➢ LE for army[0]
➢ What will army[0] alert?
➢ Can you fix the code?
➢ How will the diagram change?*/

/*function makeArmy() {
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
    army[0];*/

 //passing parameter



 //corrected code 

function makeArmy() {
    let shooters = [];
    let i = 0;
      while (i < 10) {
    let shooter = function() {
      console.log(i);
    };
    shooters.push(i);
    i++;
    }
    return shooters;
    }
    let army = makeArmy();
    console.log(army)//this will print numbers from 0-10 
    console.log(army[0]);//this will print 0

