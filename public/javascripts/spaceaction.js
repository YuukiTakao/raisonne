function createSpace(request, newTitle) {
  console.log('call spaceaction.js');
  console.log(request);
  if (request !== '/spaces/regist') {
    console.log("It is an invalid action");
    return false;
  }
  const initOption = makeInitOption(
    {
      title: newTitle,
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
    })
    .catch((error) => {
      console.log(error);
      console.log('Call Regist API Error!')
    });
};


function createNewSpace(newTitle) {
  
  createSpace('/spaces/regist', newTitle);
}

function addSpaceTableRow(newSpaceId) {
    
  // Get table object.
}


function spaceTitleUpdate(newTitle) {
  const spaceId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
  initOption = makeInitOption( 
    obj = {
      id: spaceId,
      title: newTitle
    }
  );
  url = `${location.protocol}//${location.host}/spaces/update/${spaceId}`;
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


function spaceDelete(spaceId, textBox) {
  const initOption = makeInitOption(
    {
      id: spaceId,
    }
  );
  url = `${location.protocol}//${location.host}/spaces/delete/${spaceId}`;

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
      console.log(resJson);
    });
}