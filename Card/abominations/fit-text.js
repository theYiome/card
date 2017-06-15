// https://stackoverflow.com/questions/10718840/make-text-height-100-of-div
let FitText_items;

function FitText_getItems(){
    FitText_items = $(".fit-text");
}
FitText_getItems();

$(document).ready(function(){

    const ratio = 1;

    function makeFit(){
        let itemHeight = FitText_items.height();
        // Set the font-size and line-height of the text within the div according to the current height.
        FitText_items.css("font-size", (itemHeight/2)*ratio + "px");
        FitText_items.css("line-height", itemHeight*ratio + "px");
    }

    $(window).resize(function(){
        makeFit();
    });

});