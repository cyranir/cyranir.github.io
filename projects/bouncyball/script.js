let canvas;
let context;
let arcX = 375;
let arcY = 150;
let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 60;
let timePassed = 0;

window.onload = init;

function init(){
    // Get a reference to the canvas
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

function gameLoop(timeStamp){
    // Calculate how much time has passed
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    update(secondsPassed);
    drawStuff();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function update(secondsPassed) {
    timePassed += secondsPassed;

    //arcX += (movingSpeed * secondsPassed);
    arcY -= sineInOutQuint(timePassed, 1.5, -0.1, 0.5);
}

function sineInOutQuint (t, b, c, d) {
    if ((t /= d / 2) < 1) return Math.sin((t*Math.PI/2));

    //if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    //return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    return Math.sin((t*-Math.PI/5))
  }

function drawStuff() {

    //empty the canvas
    context.clearRect(0,0, canvas.width, canvas.height);
    // Get a random color, red or blue
    let randomColor = Math.random() > 0.5? "#ff8080" : "#0099b0";
    //context.fillStyle = randomColor;
    context.fillStyle = "red";
    context.beginPath();
    context.arc(arcX, arcY, 40, 0, 2 * Math.PI); //x, y, radius, starting angle (rad), ending angle (rad)
    context.fill();
}


/* original code
function move(event) {
    var k = event.keyCode,
        chrId = document.getElementById("bouncyball"),
        chr = {
            up: function () {
                var y = parseInt(getComputedStyle(chrId).top);
                if (k == 32) {
                  y = y - 100;
                }
                return y;
            },
        };
      chrId.style.top = (chr.up()) + "px";
      console.log(chr.up());
}

document.addEventListener('keydown', move);
*/
