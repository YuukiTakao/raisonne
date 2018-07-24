function postByFetch(request, target_id, isCompleted) {

  const url = location.protocol+"//"+location.host + request;
  
  const obj = {id: target_id, task_status: isCompleted};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};

