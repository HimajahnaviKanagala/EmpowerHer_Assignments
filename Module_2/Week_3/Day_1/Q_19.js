//1.
//a
console.log(`5+7=${5+7}`);
//b
const msg=`
This is first line.
This is second line.
This is third line.
`;
console.log(msg);
//c
const name1=(firstName,lastName)=>`${firstName} ${lastName}`
console.log(name1("Hima","Jahnavi"));

//2
//a
const square= n => n*n;
console.log(square(5));
//b
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
//Explanation:
// In this example, the arrow function used for the 'test' method does not have its own 'this' context. Instead, it inherits 'this' from the surrounding lexical scope, which in this case is the global scope (or undefined in strict mode). Therefore, 'this.value' does not refer to 'obj.value', and it results in 'undefined' being logged to the console. If we want to access 'obj.value', we should use a regular function instead of an arrow function for the 'test' method.
// C
const objCorrected = {
    value: 50,
    test: function() { console.log(this.value); }
};
objCorrected.test(); 

//3.
//a
const product = { name: "Pen", price: 10 };
const copy={...product};
console.log(copy);
//b
const a1 = { x: 1 };
const b1 = { y: 2 };
const merged={...a1,...b1};
console.log(merged);
// c
const maxValue=(...nums) => Math.max(...nums);
console.log(maxValue(3,5,1,8,2));
 
//4.
//a
const arr = [10, 20, 30];
const [a2,b2]=arr;
console.log(a2);
console.log(b2);
//b
const laptop = { brand: "Dell", ram: "8GB" };
const{brand,ram}=laptop;
console.log(brand);
//c
const info = {};
console.log(info?.name);

//5.
//a
for (var i = 0; i < 3; i++) {}
console.log(i);
//output: 3
//b
for (let j = 0; j < 3; j++) {}
console.log(j);
//output: ReferenceError: j is not defined
//c
// It prevents reassignment, improves code safety and predictivity.

//6
//a
const speed = kmph => kmph>60? "Fast":"slow";
console.log(speed(80));
console.log(speed(50));
//b
const age1= age=>age>=18 ? "Adult":"Minor";
console.log(age(20));
console.log(age(16));
//c
const checkNumber = num => num>0?"Positive":num===0?"Zero":"Negative";
console.log(checkNumber(10));
console.log(checkNumber(0));
console.log(checkNumber(-5));

//7.
//a
const nums = [1,2,3];
console.log([...nums,4,5]);
//b
const a = ["x","y"];
const b = ["z"];
console.log([...a,...b]);
//c
const names=(...names)=>names;
console.log(names("A","B","C"));

//8.
//a
const user1 = { id: 101, status: "active" };
const {id1,status}=user1;
console.log(id);
console.log(status);
//b
const id = 101;
const role = "admin";
const user = {
  id,
  role
};
//c
const name2="Alice";
const age=21;
const person={
    name,
    age,
    greet(){
        console.log(`Hello, my name is ${name}`);
    }
};
person.greet();

//9.
//a
console.log(`Today's date is ${new Date().toDateString()}`);
//b
const name3="John";
const score=95;
console.log(`Hello ${name3}, your score is ${score}/100`);

//10.
//a
const add = (a,b) => a+b;
console.log(add(5,7));
//b
const isAdult= age => age>30? true:false;
console.log(isAdult(35));
console.log(isAdult(25));
//c
const double= n=>n*2;
console.log(double(8));

//11.
//a
const arr1=[5,10,15];
const clone=[...arr1];
console.log(clone);
//b
const arr3=[1,2,3,4];
const res=[100,...arr3];
console.log(res);
//c
const obj1 = { name: "Sam", age: 20 };
const obj2 = { age: 25, city: "Delhi" };
const merged2 = { ...obj1, ...obj2 };
console.log(merged2);

//12.
//a
const user2 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user2?.address?.city);
//b
const user3={
    name:"Emma"
};
console.log(user3?.job?.title);
//c
const student={
    name:"Ravi"
};
console.log(student?.address?.city);




