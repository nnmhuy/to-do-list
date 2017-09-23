"use strict"
var n_element = 0;


function delete_div(div_id)
{
    var main_div = document.getElementById("main-div");
    var to_del = document.getElementById(div_id);
    if (confirm("You want to delete this one?") == true)
        main_div.removeChild(to_del);
}


function newTextBox()
{
    ++n_element;
    var newcheckbox = document.createElement("input");
    newcheckbox.id = "text" + n_element;
    newcheckbox.name = "text" + n_element;
    newcheckbox.type = "checkbox";
    var newtext = document.createElement("span");
    newtext.for = "text" + n_element;
    newtext.innerHTML = "text" + n_element;
    var newbutton = document.createElement("button");
    newbutton.value = "Delete";    
    var newDiv = document.createElement("div");
    newDiv.id = "text" + n_element;
    newDiv.appendChild(newcheckbox);
    newDiv.appendChild(newtext);
    newDiv.appendChild(newbutton);
    document.getElementById("main-div").appendChild(newDiv);
    newbutton.addEventListener("click", function()
    {
        delete_div(newDiv.id);
    })
}

document.getElementById("submit").addEventListener("click", newTextBox);
