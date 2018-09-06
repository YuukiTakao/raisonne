function enterTextBox(request,taskId,textBox,listId=null,orderId=null) {
  let initOption = "";
  let url = "";
  console.log(textBox.value);

  switch (request) {
    case '/tasks/regist':
      initOption = makeInitOption(
        {
          title: textBox.value,
          list_id: listId,
          target_order_id: orderId
        }
      );
      url = `${location.protocol}//${location.host}${request}`;
      textBox.setAttribute('value', textBox.value);
      break;

    case '/tasks/update/':
      initOption = makeInitOption(
        {
          id: taskId,
          title: textBox.value,
        }
      );
      url = `${location.protocol}//${location.host}${request}${taskId}`;
      break;
    
    default:
      console.log("It is an action that does not exist");
      break;
  } 

  console.log(url);
  console.log(initOption);

  fetch(url, initOption)
    .then(response => {
      return response.json(); 
    })
    .then(resJson => {
      if (resJson.response.id) {
        addNewTextBox(resJson.response.id+1, orderId, listId);
      } else {
        addNewTextBox(taskId+1, orderId, listId);
      }
    });
};

function addNewTextBox(newTaskId, targetRowNo, listId) {
    
  // 選択されたテキストボックスの行数取得
  const newRowNo = targetRowNo + 1;

  //追加行のinput要素のid生成
  console.log('newRowNo: '+ newRowNo);
  console.log('newTaskId: '+ newTaskId);

  // テーブルオブジェクト取得
  var targetTable = document.getElementById('taskTable'); // 新しい行を追加
  var newRow = targetTable.insertRow(newRowNo);
  var cell1 = newRow.insertCell(-1);
  var cell2 = newRow.insertCell(-1);
  cell1.classList.add('width-30px');
  newRow.id = `tr${newRowNo}`

  cell1.innerHTML = `<input type='checkbox' onChange=taskStatusUpdate(${newTaskId}, this.checked, ${newRowNo})>`
  cell2.innerHTML = `<input 
      type='text' 
      id=text${newRowNo} 
      value='' 
      onkeydown=nextTextBox(${newTaskId},this) 
      class='radius'>
    <small 
      class="setteings" 
      onclick="taskDelete(${newTaskId}, ${listId}, ${newRowNo})">
      •••
    </small>`
  
  // 新しい行にフォーカスを移動
  document.getElementById(`text${newRowNo}`).focus();
}

function taskStatusUpdate(taskId, isCompleted, orderId) {
  initOption = makeInitOption( 
    obj = {
      id: taskId,
      taskStatus: isCompleted
    }
  );
  url = `${location.protocol}//${location.host}/tasks/update/${taskId}`;

  return fetch(url, initOption)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(resJson => {
      // チェックボックス変更時のみスタイル変更処理
      if (isCompleted != null) {
        const targetElm = document.taskForm.task[orderId - 1] || document.taskForm.task
        changeTaskStyleByStatus(isCompleted, targetElm, 'completed');
      }
    });
}


function taskDelete(taskId, listId, orderId) { 
  const initOption = makeInitOption(
    {
      id: taskId,
      list_id: listId,
      target_order_id: orderId
    }
  );
  url = `${location.protocol}//${location.host}/tasks/delete/${taskId}`;

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
      const deleteElm = document.getElementById(`tr${orderId}`);
      deleteElm.parentNode.removeChild(deleteElm);
    });
}


function makeInitOption(obj) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  };
}