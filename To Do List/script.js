//Validate input field
document.querySelector("#push").onclick = function (){
    if(document.querySelector("#newtask input").value.length == 0){
        alert("Please Enter a Task");
    }

    //Add a new task
    else{
        document.querySelector("#tasks").innerHTML += 
        `<div class = 'task'>
        <span id = 'taskname'>
        ${document.querySelector('#newtask input').value}</span>
        <button class = "delete">
        <i class="fa-regular fa-trash-can"></i>        
        </button>
        </div>`;

        //Deleting a task
        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function (){
                this.parentNode.remove();
            }
        }

        //Crossing out completed data
        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function (){
                this.classList.toggle("completed");
            }
        }
        
        //Clearing input field after each entry
        document.querySelector("#newtask input").value = "";
    } 

}