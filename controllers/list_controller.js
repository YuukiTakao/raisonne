const models = require('../models/')
let tasks = {};

/* タスク一覧 */
tasks.index = (req, res, next) => {
  // tasksモデルの全データを取得
  models.tasks.findAll().then(task=> {  
    var taskObjArray = JSON.parse(JSON.stringify(task, null, 2));

    const responseJson = {
      title: 'raisonne',
      tasks: taskObjArray,
    };
    // ViewにModelのデータを渡す
    res.render('list', responseJson);
});
}
module.exports = tasks;