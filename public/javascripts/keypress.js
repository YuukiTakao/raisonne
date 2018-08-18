console.log('read');
function nextForm(targetFormObj, taskId, listId, textBox){  
  if (event.keyCode == 13){

    var inputArray = [].slice.call(targetFormObj);
    var currentFNo = inputArray.indexOf(textBox);
    console.info('taskId: '+ taskId);
    console.info('textBox.getAttribute(value): '+ textBox.getAttribute('value'));
    console.info('listId: '+ listId);
    console.info('currentFNo: '+ currentFNo);
    console.info('textBox.id: '+ textBox.id);

    // 一行に２つのinput要素があるので+2する
    // var nextFNo = currentFNo + 2;

    // テーブルオブジェクト取得
    var targetTable = document.getElementById('taskTable');

    // 選択されたテキストボックスの行数取得
    var targetRowNo = parseInt(textBox.id.match(/([0-9]+$)/)[0]);
    var newRowNo = targetRowNo + 1;

    //追加行のinput要素のid生成
    var nextId = taskId + 1;
    console.info('newRowNo: '+ newRowNo);

    var newRow = targetTable.insertRow(newRowNo);
    var cell1 = newRow.insertCell(-1);
    var cell2 = newRow.insertCell(-1);

    cell1.innerHTML = `<input type='checkbox' onChange=postByFetch('/tasks/update/', ${nextId}, null, null, this.checked)>`
    cell2.innerHTML = `<input type='text' id=text${newRowNo} value='' size='50' onkeydown=nextForm(document.forms.taskForm,${nextId},${listId},this) class='radius'>`
        // セルの内容入力
    
    document.getElementById(`text${newRowNo}`).focus();
    // newRow.focus();

    if (textBox.getAttribute('value')) {
      postByFetch('/tasks/update/', taskId, textBox.value, listId, null);
    } else {
      postByFetch('/tasks/regist', null, textBox.value, listId, null);
    }
    
  }
};
