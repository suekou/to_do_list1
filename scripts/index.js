const form = document.querySelector('form');
const input = document.querySelector('input[name="newTask"]');
const taskContainer = document.getElementById('taskContainer');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const task = input.value.trim();

	if (task === '') {
		alert('タスクを入力してください');
		return;
	}

	if (task.length > 30) {
		alert('30文字数以下にしてください');
		return;
	}

	const div = document.createElement('div');
	div.classList.add('unfinished');

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	div.appendChild(checkbox);

	const text = document.createTextNode(task);
	div.appendChild(text);
	taskContainer.appendChild(div);
	input.value = '';
});

const removeButton = document.getElementById('removeItems');

removeButton.addEventListener('click', () => {
	const checkedItems = document.querySelectorAll('input:checked');
	checkedItems.forEach((item) => {
		item.parentElement.remove();
	});
});

const finishButton = document.getElementById('finishItems');

finishButton.addEventListener('click', () => {
	const checkedItems = document.querySelectorAll('.unfinished input:checked');
	checkedItems.forEach((item) => {
		item.parentElement.classList.replace('unfinished', 'finished');
		item.checked=false;
	});
});