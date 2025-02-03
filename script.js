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

// Draw a point
function drawPoint(x, y, color) 
{
    __G_CANVAS["CANVAS_CONTEXT"].beginPath();
    __G_CANVAS["CANVAS_CONTEXT"].arc(x, y, 2, 0, 2 * Math.PI);
    __G_CANVAS["CANVAS_CONTEXT"].fillStyle = color;
    __G_CANVAS["CANVAS_CONTEXT"].fill();
}

function animationStep() 
{
    if(__G_ANIMATION["TOTAL_POINTS"] >= __G_ANIMATION["NUM_POINTS"]) return;

    for (let i = 0; i < __G_ANIMATION["BATCH_SIZE"] && __G_ANIMATION["TOTAL_POINTS"] < __G_ANIMATION["NUM_POINTS"]; i++) 
    {
        // Random point coordinates
        const x = Math.random() * __G_CANVAS["CANVAS_WIDTH"];
        const y = Math.random() * __G_CANVAS["CANVAS_HEIGHT"];

        const distance = Math.sqrt(Math.pow(x - __G_CIRCLE["CENTER_X"], 2) + Math.pow(y - __G_CIRCLE["CENTER_Y"], 2));

        // Color point based on position
        if (distance <= __G_CIRCLE["RADIUS"]) 
        {
            __G_ANIMATION["INSIDE_CIRCLE"]++;
            drawPoint(x, y, '#ff9800');
        } 
        else 
        {
            drawPoint(x, y, '#0f9bec');
        }

        __G_ANIMATION["TOTAL_POINTS"]++;
    }

    const piEstimate = 4 * (__G_ANIMATION["INSIDE_CIRCLE"] / __G_ANIMATION["TOTAL_POINTS"]);
    const progressValue = (__G_ANIMATION["TOTAL_POINTS"] / __G_ANIMATION["NUM_POINTS"]) * 100;
    updateProgress(progressValue);
    updateStats(piEstimate);

    requestAnimationFrame(animationStep);
}

// Monte Carlo Pi Estimation
function monteCarloPI(numPoints) 
{
    __G_ANIMATION["INSIDE_CIRCLE"]  = 0;
    __G_ANIMATION["TOTAL_POINTS"]   = 0;
    __G_ANIMATION["NUM_POINTS"]     = numPoints;
    __G_ANIMATION["BATCH_SIZE"]     = 100;

    animationStep();
}
