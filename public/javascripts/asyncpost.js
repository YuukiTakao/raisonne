function enterTextBox(request, listId, orderId) {
  if (request !== '/tasks/regist') {
    console.log("It is an action that does not exist");
    return false;
  }
  const initOption = makeInitOption(
    {
      list_id: listId,
      target_order_id: orderId
    }
  );
  const url = `${location.protocol}//${location.host}${request}`;
  console.log(url);
  console.log(initOption);

  fetch(url, initOption)
    .then(response => {
      return response.json();
    })
    .then(resJson => {
      if (resJson.response.id) {
        addNewTextBox(resJson.response.id, listId, orderId+1);
      }
    })
    .catch((error) => {
      console.log(error);
      console.log('Call Regist API Error!')
    });
};

function addNewTextBox(newTaskId, listId, newRowNo) {
    
  // 選択されたテキストボックスの行数取得
  console.log('newRowNo: '+ newRowNo);
  console.log('newTaskId: '+ newTaskId);

  // テーブルオブジェクト取得
  var targetTable = document.getElementById('taskTable'); // 新しい行を追加
  var newRow = targetTable.insertRow(newRowNo);
  var cell1 = newRow.insertCell(-1);
  var cell2 = newRow.insertCell(-1);
  cell1.classList.add('width-30px');
  cell1.innerHTML = 
    `<label>
      <input 
        type='checkbox' 
        onChange=taskStatusUpdate(${newTaskId},this)
      >
     </label>`
  cell2.innerHTML = 
    `<label>
      <input 
        type='text' 
        value='' 
        onkeydown=nextTextBox(this)
        onChange=taskTitleUpdate(${newTaskId},this.value)
        size='50px'
        class='radius'
      >
    </label>  
    <small 
      class="setteings" 
      onclick="taskDelete(${newTaskId},this)">
      •••
    </small>`
  
  // 新しい行にフォーカスを移動
  newRow.querySelector('input[type=text]').focus();
}


function taskTitleUpdate(taskId, title) {
  console.log(title);
  initOption = makeInitOption( 
    obj = {
      id: taskId,
      title: title
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
      console.log(resJson);
    });
}


function taskStatusUpdate(taskId, checkBox) {
  initOption = makeInitOption( 
    obj = {
      id: taskId,
      taskStatus: checkBox.checked
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
      if (checkBox.checked != null) {
        targetElm = checkBox.parentNode.parentNode.nextSibling.querySelector("input[type='text']")
        changeTaskStyleByStatus(checkBox.checked, targetElm, 'completed');
      }
    });
}


function taskDelete(taskId, textBox) {
  const targetTr = textBox.parentNode.parentNode;
  const orderId = targetTr.rowIndex;
  const listId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
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


function makeInitOption(obj) {
  return {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  };
}