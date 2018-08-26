function postByFetch(request,taskId,taskTitle=null,listId=null,isCompleted=null,orderId=null, newFlg=null) {
  let obj = "";
  let url = "";
  
  if (request == '/tasks/update/'){

    // チェックボックス変更時のみスタイル変更処
    if (isCompleted != null){
      const targetElm = document.taskForm.task[orderId - 1] || document.taskForm.task
      changeTaskStyleByStatus(isCompleted, targetElm, 'completed');
    }

    obj = {
      id: taskId,
      title: taskTitle,
      taskStatus: isCompleted
    };
    url = `${location.protocol}//${location.host}${request}${taskId}`;
  } else if (request == '/tasks/regist'){

    obj = {
      title: taskTitle,
      list_id: listId,
      target_order_id: orderId
    };
    url = `${location.protocol}//${location.host}${request}`;
  } else if (request == '/tasks/delete/'){

    obj = {
      id: taskId
    };
    url = `${location.protocol}//${location.host}${request}${taskId}`;
    
    // API成功したらにリファクタする
    const deleteElm = document.getElementById(`tr${orderId}`);
    deleteElm.parentNode.removeChild(deleteElm);
  }

  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  console.log(url);
  console.log(body);

  return fetch(url, {method, headers, body})
    .then(response => console.log(response));
};

/**
 * リクエストの種類ごとにリクエストデータを作成
 * @param {string} request 
 */
function makeRequest(request, ){

  return;

};