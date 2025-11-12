function signUp(user) {
    let users=["alice","bob","charlie"];
    if(users.includes(user)){
        return "User already Registered, please Login";
    } else {
        users.push(user);
        return "signup successful, please Login";
    }
}
console.log(signUp("bob"));
console.log(signUp("david"));

function login(name,password){
    let users=["alice","bob","charlie"];
    if(!users.includes(name)){
        return "User not found, please SignUp";
    }else if(password !== "Emp@123"){
        return "Incorrect Password";
    }else{
        return "Login Successful";
    }
}
console.log(login("alice","Emp@123"));
console.log(login("david","Emp@123"));
console.log(login("bob","wrong"));

