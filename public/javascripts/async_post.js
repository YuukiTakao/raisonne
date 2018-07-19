function postByFetch(url, target_id, isCompleted) {
  
  console.log('{id: ' + target_id + '}');
  const obj = {id: target_id, task_status: isCompleted};
  console.log(isCompleted);
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};

