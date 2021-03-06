window.onload = function(){

  // Focus on the list name.
  elementFocused('title');
 
  if (!document.getElementsByName('check').length){
    changeTaskStyleByStatus(document.getElementsByName('check').checked, document.getElementsByName('task'), 'completed');
  } else {

    for(var i=0; i < document.getElementsByName('check').length; i++){
      changeTaskStyleByStatus(document.getElementsByName('check')[i].checked, document.getElementsByName('task')[i], 'completed');
    }
  }
  
  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var modal = document.getElementById('modal');
  var mask = document.getElementById('mask');

  if (!open) return false;

  open.addEventListener('click', function() {
    modal.className = '';
    mask.className = '';
  });

  close.addEventListener('click', function() {
    modal.className = 'hidden';
    mask.className = 'hidden';
  });

  mask.addEventListener('click', function() {
    close.click();
  });
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

function callLogout() {

  const initOption = makeInitOption(
    {
      id: taskId,
      list_id: listId,
      target_order_id: orderId
    }
  );
  url = `${location.protocol}//${location.host}/tasks/delete/${taskId}`;

  console.log(initOption);
  return fetch(url, initOption)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('delete error');
      }
    })
    .then(resJson => {
      console.log(resJson);
      targetTr.parentNode.removeChild(targetTr);
    });
}

