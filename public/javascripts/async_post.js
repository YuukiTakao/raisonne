function postByFetch(url, data) {
  //console.log(url);
  //console.log('{id: ' + data + '}');
  const obj = {id: data};
  const method = "POST";
  const body = JSON.stringify(obj);
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  
  return fetch(url, {method, headers, body})
    .then(response => console.log(response.json()));
};

