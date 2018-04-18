$(function(){
    var messager;
    var ended = false, iframe = $('iframe[src="https://live.renault.ru/landing-dakar/"]')[0];//document.getElementsByTagName("iframe")[0];
        
    //iframe.addEventListener('load', iframeLoadHandler, false);
 	
 	function iframeLoadHandler () {
    window.addEventListener('load', function () {
        console.debug('duster onload');
        document.body.style.overflow = 'hidden';
        iframe.style.width = '100vw';

        messager = new PostMessanger(iframe.contentWindow, 'https://live.renault.ru');
        resize();
        onScroll();
        messager.on('end', function () {
            ended = true;
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', resize, false);
        });
        messager.on('resizeFrame', function (height) {
            iframe.height = height;
        });
    }, false);

    window.addEventListener('resize', resize, false);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('keydown', function (event) {
    if (event.keyCode === 40 || event.keyCode === 38) {
       onScroll(event);
    }
});
    
    }

function onScroll(event) {
              console.debug('duster onscroll');
        if (!ended) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        if (event && !ended) {
              event.preventDefault();
        }
        if (messager) {
            messager.send('scroll', document.body.scrollTop);
        }
    }

    function resize() {
              console.debug('duster resize');
        var size = {};
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        if (size.width <= 1024) {
           ended = true;
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize', resize, false);
        }
        if (messager) {
            messager.send('size', size);
        }
    }
    iframeLoadHandler();
});