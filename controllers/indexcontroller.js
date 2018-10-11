let index = {};

/* タスク一覧 */
index.index = (req, res, next) => {

  const responseJson = {
    title: 'dummy',
  };
  // ViewにModelのデータを渡す
  res.render('login', responseJson); 
}

index.logout = (res, req) => {
}

module.exports = index;