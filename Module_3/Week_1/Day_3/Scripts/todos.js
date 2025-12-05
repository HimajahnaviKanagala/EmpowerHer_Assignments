import { displayTodos } from "../Module/displayTodos.js";

if(localStorage.getItem("isLoggedIn") !=="true"){
    alert("please login first!");
    window.location.href="login.html";
}

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=>response.json())
    .then(data=>displayTodos(data.slice(0,30)));