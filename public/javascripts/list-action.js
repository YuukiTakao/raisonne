function createList(request) {
  if (request !== '/lists/regist') {
    console.log("It is an action that does not exist");
    return false;
  }
  const spaceId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
  const initOption = makeInitOption(
    {
      space_id: spaceId,
    }
  );
  const url = `${location.protocol}//${location.host}${request}`;
  console.log(url);
  console.log(initOption);

  fetch(url, initOption)
    .then(response => {
      return response.json();
    })
    .then(resJson => {
      // TODO テーブルに追加行を挿入する
      console.log(resJson);
    })
    .catch((error) => {
      console.log(error);
      console.log('Call Regist API Error!')
    });
};


function createNewList() {
  
  createList('/lists/regist');
}


function listTitleUpdate(newTitle) {
  const listId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
  initOption = makeInitOption( 
    obj = {
      id: listId,
      title: newTitle
    }
  );
  url = `${location.protocol}//${location.host}/lists/update/${listId}`;

  return fetch(url, initOption)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(resJson => {
      // チェックボックス変更時のみスタイル変更処理
      console.log(resJson);
    });
}


function listDelete(listId, textBox) {
  const initOption = makeInitOption(
    {
      id: listId,
      list_id: listId,
    }
  );
  url = `${location.protocol}//${location.host}/lists/delete/${listId}`;

  console.log(initOption);
  return fetch(url, initOption)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('delete error');
      }
    })
    .then(resJson => {
      console.log(resJson);
    });
}