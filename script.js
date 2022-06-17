let todos = ['Get groceries', 'Clean bike', 'Make dinner'];
todos.push('another todo');

todos.forEach(function (todoTitle) {
	let element = document.createElement('div');
	element.innerText = todoTitle;
	document.body.appendChild(element);
});
