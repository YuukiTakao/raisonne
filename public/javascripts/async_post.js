function postByFetch(request, taskId, taskTitle, listId, isCompleted) {

  var obj = "";
  var url = "";
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
    obj = {
      title: taskTitle,
      list_id: listId
    };
    url = location.protocol+'//'+location.host + request;

  }console.log('当たり前: ');

  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  console.log(url);
  console.log(body);

  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};

function makeRequestBody(request){
  console.log(request);

}