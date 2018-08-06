function postByFetch(request, param, isCompleted) {
  
  url = location.protocol+'//'+location.host + request + param;

  const obj = {id: param, task_status: isCompleted};
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
