function postByFetch(request, taskId, taskTitle, listId, isCompleted) {

  var obj = "";
  var url = "";
  if (request === '/tasks/update/'){

    obj = {
      id: taskId,
      title: taskTitle,
      taskStatus: isCompleted
    };
    url = location.protocol+'//'+location.host + request + taskId;

  } else if (request === '/tasks/regist'){

    obj = {
      title: taskTitle,
      list_id: listId
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
    .then(response => console.log(response.json()));
};

function makeRequestBody(request){
  console.log(request);

}