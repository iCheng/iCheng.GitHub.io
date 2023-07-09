function hexo_resize_image () {
  // document.getElementsByTagName('img')[0].attributes.style.value = "height: 2000px; width: 20px;";
  let imgArr = document.getElementsByTagName('img');
  for (let i = 0, len = imgArr.length; i < len; i++) {
    // 图片路径包含'?'符号
    if (imgArr[i].src && imgArr[i].src.indexOf('?') !== -1) {
      let tmpArr = imgArr[i].src.split('?');
      if (tmpArr.length !== 2) {
        return;
      }
      document.getElementsByTagName('img')[i].src = tmpArr[0]; //将真实地址赋予src
      let scaleNum = tmpArr[1]; // 拿到缩放值
      let newHeight = imgArr[i].height * scaleNum;
      let newWidth = imgArr[i].width * scaleNum;
      if (scaleNum && (scaleNum > 2 || scaleNum <= 0)) {
        console.log("Range of the scale: [-1, 1]");
        return;
      }
      document.getElementsByTagName('img')[i].setAttribute('style', `height: ${newHeight}px; width: ${newWidth}px; clear: both; display: block; margin: auto;`);

    }
  }
}
window.onload = hexo_resize_image;