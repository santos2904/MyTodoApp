// MODEL
// If local storage has a todos array, then use it
// Otherwise use default array
let todos;

// Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (Array.isArray(savedTodos)) {
	todos = savedTodos;
} else {
	todos = [
		{
			title: 'Get groceries',
			dueDate: '2022-06-22',
			id: 'id1',
		},
		{
			title: 'Clean bike',
			dueDate: '2022-06-23',
			id: 'id2',
		},
		{
			title: 'Make dinner',
			dueDate: '2022-06-24',
			id: 'id3',
		},
	];
}

// Creates a todo
const createTodo = (title, dueDate) => {
	const id = '' + new Date().getTime();

	todos.push({
		title: title,
		dueDate: dueDate,
		id: id,
	});
	saveTodos();
};

// Deletes a todo
const removeTodo = idToDelete => {
	todos = todos.filter(todo => {
		if (todo.id === idToDelete) {
			return false;
		} else {
			return true;
		}
	});
	saveTodos();
};

const saveTodos = () => {
	localStorage.setItem('todos', JSON.stringify(todos));
};

// CONTROLLER
const addTodo = () => {
	const textbox = document.getElementById('text-box');
	const title = textbox.value;

	const datePicker = document.getElementById('date-picker');
	const dueDate = datePicker.value;

	createTodo(title, dueDate);
	render();
};

/*function deleteTodo(event) {
	const deleteButton = event.target;
	const idToDelete = deleteButton.id;
	removeTodo(idToDelete);
	render();
}*/

const onDelete = todoToDelete => {
	return () => {
		removeTodo(todoToDelete.id);
		render();
	};
};

// VIEW
function render() {
	document.getElementById('todo-list').innerHTML = '';

	todos.forEach(todo => {
		const element = document.createElement('div');
		element.innerText = `${todo.title} ${todo.dueDate}`;

		const deleteButton = document.createElement('button');
		deleteButton.innerText = 'Delete';
		deleteButton.style = 'color: red; margin-left: 12px;';

		deleteButton.onclick = onDelete(todo);
		element.appendChild(deleteButton);

		const todoList = document.getElementById('todo-list');
		todoList.appendChild(element);
	});
}
render();
