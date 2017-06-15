<?php
    $lang = @substr(Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']), 0, 2);
    switch($lang){
        case "pl":
            header("Location: pl/card");
        break;

        default:
            header("Location: eng/card");
        break;
    }
?>