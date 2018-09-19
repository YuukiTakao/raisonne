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