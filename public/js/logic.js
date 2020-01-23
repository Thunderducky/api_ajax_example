const todolistUl = $("#todolist");
const newTodoInput = $("#new-todo");
const newTodoButton = $("#save");
function renderTodos(data){
    todolistUl.empty();
    data.forEach(todo => {
        todolistUl.append(`
            <li>${todo.text}</li>
        `)
    })
}
$.get("/api/todos").then(data => {
    console.log(data);
    renderTodos(data);
})

newTodoButton.click(e => {
    e.preventDefault();
    // What data do we need
    const userText = newTodoInput.val();
    console.log(userText);
    const newTodo = {
        text: userText,
        done: false
    };
    $.post("/api/todos", newTodo).then(() => {
        $.get("/api/todos").then(data => {
            console.log(data);
            renderTodos(data);
        })
    });

});