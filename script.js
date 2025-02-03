// Get the canvas and its context
window.addEventListener('load',(e)=> {
    __G_CANVAS["CANVAS"]            = document.getElementById("mycanvas");
    __G_CANVAS["CANVAS_CONTEXT"]    = __G_CANVAS["CANVAS"].getContext("2d");
    __G_CANVAS["CANVAS_WIDTH"]      = __G_CANVAS["CANVAS"].width;
    __G_CANVAS["CANVAS_HEIGHT"]     = __G_CANVAS["CANVAS"].height;
    __G_CIRCLE["RADIUS"]            = __G_CANVAS["CANVAS"].width / 2;
    __G_CIRCLE["CENTER_X"]          = __G_CANVAS["CANVAS_WIDTH"] / 2;
    __G_CIRCLE["CENTER_Y"]          = __G_CANVAS["CANVAS_HEIGHT"] / 2;
})

