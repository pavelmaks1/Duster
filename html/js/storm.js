var canvas, stage, exportRoot, parentWindow, messager;

messager = new PostMessanger(window, [
    'https://ru-ru.qa.heliosrenault.net',
    'https://ru-ru.uat.heliosrenault.net',
    'https://ru-ru.prod.heliosrenault.net',
    'https://www.renault.ru',
    'https://author.qa.heliosrenault.net',
    'https://author.uat.heliosrenault.net',
    'https://author.prod.heliosrenault.net',
    'https://live.renault.ru'
]);

messager.on('size', function (size) {
    parentWindow = size;
    console.log(size)
    resizeCanvas();
    messager.send("resizeFrame", document.body.clientHeight)
});
messager.on('scroll', function (scrollTop) {

    var elem = document.querySelector('.storm');
    ['', 'moz', 'webkit', 'm'].forEach(function (prefix) {
        if (prefix) {
            elem.style[prefix + 'Transform'] = 'translate(0, ' + scrollTop + 'px)';
        } else {
            elem.style.transform = 'translate(0, ' + scrollTop + 'px)';
        }
    });
    if (exportRoot) {
        exportRoot.stormWrap.play();
    }

});

window.addEventListener('wheel', onScroll, true);
window.addEventListener('mousewheel', onScroll, true);
window.addEventListener('onmousewheel', onScroll, true);

function onScroll() {
    if (exportRoot) {
        exportRoot.stormWrap.play();
    }
}

function removeCanvas() { // вызывается когда весь песок поиграл
    document.querySelector('.storm').style.display = "none";
    window.removeEventListener('wheel', onScroll, true);
    window.removeEventListener('mousewheel', onScroll, true);
    window.removeEventListener('onmousewheel', onScroll, true);
    messager.send('end', null);
}

// window.addEventListener("message", receiveMessage, false);
function init() {
    canvas = document.getElementById("canvas");
    images = images || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest([
        {src: "storm_files/pesok.jpg?1473341916381", id: "pesok"},
        {src: "storm_files/pesok_top.png?1473341916381", id: "pesok_top"},
        {src: "storm_files/protektor_sled_v2.png?1473341916381", id: "protektor_sled_v2"},
        {src: "storm_files/sand1.png?1473341916381", id: "sand1"},
        {src: "storm_files/sand2.png?1473341916381", id: "sand2"},
        {src: "storm_files/sand3.png?1473341916381", id: "sand3"},
        {src: "storm_files/sand4.png?1473341916381", id: "sand4"},
        {src: "storm_files/smoke.png?1473341916381", id: "smoke"},
        {src: "storm_files/smoke3.png?1473341916381", id: "smoke3"}
    ]);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            "images": [queue.getResult(ssMetadata[i].name)],
            "frames": ssMetadata[i].frames
        })
    }
    exportRoot = new lib.storm_4();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    //Code to support hidpi screens and responsive scaling.
    var lastW, lastH, lastS = 1;
    resizeCanvas()
    //window.addEventListener('resize', resizeCanvas);
    document.querySelector('.preloader-wrap').style.display = "none";
    document.querySelector('#container').classList.add('loaded');
}

function resizeCanvas() {
    if (exportRoot) {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = parentWindow.width, ih = parentWindow.height-100;
        canvas.width = iw;
        canvas.height = ih;
        canvas.style.width = iw + 'px';
        canvas.style.height = ih + 'px';
        exportRoot.stormWrap.x = iw / 2;
        exportRoot.scrollIcon.x = iw / 2;
        exportRoot.scrollIcon.y = ih / 5 * 4;
    } else {
    	init();
    }
    if (parentWindow) {
	    var elem = document.querySelector('.preloader-wrap');
    	elem.style.height = parentWindow.height + "px";
    }
}