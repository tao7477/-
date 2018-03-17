$(function(){
    arrMusicID = [1091355,715960,1924530,3545209,17109216,3552458,410161125,116493,411356494];  //musicID array
    musicID = Math.floor(Math.random()*(arrMusicID.length)) //get a ran num as index
    $('body').css('height',document.documentElement.clientHeight -5);

    if (!Number.isInteger(arrMusicID[musicID])) return; // load failed, bye~

    var iframe = document.createElement('iframe');
    iframe.id="bgm";
    iframe.style = "position: absolute; bottom: 0; left: 30px; border: 0px;";
    iframe.src = '//music.163.com/outchain/player?type=2&id=' +arrMusicID[musicID]+ '&auto=1&height=32';
    console.log(iframe.src)
    iframe.frameborder="no";
    iframe.marginwidth="0";
    iframe.marginheight="0";
    iframe.width=250;
    iframe.height=52;
    document.body.appendChild(iframe);
});