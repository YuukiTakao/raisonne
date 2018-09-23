window.onload = function(){

 
  if (!document.getElementsByName('check').length){
    changeTaskStyleByStatus(document.getElementsByName('check').checked, document.getElementsByName('task'), 'completed');
  } else {

    for(var i=0; i < document.getElementsByName('check').length; i++){
      changeTaskStyleByStatus(document.getElementsByName('check')[i].checked, document.getElementsByName('task')[i], 'completed');
    }
  }
}

/**
 * ステータスによりタスクのステータス変更時にスタイルを適用する
 * @param {boolean} isCompleted 
 * @param {HTMLObjectElement} targetElem 
 * @param {string} addClass 
 */
function changeTaskStyleByStatus(isCompleted, targetElem, addClass){
 
  if (targetElem.classList) {
    if(isCompleted){
      targetElem.classList.add(addClass);
    }else {
      targetElem.classList.remove(addClass);
    }
  }
};

function elementFocused(idName) {
  const targetElm = document.getElementById(idName);
  if(targetElm) {
    if (targetElm.value === ""){
      targetElm.focus();
    }
  }

}