window.onload = function(){

  for(var i=0; i < document.taskForm.check.length; i++){
    if (document.taskForm.check[i].checked) {  
      document.taskForm.task[i].classList.add('completed');
    } else {
      document.taskForm.task[i].classList.remove('completed');
    }

  }


}
    