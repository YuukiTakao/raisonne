console.log('read');

function nextForm(formName, taskId, textBox){
    var inputArray = [].slice.call(document.forms[0]);
    var currentFNo = inputArray.indexOf(textBox);

    if (event.keyCode == 13){
        var nextFNo = currentFNo + 2;

        if (taskId !== null) {
          postByFetch('/tasks/update/',taskId,textBox.value,null);
        }

        // 次の行があれば次の行へフォーカス移動、なければ行追加してフォーカス
        if (inputArray.length > nextFNo) {
          document.forms[0][nextFNo].focus();
        } else {
          // 最終行の取得
          var trArray = document.querySelectorAll('tr');
          var bottomTr = trArray[trArray.length - 1];

          // 追加行のinputにつけるidの生成
          var idMatched = bottomTr.querySelector('input[type="text"]').id.match(/([a-zA-Z]+)([0-9]+$)/);
          var num = parseInt(idMatched[2]) + 1;
          var nextId = idMatched[1] + num;

          // 追加行要素の作成
          var cloneTr = bottomTr.cloneNode(true);
          var cloneInput = cloneTr.querySelector('input[type="text"]');
          cloneInput.id = nextId;
          cloneInput.value = "";
          cloneInput.removeAttribute("onkeydown");

          document.querySelector('tbody').appendChild(cloneTr);

          var elm = document.querySelector('#'+nextId);
          elm.addEventListener("keydown", function(event){
            nextForm('taskTable', null, event.target);
          }, false);
          elm.focus();
        }
	  }
};
