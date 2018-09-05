console.log('read keypress.js');
function nextTextBox(taskId, textBox){  
  if (event.keyCode == 13){

    const matchedListId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
    const targetRowNo = parseInt(textBox.id.match(/([0-9]+$)/)[0]);
console.log('1の壁');
console.log(textBox.getAttribute('value'));
console.log(taskId);
console.log(matchedListId);
console.log(targetRowNo);
    if (textBox.getAttribute('value')) {
      enterTextBox('/tasks/update/', taskId, textBox, matchedListId, targetRowNo);
    } else {
      enterTextBox('/tasks/regist', null, textBox, matchedListId, targetRowNo);
    }
  }
};

function obj_dump(obj) {
	var txt = '';
	for (var one in obj){
		txt += one + "=" + obj[one] + "\n";
	}
	console.log(txt);
}