// java script Variable 48:30-

// store data and apply everywhere...


let fruits = 'mango';
console.log(`${fruits} is my favourite fruit. ${fruits} I like to eat`);


/* JS Name or Identifyer..
?camel Case --- firstName [Right way]
pascale Case ---- FirstName 
! Warnig 
js case sensative.. FirstName and firstName not same name..
js not allowed resarved word as like let var function if  etc//
js not allow space in name .... 
*/
// 3 types variable..//

// var//
/* 
 > Re-declare possible ..
   var a = 10;
   a=20;
   console.log(a); 
   ans: 20 ;
> Re- assign possible...
    var b = 10;
    var b = 'Bangladesh';
    console.log(b);
    Ans Bangladesh
> Global Scooped possible...
    var c = 5;
    {
    console.log(c);
    }
    working ans 5
> Hosted not
    hosted 
console.log(country);  
var country = 'india';

var device;
console.log(device);
device = 'laptop';


 */ 


var a = 10;
a=20;
console.log(a);

var b = 10;
var b = 'Bangladesh';
console.log(b);

var c = 5;
{
    console.log(c);
    var blocked = 30;
}
console.log(blocked);

/* hosted 
console.log(country);  
var country = 'india';

var device;
console.log(device);
device = 'laptop';*/


// let //
/*  
 ! Re-declare Not possible ..
 > Re- Assign possible ..
 ?  Block Scooped...
 ! Hosted not ..
*/

/*

!let d = 10;
let d = 5;
console.log(d);

! not global

{
    let e = 15;
    e = 20;
}

console.log(e);
*/


    let e = 15;
    e = 20;


{console.log(e);}



// const //
/*  
 ! Re-declare Not possible ..
 ! Re- Assign possible ..
 ?  Block Scooped...
 ! Hosted not ..
*/

// object array by const ..

const person = {
    firstName : 'Shaharia',
    age : 25,
 };
 person.country = 'Bangaldesh';
person.age = 32;
console.log(person);

let firstName1 = 'Soron'


