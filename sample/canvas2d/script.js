(() => {[]
let canvas = null;
let ctx = null;

// ページのロード完了時に発火するloadイベント]
window.addEventListener('load', () => {
    initialize();
    render();
}, false);

// 初期化関数の定義
function initialize(){
    canvas = document.body.querySelector('#mainCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
}

// 描画関数の定義
function render(){
    ctx.fillStyle = '#000000';

    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

})();
