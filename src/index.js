(function(){
    var runScript = function(e) {
        if (location.pathname.indexOf('embed') > -1 && e.type !== 'click') {
            document.getElementById('player').addEventListener('click', runScript);
            return;
        }
        if (e.type === 'click') {
            document.getElementById('player').removeEventListener('click', runScript);
        }
        if (!document.querySelector('video.html5-main-video')) return;
        if (document.querySelector('.nss-button')) return;
        var btn = document.createElement('button');
        btn.classList.add('ytp-button');
        btn.classList.add('nss-button');
        btn.style.lineHeight = '36px';
        btn.style.textAlign = 'center';
        btn.style.verticalAlign = 'top';
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="vertical-align:middle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="#fff"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#fff"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        btn.onclick = function() {
            var vid = document.querySelector('video');
            vid.pause();
            var win = window.open('');
            var img = win.document.createElement('img');
            var c1 = win.document.createElement('canvas');
            var ctx1 = c1.getContext('2d');
            c1.style.position = 'absolute';
            c1.style.width = vid.videoWidth+'px';
            c1.style.height = vid.videoHeight+'px';
            c1.width = vid.videoWidth;
            c1.height = vid.videoHeight;
            ctx1.drawImage(vid, 0, 0, vid.videoWidth, vid.videoHeight);
            if (c1.msToBlob) {
                img.src = URL.createObjectURL(c1.msToBlob());
            } else {
                img.src = c1.toDataURL('image/png');
            }
            win.document.body.appendChild(img);
        }
        document.querySelector('.ytp-right-controls').appendChild(btn);
    }
    document.addEventListener('yt-navigate-finish', runScript);
    document.addEventListener('DOMContentLoaded', runScript);
})();