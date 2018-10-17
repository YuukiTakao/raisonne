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
      // Insert additional line in list table.
      addListTableRow(resJson.response.id);
      window.location.href = `${location.protocol}//${location.host}/lists/${resJson.response.id}`;
    })
    .catch((error) => {
      console.log(error);
      console.log('Call Regist API Error!')
    });
};


function createNewList() {
  
  createList('/lists/regist');
}

function addListTableRow(newListId) {
    
  // Get table object.
  const targetTable = document.getElementById('listTable'); // 新しい行を追加
  const newRowNo = targetTable ? targetTable.rows.length : 0;
  var newRow = targetTable.insertRow(newRowNo);
  var cell1 = newRow.insertCell(-1);
  console.log(newRow);
  cell1.classList.add('width-30px');
  cell1.innerHTML = 
   `<a href=/lists/${newListId}></a> 
    <small class='setteings' onClick=listDelete(${newListId},this)>
       ••• 
    </small>`
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
  console.log(initOption);

  return fetch(url, initOption)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(resJson => {
      console.log(resJson);
    });
}


function listDelete(listId, textBox) {
  const initOption = makeInitOption(
    {
      id: listId,
    }
  );
  url = `${location.protocol}//${location.host}/lists/delete/${listId}`;

  console.log(initOption);
  return fetch(url, initOption)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('delete api error');
      }
    })
    .then(resJson => {
      const targetTr = textBox.parentNode.parentNode;
      targetTr.parentNode.removeChild(targetTr);
      console.log(resJson);
    });
}