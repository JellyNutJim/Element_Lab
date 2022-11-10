//This function will set the canvas size equal to its parent element ('canvas_parent')
//Called whenever a change in window size is detected
window.addEventListener('resize', function(event){
    let mainCanvas = document.querySelector('.canvas_parent');
    var canvas = document.getElementById("main_canvas");
    var pwidth = mainCanvas.clientWidth;
    var pheight = mainCanvas.clientHeight;

    // Makes sure both the height and width of the canvas are odd, to ensure a centre
    // This makes many calculations easier
    // As h = w, only one comparison is needed
    if (pwidth % 2 == 0)
    {
        pwidth += 1;
        pheight += 1;
    }

    canvas.setAttribute('width', pwidth);
    canvas.setAttribute('height', pheight);

});