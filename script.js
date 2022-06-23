const todos = ['Get groceries', 'Clean bike', 'Make dinner'];

render();

addTodo = () => {
	const textbox = document.getElementById('text-box');
	const input = textbox.value;
	todos.push(input);

	render();
};

function render() {
	document.getElementById('todo-list').innerHTML = '';
	todos.forEach((todoTitle) => {
		const element = document.createElement('div');
		element.innerText = todoTitle;
		const todoList = document.getElementById('todo-list');
		todoList.appendChild(element);
	});
}

//coding L1F3
