function postByFetch(request,taskId,taskTitle,listId=null,isCompleted=null,orderId=null) {

  let obj = "";
  let url = "";
  console.log('request: '+ request);
  console.log('taskTitle: '+ taskTitle);
  if (request == '/tasks/update/'){

    obj = {
      id: taskId,
      title: taskTitle,
      taskStatus: isCompleted
    };
    url = location.protocol+'//'+location.host + request + taskId;

  } else if (request == '/tasks/regist'){
    console.log('taskTitle: '+ taskTitle);
    console.log('listId: '+ listId);
    console.log('orderId: '+ orderId);
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

function makeRequestBody(request){
  console.log(request);

}