console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0); 
Promise.resolve().then(() => { console.log("Promise Task"); }); 
console.log("End");
 
//Explanation:
// The output will be:
// Begin
// End
// Promise Task
// Timeout Task
// This is because synchronous code runs first, followed by microtasks (Promises), and then macrotasks (setTimeout).
