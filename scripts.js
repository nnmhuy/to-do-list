"use strict"
var task_num = 0, task_count = 0;



/* new task button */
function new_task()
{
    var d = document.getElementById("unactive-form");
    if (!d) return;
    d.id = "active-form";
}

document.getElementById("active-new-task").addEventListener("click", new_task);


/* cancel new task */
function cancel()
{
    var d = document.getElementById("active-form");
    if (!d) return;
    d.getElementsByTagName("textarea")[0].value = "";
    d.id = "unactive-form";
}

document.getElementById("cancel-button").addEventListener("click",cancel);


/* save new task */
function save()
{
    var input_text = document.getElementById("new-task-content");
    if (input_text.value == "")
    {
        alert("Task can't be empty");
        return;
    }
    create_task(input_text.value);
    cancel();
}

document.getElementById("save-button").addEventListener("click", save);

/* check & uncheck a box*/
function change_status(div, stt)
{
    if (stt)
        div.className = "task done-task";
    else
        div.className = "task undone-task";
}


/* create task */
function create_task(task)
{
    ++task_count;
    ++task_num;
    var new_div = document.createElement("div");
    new_div.className = "task undone-task";
    new_div.id = "task " + task_num;

    var new_checkbox = document.createElement("input");
    new_checkbox.id = "checkbox " + task_num;
    new_checkbox.className = "checkbox";
    new_checkbox.type = "checkbox";
    new_checkbox.addEventListener("click", function(){
        change_status(new_div,new_checkbox.checked);
    })

    var new_span = document.createElement("span");
    new_span.className = "task-content";
    new_span.innerHTML = task;

    var new_del_button = document.createElement("img");
    new_del_button.src = "del-button.png";
    new_del_button.alt = "DELETE";
    new_del_button.id = "del-button"
    new_del_button.addEventListener("click",function(){
        delete_task(new_div.id);
    });
    
    new_div.appendChild(new_checkbox);
    new_div.appendChild(new_span);
    new_div.appendChild(new_del_button);
    document.getElementById("tasks-list").appendChild(new_div);
} 


/* change tab */
function change_tab(stt, no)
{
    var list = document.getElementsByClassName("task");
    for (var i  = 0 ; i < list.length; ++i)
    {
        var type = 0;
        if (list[i].getElementsByTagName("input")[0].checked == true) type = 1;
        else type = -1;
        if (type * stt >= 0) list[i].style.display = "block";
        else list[i].style.display = "none"
    }
    var buttons = document.getElementsByClassName("tab");
    for (var i = 0; i < buttons.length; ++i) buttons[i].className = "tab";
    buttons[no].className = "tab tab-active";
}

var buttons = document.getElementsByClassName("tab");
buttons[0].addEventListener("click", function(){change_tab(0, 0);});
buttons[1].addEventListener("click", function(){change_tab(1, 1);});
buttons[2].addEventListener("click", function(){change_tab(-1, 2);});



/* delete a task */
function delete_task(task_id) {
    if (confirm("Delete task!") == true)
    {
        var task=document.getElementById(task_id);
        task.parentNode.removeChild(task);
        --task_count;
    }
}