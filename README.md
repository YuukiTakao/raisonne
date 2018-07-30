# 使い方

コンテナはデーモンとしてバックグラウンドで起動する方法と通常のアプリケーション同様フォアグラウンドで起動する方法がある。  
下記バックグラウンドで起動する方法。  

1. リポジトリを適当な場所にクローンする
2. クローンしたディレクトリ直下に移動する
```
cd /path/to/raisonne
```
3. コンテナを起動する
```
docker-compose up -d
```
4. nodeコンテナにssh
```
docker-compose exec node /bin/bash
```
5. nodeコンテナ上でマイグレーション実行
```
node_modules/.bin/sequelize db:migrate
```
6. ブラウザからページを確認する  
下記URLで確認できる
```
http://127.0.0.1:8080/
```


- -dなしで起動するとフォアになる。こっちのほうがlogsで出力を拾いに行かなくて良いので楽。

- ```docker-compose```はdocker-compose.ymlのあるディレクトリにいる状態で実行しないと期待動作をしないので注意

- nodemonが入っているのでファイルを更新すると自動的にnode再起動して変更が反映されます

# その他Dockerの操作

- コンテナの出力を確認する
```
docker logs -f [コンテナ名]
例）docker logs -f node
```
上記のように```docker-compose up -d```した場合にnodeサーバーの出力を確認するのに使える。  
コンテナの標準出力と標準エラー出力を取得するコマンドらしい。

- コンテナの起動を確認する  
```
docker ps
```
実行すると下記のように起動中のコンテナ一覧が表示される
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
d8fdeb2a1eec        raisonne_node       "/bin/sh -c 'npm sta…"   2 days ago          Up 2 days           0.0.0.0:8080->80/tcp   node
feb21f583752        mysql:5.7           "docker-entrypoint.s…"   2 days ago          Up 2 days           3306/tcp               mysql
```

- コンテナの停止
```
docker-compose down
```

- コンテナイメージの削除（多分やるまえにコンテナ止めた方が良い）
```
docker ps -qa | xargs docker rm
```
