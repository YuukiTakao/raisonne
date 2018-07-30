function postByFetch(query, isCompleted) {
  url = location.href + query;
  console.log(query);

  const obj = {id: query, task_status: isCompleted};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};
