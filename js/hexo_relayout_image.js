function hexo_resize_image () {
  let imgArr = document.getElementsByTagName('img');
  for (let i = 0, len = imgArr.length; i < len; i++) {
    // 图片路径包含'?'符号
    if (imgArr[i].src && imgArr[i].src.indexOf('?') !== -1) {
      let tmpArr = imgArr[i].src.split('?'); // tmpArr=[路径, 宽高]
      if (tmpArr.length !== 2) {
        continue;
      }
      let tmpSrcArr = tmpArr[0].split('/'); // tmpArr[0]不包含基础路径 拿到其文件名
      let index = tmpSrcArr.length - 1; // 图片名的index
      document.getElementsByTagName('img')[i].src = imgArr[i].baseURI + tmpSrcArr[index]; //将真实地址赋予src
      let widthAndHeight = tmpArr[1].split('&'); // 拿到宽高
      if (widthAndHeight.length !== 2) {
        console.log('Input the value of widthAndHeight')
        continue;
      }
      let newWidth = widthAndHeight[0];
      let newHeight = widthAndHeight[1];
      if (newWidth <= 0 || newHeight <= 0) {
        console.log("Range of the value: (0, +]");
        continue;
      }
      document.getElementsByTagName('img')[i].setAttribute('style', `height: ${newHeight}px; width: ${newWidth}px; clear: both; display: block; margin: auto;`);

    }
  }
}
window.onload = hexo_resize_image;