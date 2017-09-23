"use strict"
var task_num = 0, task_count = 0;



/* new task button */
function new_task()
{
    document.getElementById("new-task-content").style.display = 'block';
    document.getElementById("new-buttons").style.display = 'block';
}

document.getElementById("new-tag-div").addEventListener("click", new_task);


/* cancel new task */
function cancel()
{
    document.getElementById("new-task-content").value = "";
    document.getElementById("new-task-content").style.display = 'none';
    document.getElementById("new-buttons").style.display = 'none';
}

/* save new task */
function save()
{
    var task = document.getElementById("new-task-content");
    create_task(task.value);
    task.value = "";
    document.getElementById("new-task-content").style.display = 'none';
    document.getElementById("new-buttons").style.display = 'none';
}



/* create task */
function create_task(task)
{
    ++task_count;
    ++task_num;
    var new_div = document.createElement("div");
    new_div.className = "undone-task";
    new_div.id = "task " + task_num;
    var new_checkbox = document.createElement("input");
    new_checkbox.type = "checkbox";
    var new_span = document.createElement("span");
    new_span.className = "task-content";
    new_span.innerHTML = task;
    var new_del_button = document.createElement("img");
    new_del_button.src = "del-button.png";
    new_del_button.alt = "DELETE";
    new_div.appendChild(new_checkbox);
    new_div.appendChild(new_span);
    new_div.appendChild(new_del_button);
    document.getElementById("tasks-list").appendChild(new_div);
} 


/* delete a task */
function delete_task(task_id) {
    if (confirm("Delete task!") == true)
    {
        var task=document.getElementById(task_id);
        task.parentNode.removeChild(task);
        --task_count;
    }
}