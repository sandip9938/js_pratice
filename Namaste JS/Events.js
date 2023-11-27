//---------Events----------
//list of events
/*
click
mouseover
mouseout
mousemove
keydown
keyup
submit
*/

//---------Settimeout----------------
function myFunction() {
    setTimeout(function(){ alert("Hello"); }, 3000);
    }
    myFunction();
//---------Setinterval----------------
var x = 1;
setInterval(function () {
    console.log(x);
    x++;
    }, 2000)
//---------Event Listener--------------
document.getElementById('myButton').addEventListener('click', function (){
    alert ('You clicked the button');
    });
    
