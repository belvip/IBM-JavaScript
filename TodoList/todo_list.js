/**
 * Todo List Application
 * Skills demonstrated: DOM manipulation, event handling, array methods, and state management
 */

// DOM element selection
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// State management - array to store task objects
let tasks = [];

/**
 * Adds a new task to the tasks array
 * Skills: String manipulation (trim), conditional logic, array manipulation (push)
 */
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

/**
 * Renders tasks to the DOM
 * Skills: DOM manipulation, array iteration (forEach), template literals, event binding
 */
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

/**
 * Toggles the completed status of a task
 * Skills: Array indexing, boolean toggling, state updates
 */
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

/**
 * Removes completed tasks from the array
 * Skills: Array filtering, arrow functions
 */
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Event binding
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// Initial render
displayTasks();