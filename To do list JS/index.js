function addTask(){

  task=document.getElementById('task').value;
  //a=a+1
  //a+=1  
  document.getElementById('list').innerHTML+=
  `<h1 class="tasksList">Task : ${task}</h1>`;
  
  document.getElementById('task').value="";
  
}

function changeColor(){

    document.getElementById('list').style.color="ivory";

}

function clearList(){
    
    document.getElementById('list').innerHTML="";

}


