const models = require('../models/')
let tasks = {};

/* タスク一覧 */
tasks.index = (req, res, next) => {
  
  // パラメータのIDでリストを取得
  const targetId = req.params.id;
  models.tasks.findAll(
    {
      where:{
        list_id: targetId
      }
    }
  ).then(results=> {
    var taskObjArray = JSON.parse(JSON.stringify(results, null, 2));
    const responseJson = {
      title: 'raisonne',
      tasks: taskObjArray,
    };

    // ViewにModelのデータを渡す
    res.render('list', responseJson);
  });

}
module.exports = tasks;