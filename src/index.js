document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Select the form and the input field
    const form = document.getElementById('create-task-form');
    const taskInput = document.getElementById('new-task-description');
    const taskList = document.getElementById('tasks');
  
    // Add event listener to the form
    form.addEventListener('submit', (e) => {
      // Prevent the form's default submission behavior
      e.preventDefault();
  
      // Get the value of the input field
      const newTask = taskInput.value;
  
      // Create a new list item for the task
      const taskItem = document.createElement('li');
      taskItem.textContent = newTask;
  
      // Add the new task to the list
      taskList.appendChild(taskItem);
  
      // Clear the input field
      taskInput.value = '';
    });
  });
  
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("task-priority").value;

    // Create a new task list item
    const taskList = document.getElementById("tasks");
    const newTask = document.createElement("li");
    newTask.innerText = taskDescription;

    // Set task priority color
    if (priority === "high") {
      newTask.style.color = "red";
    } else if (priority === "medium") {
      newTask.style.color = "yellow";
    } else {
      newTask.style.color = "green";
    }

    // Add a delete button to the task
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(newTask);
    });
    newTask.appendChild(deleteButton);

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById("new-task-description").value = "";
  });
});
