document.getElementById("ifElse").onclick = function() {

    var now = new Date();
    var today = now.getDay();

    if (today === 0){
        alert("Sunday");
    }
    else if (today === 1){
        alert("Monday");
    }
    else if (today === 2){
        alert("Tuesday");
    } 
    else if (today === 3){
        alert("Wednesday");
    }
    else if (today === 4){
        alert("Thursday");
    }
    else if( today === 5){
        alert("Friday");
    } 
    else if( today === 6){
        alert("Saturday");
    } else{
        alert("It is SomeOther Day!")
    }
}
