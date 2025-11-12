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
