console.log('read');
function nextForm(targetFormObj, taskId, taskTitle, listId, textBox){
  var inputArray = [].slice.call(targetFormObj);
  var currentFNo = inputArray.indexOf(textBox);
  console.info('taskId: '+ taskId);
  console.info('taskTitle: '+ taskTitle);
  console.info('listId: '+ listId);
  
  if (event.keyCode == 13){
    // 一行に２つのinput要素があるので+2する
    var nextFNo = currentFNo + 2;

    // 最終行の取得
    var trArray = document.querySelectorAll('tr');
    var bottomTr = trArray[trArray.length - 1];
    
    // 追加行のinput要素のid生成
    nextId = taskId + 1;

    // 追加行要素の作成
    var cloneTr = bottomTr.cloneNode(true);
    var cloneInput = cloneTr.querySelector('input[type="text"]');
    cloneInput.id = `text${nextId}`;
    cloneInput.removeAttribute("onkeydown");

    document.querySelector('tbody').appendChild(cloneTr);

    var elm = document.querySelector(`#text${nextId}`);
    elm.removeAttribute('value');
    elm.setAttribute('value', "");


    elm.addEventListener(
      "keydown",
      function(event){nextForm(targetFormObj, taskId, "", listId, event.target);}
    );
    elm.focus();

    console.log('elm: '+elm);
    if (elm.value !== null) {
      postByFetch('/tasks/update/', taskId, taskTitle, listId, null);
    } else {
      postByFetch('/tasks/regist', null, taskTitle, listId, null);
    }
    
  }
};
