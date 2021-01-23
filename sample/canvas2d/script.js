(() => {[]
let canvas = null;
let ctx = null;
let image = null;

// ページのロード完了時に発火するloadイベント]
window.addEventListener('load', () => {
    imageLoader('sample/canvas2d/image/image.jpg', (loadedImage) => {
        // グローバル変数にロードによって受け取った画像を渡す
        image = loadedImage;
        initialize();
        render();
    });
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
    ctx.drawImage(image, 100, 100);
    drawText('hello!', 50, 50, '#ffffff');
}

/* ==============================
 *     ユーザー定義関数
 * ============================== */

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

// ランダムな整数の値を生成する関数
function generateRandomInt(range){
    let random = Math.random();
    return Math.floor(random * range);
}

// 円を描画する関数
function drawCircle(x, y, radius, color){
    if(color != null){
        ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.arc(x, y, radius, 0.0, Math.PI * 2.0);
    ctx.closePath();
    ctx.fill();
}

// 扇を描画する関数
function drawFan(x, y, radius, startRadian, endRadian, color){
    if(color != null){
        ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startRadian, endRadian);
    ctx.closePath();
    ctx.fill();

}

// 2次ベジェ曲線を描画する関数
function drawQuadraticbezier(x1, y1, x2, y2, cx, cy, color, width = 1){
    if(color != null){
        ctx.strokeStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cx, cy, x2, y2);
    ctx.closePath();
    ctx.stroke();
}

// 3次ベジェ曲線を描画する関数
function drawCubicBezier(x1, y1, x2, y2, cx1, cy1, cx2, cy2, color, width = 1){
    if(color !== null){
        ctx.strokeStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
    ctx.closePath();
    ctx.stroke();
}

// テキストを描画する関数
function drawText(text, x, y, color, width){
    if(color != null){
        ctx.fillStyle = color;
    }
    ctx.fillText(text, x, y, width);
}



// 画像をロードしてからコールバック関数（初期化と描画）を実行する関数
function imageLoader(path, callback){
    let target = new Image();
    target.addEventListener('load', () => {
        if(callback != null){
            // コールバック関数にロードした画像を渡す
            callback(target);
        }
    }, false);
    target.src = path;
}

})();
