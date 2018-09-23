const models = require('../models/')
let spaces = {};

/* リスト一覧 */
spaces.index = (req, res, next) => {

  const targetId = req.params.id;
  models.spaces.findAll().then(spaceResults => {
    models.lists.findAll(
      {
        where:{
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
lists.regist = (req, res, next) => {
  console.log(req.method);
  console.log(req.body);
  const param = req.body;
  const insertSpace = models.spaces.create({
    title: '',
  });
  insertSpace.then((result) => {
    res.json({
      isSucceeded: true,
      response:result,
    });
  })
  insertSpace.error((e) => {
    res.json({
      isSucceeded: false,
      message: e.message
    });
  })
}
module.exports = spaces;