document.addEventListener('DOMContentLoaded', () => {
  const createTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskText = newTaskDescription.value.trim(); // Get the task text and remove leading/trailing whitespace

    if (taskText) { // Check if the task text is not empty
      const taskItem = document.createElement('li'); // Create a new list item element
      taskItem.textContent = taskText; // Set the text content of the list item
      tasksList.appendChild(taskItem); // Append the list item to the tasks list

      newTaskDescription.value = ''; // Clear the input field
    }
  });
});
