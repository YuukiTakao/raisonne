const models = require('../models/')
let lists = {};

/* タスク一覧 */
lists.index = (req, res, next) => {
  const targetId = req.params.id;

  // task table
  models.tasks.findAll(
    {
      order:['order_id'],
      where:{
        list_id: targetId
      }
    }
  ).then(taskResults=> {
    // list table
    models.lists.findAll(
      {
        where:{
          id: targetId
        }
      }
    ).then(listResults => {
      const listObj = JSON.parse(JSON.stringify(listResults, null, 2))[0];
      const taskObjArray = JSON.parse(JSON.stringify(taskResults, null, 2));

      const responseJson = {
        title: listObj.title,
        tasks: taskObjArray,
      };
      console.log(taskObjArray);
  
      // ViewにModelのデータを渡す
      res.render('list', responseJson); 
    })
  })
}


/* Create list */
lists.regist = (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  const param = req.body;
  console.log('target_order_id: '+param.target_order_id);

  const insertList = models.lists.create({
    // title: "dummy",
    // space_id: param.space_id,
    // progress_rate: param.pregress_rate
    title: '',
    space_id: param.space_id,
    progress_rate: 0,
  });
  insertList.then((result) => {
    res.json({
      isSucceeded: true,
      response:result,
    });
  })
  insertList.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}


/* リストの更新 */
lists.update = (req, res, next) => {
  const targetId = req.params.id;
  const updateObj = makeListUpdateObj(req.body.title);
  console.log(req.method);
  console.log(req.body);
  console.log(updateObj);
  const updateList = models.lists.update(
    updateObj, // 更新内容
    {
      where: {
        id: targetId
      }
    } // 更新対象
  );
  updateList.then(result=> {
    console.log(result);
    res.json({
      isSucceeded: true,
      response:result,
    });
  })
  updateList.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
};


const makeListUpdateObj = (title) => {
  if (title !== null){
    return {title: title};
  };
}



/* リストの削除 */
lists.delete = (req, res, next) => {
  const targetId = req.params.id;
  
  const delList = models.lists.destroy({
    where:{
      id: targetId
    }
  })
  delList.then((result) => {
    res.json({
      isSucceeded: true,
      response:result
    });
  })
  delList.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}

module.exports = lists;