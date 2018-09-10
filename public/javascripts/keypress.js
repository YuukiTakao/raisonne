console.log('read keypress.js');
function nextTextBox(textBox){
  if (event.keyCode == 13){

		// URLからリストIDを取得
	  const matchedListId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
	  // input -> label -> td -> tr.rowIndex
		const orderId = textBox.parentNode.parentNode.parentNode.rowIndex;

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