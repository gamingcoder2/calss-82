var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent= "empty";

var last_x_pos, last_y_pos;

var color= "black";
var widthOfLine=3;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    widthOfLine=document.getElementById("linewidth").value;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_x_pos=e.clientX-canvas.offsetLeft;
    current_y_pos=e.clientY-canvas.offsetTop;
    console.log("Last position of x and y coordinates =");
    console.log("x= + last_x_pos y= + last_y_pos");
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthOfLine;
        ctx.moveTo(last_x_pos, last_y_pos);
        ctx.lineTo(current_x_pos, current_y_pos);
        ctx.stroke();
    }
    last_x_pos=current_x_pos;
    last_y_pos=current_y_pos;
}
function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}