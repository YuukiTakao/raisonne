console.log('read');
currentFNo = 1;
function next_form(formName){
    if (event.keyCode == 13){
        currentFNo += 2;
        
        console.log(currentFNo);
        document.forms[0][currentFNo].focus();
	}
};