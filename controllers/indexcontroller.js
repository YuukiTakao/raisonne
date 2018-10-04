let login = {};

/* タスク一覧 */
login.index = (req, res, next) => {

  const responseJson = {
    title: 'dummy',
  };
  
  // ViewにModelのデータを渡す
  res.render('login', responseJson); 
}

module.exports = login;