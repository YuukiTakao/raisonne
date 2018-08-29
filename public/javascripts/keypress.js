console.log('read');
function nextForm(taskId, textBox){  
  if (event.keyCode == 13){
    
    // 選択されたテキストボックスの行数取得
    var targetRowNo = parseInt(textBox.id.match(/([0-9]+$)/)[0]);
    var newRowNo = targetRowNo + 1;

    //追加行のinput要素のid生成
    var nextId = taskId + 1;
    console.log('newRowNo: '+ newRowNo);
    console.log('nextId: '+ nextId);

    // テーブルオブジェクト取得
    var targetTable = document.getElementById('taskTable');

    // 新しい行を追加
    var newRow = targetTable.insertRow(newRowNo);
    var cell1 = newRow.insertCell(-1);
    var cell2 = newRow.insertCell(-1);
    cell1.classList.add('width-30px');
    newRow.id = `tr${newRowNo}`

    cell1.innerHTML = `<input type='checkbox' onChange=postByFetch('/tasks/update/', ${nextId}, null, null, this.checked)>`
    const matchedListId = parseInt(location.pathname.match(/([0-9]+$)/)[0]);
    cell2.innerHTML = `<input type='text' id=text${newRowNo} value='' size='50' onkeydown=nextForm(${nextId},this) class='radius'><small class="setteings" onclick="postByFetch('/tasks/delete/',${nextId},null,null,null,${newRowNo})">•••</small>`
    
    // 新しい行にフォーカスを移動
    document.getElementById(`text${newRowNo}`).focus();

    if (textBox.getAttribute('value')) {
      postByFetch('/tasks/update/', taskId, textBox.value, matchedListId, null);
    } else {
      postByFetch('/tasks/regist', null, textBox.value, matchedListId, null, targetRowNo);
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