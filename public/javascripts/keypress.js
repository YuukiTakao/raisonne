console.log('read keypress.js');
function nextTextBox(taskId, orderId){  
  if (event.keyCode == 13){

    const matchedListId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
console.log('taskId: '+taskId);
console.log('matchedListId: '+matchedListId);
    enterTextBox('/tasks/regist', matchedListId, orderId);
  }
};

function obj_dump(obj) {
	var txt = '';
	for (var one in obj){
		txt += one + "=" + obj[one] + "\n";
	}
	console.log(txt);
}