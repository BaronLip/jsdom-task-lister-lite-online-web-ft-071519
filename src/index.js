document.addEventListener("DOMContentLoaded", () => {
    
    const createTaskForm = document.getElementById('create-task-form');
    
    // on submit event, perform these steps,
    createTaskForm.addEventListener("submit", function(e){
        // const createTaskButton = document.getElementById('create-task-button');
        const newTaskDescription = document.getElementById('new-task-description');
        const tasks = document.getElementById('tasks');
        
        
        // prevent default action of submiting
        e.preventDefault();
        
        // create an HTML element, 
        const newTask = document.createElement("li");
        
        // place the new li into "tasks" list,
        tasks.appendChild(newTask)
        
        // add the content into the li.
        newTask.innerText = newTaskDescription.value;     
    }); 
});