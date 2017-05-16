document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
    var polosa = document.getElementById('polosa');
    left = left -200;
    polosa.style.left = left +'px';
    
}


