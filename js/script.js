/* Variables*/

var general_id=0;

/*Function that gets the value from the inputbox and call the function SpawnTask() to add the task to the ToDoList */
function get_task(){
    let task=document.getElementById('input_box1');
    let task_text=task.value;
    console.log(typeof(task_text));
    if(task_text==''){
        alert('PLEASE INSERT A TASK');
    }   
    else{
         spawn_task(task_text);
    }
}

function spawn_task(task){
    let task_object=document.createElement('p');
    task_object.setAttribute('id','p,'+general_id);
    let button_delete_task=document.createElement('Button');
    button_delete_task.innerHTML='Completed';
    button_delete_task.setAttribute('class','delete_button');
    button_delete_task.setAttribute('id','delete_button,'+general_id);
    button_delete_task.setAttribute('onClick','delete_task(),'+general_id);
    general_id+=1;
    task_object.textContent=task;
    console.log(general_id);
    document.getElementById('ToDo').appendChild(task_object);
    document.getElementById('ToDo').appendChild(button_delete_task);
}

function delete_task(){

}