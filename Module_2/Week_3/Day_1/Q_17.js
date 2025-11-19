//a
const arr1=[1,2,3];
const arr2=[4,5];
const result=[...arr1,...arr2];
console.log(result);

//b
const sum=(...nums)=>nums.reduce((a,b)=>a+b,0);
console.log(sum(1,2,3,4,5));

//c
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {name, address:{city,pin}}=user;
console.log(name);
console.log(city);
console.log(pin);
