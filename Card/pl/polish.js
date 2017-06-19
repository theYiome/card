function Done(data){
    if(data === "SUCCESS"){
        document.getElementById("description").innerHTML= 
        '<div style="margin: 4vw; text-align: center;" class="name-header secondary-normal shadow-2">Wysłano <i class="fa fa-envelope" aria-hidden="true"></i></div>';
    } else{
        document.getElementById("description").innerHTML= 
        '<div style="margin: 4vw; text-align: center; color: white; background-color: crimson;" class="name-header shadow-2">Wystąpił błąd ;(</div>';
    }
}