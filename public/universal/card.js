$(document).ready(function(){

    //https://stackoverflow.com/questions/1960240/jquery-ajax-submit-form
    $(".contact-form").submit(function(e){

        $.ajax({
            type: "POST",
            url: "../email.php", // the script where you handle the form input.
            data: $(this).serialize(), // serializes the form's elements.
            success: function(data){
                Done(data); // show response from the php script.
            }
            });

        e.preventDefault(); // avoid to execute the actual submit of the form.
        document.getElementById("description").innerHTML=
         '<div style="margin: 4vw; text-align: center;" class="name-header secondary-normal shadow-2">...</div>';
    });
    
    const pageURL = "http://yiome.16mb.com/pl/";
    const sheet = $("#side-sheet");
    const wrapper = $("#wrapper");
    
    let currentlyLoaded = null;
    let sheetExtended = false;
    let sheetsWidth;

    function updateSheetsWidth(){
        const scaleMultipler = 1.3;

        if($(window).width() <= $(window).height() * scaleMultipler) 
            sheetsWidth = $(window).width();
        else 
            sheetsWidth = $(window).height() * scaleMultipler;

        sheet.css("width" , sheetsWidth);
    }

    function set(){
        updateSheetsWidth();
        slideOut()
    }

    set();

    function updateSheetsContent(pageName){
        const link = pageName + ".html";
        // load page
        if(currentlyLoaded != link){
            $("#side-content").load(link);
            // edit title
            $("#side-title").html(pageName);
            currentlyLoaded = link;
        }
    }

    function slideIn(){
        updateSheetsWidth();
        // slide in
        sheet.css("right", "0px");
        // block scroll
        $("html").css("overflow", "hidden");
        $("body").css("overflow", "hidden");
        setTimeout(function() { wrapper.css("filter", "grayscale(100%)"); }, 400);
        setTimeout(function() { sheetExtended = true }, 400);
    }

    function slideOut(){
        // slide out
        sheet.css("right", "-" + sheetsWidth + "px");
        // unlock scroll
        $("html").css("overflow", "auto");
        $("body").css("overflow", "auto");
        setTimeout(function() { wrapper.css("filter", "initial"); }, 400);
        setTimeout(function() { sheetExtended = false }, 400);
    }

    $(".card-of-the-project").click(function(){
        if(sheetExtended === false){
            updateSheetsContent($(this).data("page"));
            slideIn();
        }
    });

    wrapper.click(function(){
        if(sheetExtended === true) slideOut();
    });

    $("#side-back").click(function(){
        slideOut();
    });
    
    $(window).resize(function(){
        if(sheetExtended === true) updateSheetsWidth();
    });

});