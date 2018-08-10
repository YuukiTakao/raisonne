console.log('read');
currentFNo = 1;
function nextForm(formName, taskId, textBox){
    console.log(taskId);
    console.log(textBox.value);
    if (event.keyCode == 13){
        currentFNo += 2;
        console.log(currentFNo);
        postByFetch('/tasks/update/',taskId,textBox.value,null);
        document.forms[0][currentFNo].focus();
	}
};