function addTodo(e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        todos.push(todo);
        renderTodos();
        todoInput.value = '';
    }
}