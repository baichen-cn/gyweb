/**
 * Created by fz-user on 2018/6/19.
 */
    var topbox = document.getElementById('top');
    var wh=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    topbox.style.height = wh +'px';

$('#gotop').click(function () {
    var $stt = $('body').scrollTop()
    time = setInterval(function () {
        $stt = $stt-50
        $('body').scrollTop($stt)
        if($stt<0){
            clearInterval(time)
        }
    },10)
})
/**************     返回顶部按钮 **********/

