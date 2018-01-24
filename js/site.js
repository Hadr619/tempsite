$(document).ready(function(){

});
window.addEventListener("load", function() {

    window.requestAnimFrame = (function() {
       return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function(callback) {
             window.setTimeout(callback, 1000 / 60);
          };
    })();
 
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
 
    var curvesNum = 666;
    var r = 250;
    var vr = 0.2;
    var x=0,y=0;
    
    
 
    function setCanvasSize() {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
    }
 
    function setBG() {
       ctx.fillStyle = "rgb(0,70,100)";
       ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
 
    function draw() {
       setBG();
 
       ctx.strokeStyle = "rgba(255,255,255,.2)";
       for (var i = 0; i < curvesNum; i++) {
          ctx.beginPath();
          ctx.moveTo(
             canvas.width / 2, //starting point X
             canvas.height / 2 //starting point Y
          );
          
          ctx.quadraticCurveTo(
             canvas.width / 2 + r * Math.sin(i * 2 * Math.PI / curvesNum), //cpX
             canvas.height / 2 + r * Math.cos(i * 2 * Math.PI / curvesNum), //cpY
             canvas.width / 2 + 400 * Math.sin(i * 80 * Math.PI / curvesNum+x), //end point X
             canvas.height / 2 + 400 * Math.cos(i * 80 * Math.PI / curvesNum+y) //end point Y
          );
 
          ctx.stroke();
          ctx.fillStyle = "rgba(255,255,255,.01)";
          if (document.getElementById("check").checked) {
             ctx.fill();
          }
 
       }
       
       if (r > 700 || r < 250) {
          vr *= -1;
       }
       
       r += vr;
       
       if(document.getElementById("rotate").checked){
          x+=Math.PI/2880;
          y+=Math.PI/2880;
       }          
       
       requestAnimFrame(draw);
    }
 
    window.addEventListener("resize", function() {
       setCanvasSize();
       setBG();
       draw();
    });
 
    document.getElementById("range").addEventListener("input", function() {
       curvesNum = this.value;
       document.getElementById("rangeText").innerHTML=
          "number of curves : "+this.value;
    });
    
   
 
    setCanvasSize();
    setBG();
    draw();
 });
//# sourceMappingURL=site.js.map
