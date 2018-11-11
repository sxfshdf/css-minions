!function(){
  let code = `
  /* 先准备小黄人的皮肤 */

  .previewWrapper{
    flex: 1;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffe415;
  }
  .wrapper{
    width: 320px; 
    height: 260px;
    position: relative;
  }

  /* 再画个眼镜的带子 */

  .glassesFrame{
    height: 32px;
    width: 100vw;
    background: #6a3606;
    position: absolute;
    left: 50%;
    margin-left: -50vw;
    top: 80px;
  }

  /* 然后是左边的镜框 */
  
  .glasses.left{
    width: 148px;
    height: 148px;
    background: #a09fa2;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -140px;
    top: 22px;
  }
  .glasses.left::after{
    content: '';
    display: block;
    width: 48px;
    height: 48px;
    background: #a09fa2;
    position: absolute;
    top: 50px;
    margin-left: -8px;
  }

  /* 右边的镜框 */

  .glasses.right{
    width: 148px;
    height: 148px;
    background: #a09fa2;
    border-radius: 50%;
    position: absolute;
    right: 50%;
    margin-right: -140px;
    top: 22px;
  }
  .glasses.right::after{
    content: '';
    display: block;
    width: 48px;
    height: 48px;
    background: #a09fa2;
    position: absolute;
    top: 50px;
    margin-left: 108px;
  }

  /* 接着画左边的眼睛 */

  .eye.left.white{
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -116px;
    top: 46px;
  }
  .eye.left.pupilla{
    width: 52px;
    height: 52px;
    background: #935d2d;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -92px;
    top: 70px;
  }
  .eye.left.eyeball{
    width: 30px;
    height: 30px;
    background: #693401;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -81px;
    top: 81px;
  }
  .eye.left.eyeball::after{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
  }

  /* 然后是右边的眼睛 */

  .eye.right.white{
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 50%;
    position: absolute;
    right: 50%;
    margin-right: -116px;
    top: 46px;
  }
  .eye.right.pupilla{
    width: 52px;
    height: 52px;
    background: #935d2d;
    border-radius: 50%;
    position: absolute;
    right: 50%;
    margin-right: -92px;
    top: 70px;
  }
  .eye.right.eyeball{
    width: 30px;
    height: 30px;
    background: #693401;
    border-radius: 50%;
    position: absolute;
    right: 50%;
    margin-right: -81px;
    top: 81px;
  }
  .eye.right.eyeball::after{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
  }

  /* 画上嘴巴 */
  .mouth{
    width: 120px;
    height: 60px;
    background: #9b000a;
    position: absolute;
    left: 50%;
    margin-left: -60px;
    top: 200px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    overflow: hidden;
  }
  .mouth::after{
    content: '';
    display: block;
    width: 100px;
    height: 40px;
    background: #ff485f;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 30px;
    border-radius: 50%;
  }

  /* 最后是牙齿 */

  .teeth{
    width: 30px;
    height: 32px;
    background: white;
    border-radius: 8px;
    position: absolute;
    left: 0px;
    top: -12px;
  }
  .teeth1{
    width: 30px;
    height: 32px;
    background: white;
    border-radius: 8px;
    position: absolute;
    left: 30px;
    top: -12px;
  }
  .teeth2{
    width: 30px;
    height: 32px;
    background: white;
    border-radius: 8px;
    position: absolute;
    left: 60px;
    top: -12px;
  }
  .teeth3{
    width: 30px;
    height: 32px;
    background: white;
    border-radius: 8px;
    position: absolute;
    left: 90px;
    top: -12px;
  }

  /* 完成 */
  `

 
  let duration = 10
  function writeCode(preCode,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    setTimeout(function run(){
      n += 1
      container.innerHTML = preCode + code.substring(0,n)
      styleTag.innerHTML = preCode + code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if( n < code.length){
        setTimeout(run,duration)
      }else{
        fn && fn.call()
      }
    },duration)
  }
  writeCode('',code)

}.call()