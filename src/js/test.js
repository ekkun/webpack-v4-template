//const throttle = require('throttle-debounce');
import { throttle, debounce } from 'throttle-debounce';

window.addEventListener('scroll', throttle(200, () => {
  // scroll function
    console.log('スクロールされたよ！');
}), false);

window.addEventListener('resize', throttle(200, () => {
  // resize function
    console.log('リサイズされたよ！');
}), false);

/*let timeout;
window.addEventListener('resize', () => {
  // リサイズを停止して500ms後に終了とする
  clearTimeout(timeout);
  timeout = setTimeout(() => {
  // 処理内容
    console.log('リサイズされたよ！');
  }, 500);
});*/
