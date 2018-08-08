console.log('read');
currentFNo = 0;
function next_form(formName){
    if (event.keyCode == 13){
        currentFNo += 2;
        currentFNo %= document.forms[0].elements.length;
        console.log(currentFNo);
        document.forms[0][currentFNo].focus();
	}
};