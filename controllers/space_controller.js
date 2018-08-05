const models = require('../models/')
let lists = {};

/* リスト一覧 */
lists.index = (req, res, next) => {

  models.lists.findAll().then(results=> {
    var listsObjArray = JSON.parse(JSON.stringify(results, null, 2));
    
    const responseJson = {
      title: 'raisonne',
      lists: listsObjArray,
    };

    // ViewにModelのデータを渡す
    res.render('space', responseJson);
  });
}
module.exports = lists;