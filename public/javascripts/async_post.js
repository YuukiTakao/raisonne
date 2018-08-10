function postByFetch(request, taskId, taskTitle, isCompleted) {
  
  url = location.protocol+'//'+location.host + request + taskId;

  const obj = {
    id: taskId, 
    title: taskTitle,
    taskStatus: isCompleted
  };

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
