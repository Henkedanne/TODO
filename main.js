const input = document.querySelector('.input-field');
const button = document.querySelector('.input-add');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('form');

function addItem(e) {
		e.preventDefault();
		var newLi = document.createElement('li');
		newLi.appendChild(document.createTextNode(input.value));
		todoList.appendChild(newLi);
		form.reset();
}

button.addEventListener('click', addItem);