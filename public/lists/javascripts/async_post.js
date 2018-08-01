function postByFetch(request, isCompleted) {
  url = location.href + request;
  console.log(request);

  const obj = {id: request, task_status: isCompleted};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};
