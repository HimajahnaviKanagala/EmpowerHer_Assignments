//a
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

//output:
//20
// ReferenceError: x is not defined
// Explanation:
// In JavaScript, variables declared with 'let' have block scope, meaning they are only accessible within the block they are defined in (in this case, the 'if' statement). Therefore, when we try to access 'x' outside of the block, it results in a ReferenceError because 'x' is not defined in that scope. On the other hand, variables declared with 'var' have function scope (or global scope if not inside a function), so 'y' is accessible outside the block and prints its value of 20.

//b
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.account?.info?.phone);

//c
const user={
    name:"Sam"
};
console.log(user?.name);
console.log(user?.address?.city);