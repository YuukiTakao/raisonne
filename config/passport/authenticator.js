const passport = require("passport");
const LocalStrategy = require("passport-local");
const authSetting = require("../auth.json");

const models = require('../../models')

class Authenticator {
  static initialize(app) {
    // passportの初期化
    app.use(passport.initialize());

    // セッション管理をするための設定
    app.use(passport.session());

    // ログイン成功後指定されたオブジェクトをシリアライズして保存する際の
    // シリアライズ処理をフックするもの
    passport.serializeUser((user, done) => {
      return done(null, user);
    });

    passport.deserializeUser((serializedUser, done) => {
      console.log(serializedUser);
      models.users.findAll(
        {
          where: {
            name: serializedUser.name,
          }
        })
        .then(user => {
          // 認証に成功したら以下のものを返す(今回はユーザIDとユーザ名、権限)
          return done(null, {
            user_id: user.id,
            user_name: user.name,
          });
        })
        .catch(() => {
          console.log('認証失敗');
          return done(null, false);
        });
    });
  }

  static setStrategy() {
    // passport.use：ストラテジーの設定
    // ストラテジー：ユーザIDとパスワードを用いた懸賞やOAuthを用いた権限付与、OpenIDを用いた分散認証を実装する
    // localStrategy：ユーザIDとパスワードを用いた認証の実装部分
    passport.use(
      new LocalStrategy(
        {
          usernameField: authSetting.usernameField,
          passwordField: authSetting.passwordField,
          passReqToCallback: true,
        },
        (req, userID, password, done) => {
          models.users.authorize(userID, password)
            .then(userIdInformation => {
              // 認証に成功したらユーザ情報を返す
              return done(null, userIdInformation);
            })
            .catch( err => {
              req.flash('login_error', err);
              return done(null, false);
            });
        }
      )
    );
  }

  static authenticate(req, res, next) {
    // 認証情報を参照
    passport.authenticate(authSetting.strategyName, {
      // ログインに成功した時のリダイレクト先
      successRedirect: Authenticator.redirect.success,
      // ログインに失敗した時のリダイレクト先と表示メッセージ
      failureRedirect: Authenticator.redirect.failure,
      failureFlash: 'メールアドレスまたはパスワードに誤りがあります'
    })(req, res, next);
  }

  // 認証が完了しているか確認(routes内で使う)
  static isAuthenticated(req, res, next) {
    // 認証が完了している時は次の処理に進む
    console.log('isAuthenticated');
    if(req.isAuthenticated()) {
      return next();
    } else {
      console.log('failure');
      // 認証が終わっていなかったらログイン画面にリダイレクトする
      return res.redirect(Authenticator.redirect.failure);
    }
  }
}

module.exports = Authenticator;

Authenticator.redirect = {
  success: '/',
  failure: '/login',
  permission: '/'
};