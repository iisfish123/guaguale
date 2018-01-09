$(function () {
    var app ={};
    /**---------开始--------**/
    app.canvasTouch = function () {
        var draw_X = 0
        var draw_Y = 0
        game.end();
        var start_X = 0
        var start_Y = 0
        $('#canvas').on({
            'touchstart': function (e) {
                e.preventDefault();
                start_X = e.touches[0].pageX
                start_Y = e.touches[0].pageY
            },
            'touchmove': function (e) {
                e.preventDefault();
                draw_X = e.touches[0].pageX
                draw_Y = e.touches[0].pageY
                // console.info(draw_X,draw_Y);
                var canvas = document.getElementById('canvas')
                var ctx = canvas.getContext('2d')
                ctx.beginPath()
                ctx.fillStyle = '#FFFFFF'
                ctx.globalCompositeOperation = 'destination-out'
                ctx.arc(draw_X, draw_Y, 50, 0, 2 * Math.PI)
                ctx.fill()
            },
            'touchend': function () {

            },
        })
    }

    app.createCanvas = function (bool) {
        var canvas = document.getElementById('canvas')
        var ctx = canvas.getContext('2d')
        var img2 = $('#img2')[0]
        ctx.drawImage(img2, 0, 0, 596, 309)
        ctx.globalCompositeOperation = 'destination-over'
    }
    var game = {
        chance: 5,
        init: function () {
            $('#imgFail').show();
            game.clearCanvas();
            app.createCanvas()
            app.canvasTouch()
        },
        clearCanvas: function () {
            var c = document.getElementById('canvas')
            var ctx = c.getContext('2d')
            ctx.globalCompositeOperation = 'source-over'
            ctx.clearRect(0, 0, 596, 309)
        },
        end: function () {
            $('#canvas').off('touchstart touchmove,touchend');
        }
    }
    window.game = game;
    window.app = app
    game.init()//如果失败，应该是图片加载问题,解决方案最好是异步加载完图片，再执行game.init。  或者直接打开demo，在控制台输入game.init()也能看到效果
})
