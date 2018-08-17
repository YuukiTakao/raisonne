console.log('read');
function nextForm(targetFormObj, taskId, listId, textBox){  
  if (event.keyCode == 13){

    var inputArray = [].slice.call(targetFormObj);
    var currentFNo = inputArray.indexOf(textBox);
    console.info('taskId: '+ taskId);
    console.info('textBox.getAttribute(value): '+ textBox.getAttribute('value'));
    console.info('listId: '+ listId);
    console.info('currentFNo: '+ currentFNo);

    // 一行に２つのinput要素があるので+2する
    var nextFNo = currentFNo + 2;
    //追加行のinput要素のid生成
    var nextId = taskId + 1;
    // アクティブの取得
    var targetTable = document.getElementById('taskTable');
    var newRow = targetTable.insertRow(currentFNo);
    var cell1 = newRow.insertCell(-1);
    var cell2 = newRow.insertCell(-1);
    cell1.innerHTML = "type='text' id=`text${nextId}` value='' size='50' onkeydown=`nextForm(document.forms.taskForm,${nextId},${listId},${textBox})` class='radius'"
        // セルの内容入力
    
    

    // 追加行要素の作成
    var cloneTr = bottomTr.cloneNode(true);
    var cloneInput = cloneTr.querySelector('input[type="text"]');
    cloneInput.id = `text${nextId}`;
    cloneInput.removeAttribute("onkeydown");

    //document.querySelector('tbody').appendChild(cloneTr);
    document.querySelector('tbody').appendChild(cloneTr);

    var elm = document.querySelector(`#text${nextId}`);
    elm.removeAttribute('value');
    //elm.setAttribute("value", "");
    //elm.value = "";
    elm.addEventListener(
      "keydown",
      function(event){nextForm(targetFormObj, taskId, listId, event.target);}
    );
    elm.focus();
    
    if (textBox.getAttribute('value')) {
      postByFetch('/tasks/update/', taskId, textBox.value, listId, null);
    } else {
      postByFetch('/tasks/regist', null, textBox.value, listId, null);
    }
    
  }
};
