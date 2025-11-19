//a
const isEven = n => n%2===0?true:false;
console.log(isEven(4));
console.log(isEven(7));

//b
const ispass= marks=> marks>35 ? "pass":"fail";
console.log(ispass(75));
console.log(ispass(25));
 
//c
const greet= name => `Hello, ${name ? name : "Guest"}`;
console.log(greet("Hima"));
console.log(greet(""));
