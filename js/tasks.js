function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete">Удалить</button>
    `;
    
    taskList.appendChild(listItem);
    saveTasks();
}

// Сохранение задач в localStorage
function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('#task-list li')).map(item => ({
        text: item.querySelector('span').textContent,
        completed: item.querySelector('input[type="checkbox"]').checked
    }));

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Загрузка задач из localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(task => addTask(task.text));
}

// Событие добавления новой задачи
document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== '') {
        addTask(this.value.trim());
        this.value = '';
    }
});

// Удаление выполненных задач
document.getElementById('clear-completed').addEventListener('click', function() {
    const tasks = document.querySelectorAll('#task-list li');
    tasks.forEach(task => {
        if (task.querySelector('input[type="checkbox"]').checked) {
            task.remove();
        }
    });
    saveTasks();
});

// Удаление задачи по кнопке
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Инициализация списка задач
loadTasks();
