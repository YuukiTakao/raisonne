window.onload = function(){

  for(var i=0; i < document.taskForm.check.length; i++){
    changeTaskStyleByStatus(document.taskForm.check[i].checked, document.taskForm.task[i], 'completed');
  }
}

/**
 * ステータスによりタスクのステータス変更時にスタイルを適用する
 * @param {boolean} isCompleted 
 * @param {HTMLObjectElement} targetElem 
 * @param {string} addClass 
 */
function changeTaskStyleByStatus(isCompleted, targetElem, addClass){

  if(isCompleted){
    targetElem.classList.add(addClass);
  }else {
    targetElem.classList.remove(addClass);
  }
};