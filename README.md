# webpack-template

webpack を利用してみたい！
そんな気持ちにさせてくれるよ...

## npmパッケージをインストール

```
#プロジェクトのディレクトリに移動して
$ npm install
```

## ファイル監視
[http://localhost:4000/](http://localhost:4000/)


```
$ npm run start
```

## ファイル生成

デプロイ用のファイル一式を生成

```
$ npm run build
```

## ディレクトリ構成

./src/ 内のファイルを編集

+ pug -> html
+ html -> html
+ js -> babel -> js
+ css -> css
+ sass -> css


```
├─ node_modules/
│  └─ パッケージ各種
│
├─ src/
│  ├─ css/
│  ├─ html/
│  ├─ images/
│  ├─ js/
│  ├─ pug/
│  ├─ sass/
│  └─ index.js
│
├─ .babelrc
├─ .gitignore
├─ package.json
├─ README.md
└─ webpack.config.js
```

## パッケージのバージョン管理

更新、アップデートの確認に npm-check-updates をインストールする

```
$ sudo npm install -g npm-check-updates
```

ncu コマンドでアップデート

```
$ ncu -u
```
