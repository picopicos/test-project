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
    drawRect(10,10,30,30,'#765');
    drawLine(100, 100, 200, 200, '#ff0000');
    let points = [
        100, 100,
        300, 100,
        100, 300,
        300, 300,
    ];
    drawPolygon(points, '#ff0000');
}

// 短形を描画する関数
function drawRect(x, y, width, height, color){
    if(color != null){
        ctx.fillStyle = color;
    }
    ctx.fillRect(x, y, width, height);
}

// 線分を描画する関数
function drawLine(x1, y1, x2, y2, color, width = 1){
    if(color != null){
        ctx.strokeStyle = color;
    }
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}


// 多角形を描画する関数
function drawPolygon(points, color){
    if(Array.isArray(points) !== true || points.length < 6){
        return;
    }
    if(color != null){
        ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length; i += 2) {
        ctx.lineTo(points[i], points[i + 1]);
    }
    ctx.closePath();
    ctx.fill();
}

})();
