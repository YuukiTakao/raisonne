function postByFetch(url, isCompleted) {
  url = location.href + url;
  const obj = {task_status: isCompleted};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};
