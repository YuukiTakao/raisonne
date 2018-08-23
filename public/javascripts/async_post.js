function postByFetch(request,taskId,taskTitle,listId=null,isCompleted=null,orderId=null, newFlg=null) {
  let obj = "";
  let url = "";
  
  if (request == '/tasks/update/'){

    // チェックボックス変更時のみスタイル変更処
    if (isCompleted != null){
      changeTaskStyleByStatus(isCompleted, document.taskForm.task[orderId - 1], 'completed');
    }

    obj = {
      id: taskId,
      title: taskTitle,
      taskStatus: isCompleted
    };
    url = location.protocol+'//'+location.host + request + taskId;
  } else if (request == '/tasks/regist'){

    obj = {
      title: taskTitle,
      list_id: listId,
      target_order_id: orderId
    };
    url = location.protocol+'//'+location.host + request;
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