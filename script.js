function getTask(){
    //getting the values
    
    var task =document.getElementById('task-input').value;

    if(task.trim()!==''){
    // console.log(task);
    //adding the input values to display as a list
    var taskItem = document.createElement('li');
    taskItem.textContent=task;
     //list item//values are displayed as buttons
    taskItem.className="border px-32 py-3 shadow-lg rounded-md mt-3 flex justify-between items-center";
    document.getElementById('task-list').appendChild(taskItem);

    

     //create a delete button and set class name 
    var deleteButton = document.createElement('button');
    deleteButton.textContent='delete';
    //set class name for button
    deleteButton.className="border bg-red-500 px-4 py-2 rounded-full";
    //add event listener to delete button
    deleteButton.addEventListener('click',function(){
        // console.log(taskItem);
        taskItem.remove();
        var taskCount = document.getElementById('task-list').childElementCount;
        totalTasks.textContent = taskCount;

    })
    taskItem.appendChild (deleteButton);
    //create a button to delete all the lists


    //  TO COUNT THE TOTAL TASKS APPENDED
    var totalTasks = document.getElementById('total-task');
    var taskCount = document.getElementById('task-list').childElementCount;
    totalTasks.textContent = taskCount;
    document.getElementById('task-input').value='';



    }
    
    
    
   
//the values are appended


}
 //a function to delete entire list

 function deleteAll(){
    document.getElementById('task-list').innerHTML = '';

    var totalTasks = document.getElementById('total-task');
    totalTasks.textContent = 0;
}
