import '../pug/index.pug';
/*const req = require.context('./pug/', false, /\.pug/);
// ファイル一覧を取得して、それぞれrequireする
req.keys().forEach((fileName) => {
  req(fileName);
});*/
import '../css/style.css';
import '../sass/style.scss';
import '../images/2525.jpg';

class Test {
  constructor(name) {
    this.name = name;
  }

  logger () {
    console.log("Hello", this.name);
  }
}

let test = new Test('world');

test.logger();

import '../js/test.js';
