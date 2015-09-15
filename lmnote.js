var bg = 'http://i.imgur.com/xMbQxxD.jpg';
var square = 'http://i.imgur.com/HCWqSf9.gif';
jQuery(document).ready(function ($){
    if (top.document.getElementById('fakebody')) return;

    var url = top.location;
    var div = document.createElement('iframe');

    div.id = 'fakebody';
    div.style.height = '100%';
    div.style.width = '100%';
    div.style.position = 'absolute';
    div.style.left = '0';
    div.style.right = '0';
    div.style.top = '0';
    div.style.bottom = '0';
    var bge = document.getElementsByClassName('bg-elements')[0];

    if (bge)
        bge.parentNode.removeChild(bge);

    var styles = document.createElement('style');
    var css = '.games-alert-tilt,.alerttiltcontainer,.mod-container,.GoogleActiveViewClass{display:none!important}.prWrap{display:none!important}body{background:url('+bg+') center 0px fixed #000!important;}.bg-elements{background:none transparent!important}.clearfix{display:none;}.games-ad300{background:url('+square+') transparent!important;height:275px;}.vid-frame{background:url('+square+') transparent;height:300px;width:250px;}';

    styles.innerHTML = css;

    document.body.appendChild(div);

    div.contentWindow.location = top.location.href;

    div.onload = function () {
        div.contentDocument.body.appendChild(styles);
    };
});