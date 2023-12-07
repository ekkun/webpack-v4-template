# webpack-template

webpack を利用してみたい！
そんな気持ちにさせてくれるよ...

## ディレクトリ

| ディレクトリ | 内容         |
| ------------ | ------------ |
| src          | 開発用コード |
| public       | 出力コード   |

## ファイル

| ファイル          | 内容                         |
| ----------------- | ---------------------------- |
| .browserslistrc   | 対象ブラウザの指定           |
| .eslintrc.js      | ESLint の設定                |
| babel.config.js   | Babel の設定                 |
| package.json      | node, webpack などの各種設定 |
| postcss.config.js | autoprefixer の設定          |
| webpack.config    | webpack 実行ファイル         |

<!--
## 利用アーキテクチャ・バージョン
node.js	v14.10.1以上
yarn	1.22.4以上
-->

## 各種コマンド

### node パッケージインストール

```
yarn install
```

上記コマンドで/node_modules/のインストール

### 監視

```
yarn watch
```

上記コマンドで仮ビルドを実行  
/public/ には書き出されないので注意  
ローカルサーバーが立ち上がり確認可能（デフォルトでは localhost:8080）

### ビルド

```
yarn build
```

上記コマンドで /public/ ディレクトリに吐きだれる

### キャッシュクリア

```
yarn clear-cache
```

監視時にエラーが出た場合に実行するといい具合になる  
もしくは /public/ を削除するといい具合になる

## 注意事項

### 画像パスについて

HTML に記述する画像パスについては src 内の相対パスで編集すること  
例：/src/img/logo.svg を読んでいる

```
<img src="../img/logo.svg">
```

出力先 HTML のパスについては下記参照

css に記述するパスは出力先と同様の書き方をする
例

```
background: url(../img/top/bg_paper.png) no-repeat;
```

<!--
### 出力先ディレクトリを変更したい
webpack.config.jsを変更する
**CSS**
```
new MiniCssExtractPlugin({
    filename: "./common/css/import.css",
}),
```
**JS**
```
entry: {
    cmn: "./src/js/cmn.js", //デフォルトのエントリーポイント
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "common/js/[name].js",
  },
```
-->
