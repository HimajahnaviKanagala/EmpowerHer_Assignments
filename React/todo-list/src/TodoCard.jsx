function TodoCard({userId, title, completed}){
    return (
        <div>
            <p><strong>User ID:</strong> {userId}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Status:</strong> {completed ? "Completed" : "Not Completed"}</p>
        </div>
    );
}
export default TodoCard;