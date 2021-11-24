/**
 * INDEX
 */
import Apps from './apps.js';

window.addEventListener('DOMContentLoaded', () => {
  if (Apps() == 'index') {
    // body のデータ属性が一致した場合 js を処理
    console.log('INDEXページでーす！');
    alert('JavaScriptのアラート');
    /*
    const items = document.querySelectorAll('.item');
    const itemsArray = Array.from(items);

    itemsArray.forEach((e, i) => {
      console.info(e, i);
    });
*/
  }
});
