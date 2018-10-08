const models = require('../models/')
let spaces = {};

/* List of list */
spaces.index = (req, res, next) => {

  const targetId = req.params.id;
  models.spaces.findAll().then(spaceResults => {
    models.lists.findAll(
      {
        where: {
          space_id: targetId,
        }
      }
    ).then(results=> {
      const listsObjArray = JSON.parse(JSON.stringify(results, null, 2));
      const spacesObjArray = JSON.parse(JSON.stringify(spaceResults, null, 2));
      const responseJson = {
        title: 'raisonne',
        lists: listsObjArray,
        spaces: spacesObjArray,
      };
      // Data binding to View.
      res.render('space', responseJson);
    });
  });
}


/* Create space */
spaces.regist = (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  const param = req.body;
  const insertSpace = models.spaces.create({title: param.title});
  insertSpace.then((result) => {
    res.json({
      isSucceeded: true,
      response: result,
    });
  })
  insertSpace.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}

/* Update space */
spaces.update = (req, res, next) => {
  const targetId = req.params.id;
  const updateObj = makeUpdateObj(req.body.title);
  console.log(req.body);
  console.log(updateObj);
  const updateSpace = models.spaces.update(
    updateObj, // 更新内容
    {
      where: {
        id: targetId
      }
    } // 更新対象
  );
  updateSpace.then(result=> {
    console.log(result);
    res.json({
      isSucceeded: true,
      response:result,
    });
  })
  updateSpace.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
};


const makeUpdateObj = (title) => {
  if (title !== null){
    return {title: title};
  };
}


/* Delete space */
spaces.delete = (req, res, next) => {
  const targetId = req.params.id;
  
  const delSpace = models.spaces.destroy({
    where:{
      id: targetId
    }
  })
  delSpace.then((result) => {
    res.json({
      isSucceeded: true,
      response:result
    });
  })
  delSpace.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}


module.exports = spaces;