class TodoList {
  constructor() {
    this.form = document.querySelector("#new-todo-form");
    this.list = document.querySelector("#todo-list");
    this.newTodoInput = document.querySelector("#new-todo");
    this.tasks = [];
    this.form.addEventListener("submit", this.addTask.bind(this));
    this.list.addEventListener("click", this.handleListClick.bind(this));
  }

  addTask(event) {
    event.preventDefault();
    const taskText = this.newTodoInput.value.trim();
    if (taskText !== "") {
      const task = new Task(taskText);
      this.tasks.push(task);
      this.newTodoInput.value = "";
      this.render();
    }
  }

  handleListClick(event) {
    if (event.target.classList.contains("edit-button")) {
      const taskItem = event.target.closest("li");
      const taskId = taskItem.dataset.id;
      this.editTask(taskId);
    } else if (event.target.classList.contains("delete-button")) {
      const taskItem = event.target.closest("li");
      const taskId = taskItem.dataset.id;
      this.deleteTask(taskId);
    }
  }

  editTask(taskId) {
    const task = this.tasks.find((task) => task.id === taskId);
    const newTaskText = prompt("Edit task:", task.text);
    if (newTaskText !== null) {
      task.text = newTaskText.trim();
      this.render();
    }
  }

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.render();
    }
  }

  render() {
    this.list.innerHTML = "";
    this.tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.dataset.id = task.id;
      const taskText = document.createElement("span");
      taskText.classList.add("task");
      taskText.textContent = task.text;
      taskItem.appendChild(taskText);
      const editButton = document.createElement("button");
      editButton.classList.add("edit-button");
      editButton.textContent = "Edit";
      taskItem.appendChild(editButton);
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      deleteButton.textContent = "Delete";
      taskItem.appendChild(deleteButton);
      this.list.appendChild(taskItem);
    });
  }
}

class Task {
  static nextId = 1;

  constructor(text) {
    this.id = Task.nextId++;
    this.text = text;
  }
}

const todoList = new TodoList();
