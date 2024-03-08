function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  if (task !== "") {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
      <input type="checkbox" onchange="completeTask(this)">
      <span>${task}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    input.value = "";
  }
}

// Function to mark a task as completed
function completeTask(checkbox) {
  var taskSpan = checkbox.nextElementSibling;
  if (checkbox.checked) {
    taskSpan.parentElement.classList.add("completed");
  } else {
    taskSpan.parentElement.classList.remove("completed");
  }
}

// Function to delete a task
function deleteTask(button) {
  var taskDiv = button.parentElement;
  taskDiv.remove();
}  