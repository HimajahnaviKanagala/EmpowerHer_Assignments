/* a */
const username="Himajahnavi";
const course="JavaScript";
console.log(`Hello, ${username}! Welcome to the ${course} course.`);

/* b */
const name="Sam";
const age=21;
const student={
    name,
    age,
    greet(){
        console.log("Hello");
    }
};

/* c */
const getFullName=(first,last)=>`${first} ${last}`;
console.log(getFullName("Hima","Jahnavi"));