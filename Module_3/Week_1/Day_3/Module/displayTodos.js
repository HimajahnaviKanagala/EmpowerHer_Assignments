export function displayTodos(data){
    const container=document.getElementById("todo-container");
    container.innerHTML = "" ;

    data.forEach(todo => {
        const div=document.createElement("div");
        div.style.border="1px solid #ccc";
        div.style.margin="10px";
        div.style.padding="10px";

        div.innerHTML= `
          <h3>${todo.title}</h3>
          <p>Status:${todo.completed ? "completed" : "pending"}</p>
        `;
        container.appendChild(div);
    });
}