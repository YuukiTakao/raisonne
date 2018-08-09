console.log('read');
currentFNo = 1;
function nextForm(formName, taskId, taskTitle){
    if (event.keyCode == 13){
        currentFNo += 2;
        console.log(currentFNo);
        postByFetch('/tasks/update/',taskId,taskTitle,null);
        document.forms[0][currentFNo].focus();
	}
};