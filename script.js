const todos = [
	{
		title: 'Get groceries',
		dueDate: '2022-06-22',
	},
	{
		title: 'Clean bike',
		dueDate: '2022-06-23',
	},
	{
		title: 'Make dinner',
		dueDate: '2022-06-24',
	},
];

render();

addTodo = () => {
	const textbox = document.getElementById('text-box');
	const title = textbox.value;

	const datePicker = document.getElementById('date-picker');
	const dueDate = datePicker.value;
	todos.push({
		title: title,
		dueDate: dueDate,
	});

	render();
};

function render() {
	document.getElementById('todo-list').innerHTML = '';
	todos.forEach(function (todo) {
		const element = document.createElement('div');
		element.innerText = todo.title + ' ' + todo.dueDate;
		const todoList = document.getElementById('todo-list');
		todoList.appendChild(element);
	});
}

//coding L1F3
