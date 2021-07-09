function tell(){



    window.addEventListener("keydown", my_keydown);
function my_keydown(e){


    keypressed = e.keyCode;
    console.log(keypressed);

    ascii_value =  keypressed;
    document.getElementById("h4_1").innerHTML ="<i>" + "<b>"  + "The ASCII value code for the following key is " + ascii_value + "</b>" + "</i>";

    
    }
   
}