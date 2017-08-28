// Get the modal //
var modal= document.getElementById("myModal");

// Get the button that opens the model //
var btn= document.getElementById("myBtn");

// Get the span element that closes the modal //
var span= document.getElementsByClassName("close")[0];

//when the user clicks on the button, open the modal//
btn.onclick= function(){
    modal.style.display= "block";
}

// when the user clicks on the span (x), close the modal //
span.onclick = function (){
    modal.style.display = "none";
}



//.......................Make it Shiny modal........................//

// Get the modal //
var modal2= document.getElementById("myModal2");

// Get the button that opens the model //
var btn2= document.getElementById("myBtn2");

// Get the span element that closes the modal //
var span2= document.getElementsByClassName("close")[1];

//when the user clicks on the button, open the modal//
btn2.onclick= function(){
    modal2.style.display= "block";
}

// when the user clicks on the span (x), close the modal //
span2.onclick = function (){
    modal2.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it //
//window.onclick= function(event) {
//    if (event.target == modal2) {
//        modal2.style.display = "none";
//    }
//}



///Flossmode//

// Get the modal //
var modal3= document.getElementById("myModal3");

// Get the button that opens the model //
var btn3= document.getElementById("myBtn3");

// Get the span element that closes the modal //
var span3= document.getElementsByClassName("close")[2];

//when the user clicks on the button, open the modal//
btn3.onclick= function(){
    modal3.style.display= "block";
}

// when the user clicks on the span (x), close the modal //
span3.onclick = function (){
    modal3.style.display = "none";
}


// when the user clicks anywhere outside of the modal, close it //
window.onclick= function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == modal2){
        modal2.style.display = "none";
    }
    else if (event.target == modal3){
        modal3.style.display = "none";
    }
}


























