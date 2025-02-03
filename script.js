// Get the canvas and its context
window.addEventListener('load',(e)=> {
    __G_CANVAS["CANVAS"]            = document.getElementById("mycanvas");
    __G_CANVAS["CANVAS_CONTEXT"]    = __G_CANVAS["CANVAS"].getContext("2d");
    __G_CANVAS["CANVAS_WIDTH"]      = __G_CANVAS["CANVAS"].width;
    __G_CANVAS["CANVAS_HEIGHT"]     = __G_CANVAS["CANVAS"].height;
    __G_CIRCLE["RADIUS"]            = __G_CANVAS["CANVAS"].width / 2;
    __G_CIRCLE["CENTER_X"]          = __G_CANVAS["CANVAS_WIDTH"] / 2;
    __G_CIRCLE["CENTER_Y"]          = __G_CANVAS["CANVAS_HEIGHT"] / 2;

    initializeUI();
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

function initializeUI()
{
    __G_UI["PI_ESTIMATE"]       = document.getElementById("pi-estimate")
    __G_UI["PI_ERROR"]          = document.getElementById("pi-error")
    __G_UI["PROGRESS_BAR"]      = document.getElementById("progress-bar")
    __G_UI["PROGRESS_TEXT"]     = document.getElementById("progress-text")
}

// Update Pi estimate and error rate
function updateStats(piEstimate)
{
    __G_UI["PI_ESTIMATE"].textContent   = `Estimated Pi: ${piEstimate.toFixed(4)}`;
    const errorRate                     = ((piEstimate - Math.PI) / Math.PI) * 100;
    __G_UI["PI_ERROR"].textContent      = `Error Rate: ${errorRate.toFixed(2)}%`;
}

// Update progress bar
function updateProgress(progressValue)
{
    __G_UI["PROGRESS_BAR"].style.width  = `${progressValue}%`;
    __G_UI["PROGRESS_TEXT"].textContent = `${progressValue.toFixed(2)}%`;
}
