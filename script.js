// Get the canvas and its context
window.addEventListener('load',(e)=> {
    __G_CANVAS["CANVAS"]            = document.getElementById("mycanvas");
    __G_CANVAS["CANVAS_CONTEXT"]    = __G_CANVAS["CANVAS"].getContext("2d");
    __G_CANVAS["CANVAS_WIDTH"]      = __G_CANVAS["CANVAS"].width;
    __G_CANVAS["CANVAS_HEIGHT"]     = __G_CANVAS["CANVAS"].height;
    __G_CIRCLE["RADIUS"]            = __G_CANVAS["CANVAS"].width / 2;
    __G_CIRCLE["CENTER_X"]          = __G_CANVAS["CANVAS_WIDTH"] / 2;
    __G_CIRCLE["CENTER_Y"]          = __G_CANVAS["CANVAS_HEIGHT"] / 2;

    initializeCircle();
})

// Draw the circle boundary
function initializeCircle()
{
    __G_CANVAS["CANVAS_CONTEXT"].beginPath();
    __G_CANVAS["CANVAS_CONTEXT"].arc(__G_CIRCLE["CENTER_X"], __G_CIRCLE["CENTER_Y"], __G_CIRCLE["RADIUS"], 0, 2 * Math.PI);
    __G_CANVAS["CANVAS_CONTEXT"].strokeStyle = "white";
    __G_CANVAS["CANVAS_CONTEXT"].stroke();
}

