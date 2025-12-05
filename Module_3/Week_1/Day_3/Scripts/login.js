document.getElementById("login-btn").addEventListener("click",()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const user=JSON.parse(localStorage.getItem("user"));
    
    if(user && user.email===email && user.password===password){
        localStorage.setItem("isLoggedIn","true");
        window.location.href="todos.html";
    }else{
        alert("Invalid Credentials");
    }
});