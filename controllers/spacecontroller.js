const models = require('../models/')
let lists = {};

/* リスト一覧 */
lists.index = (req, res, next) => {

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
module.exports = lists;