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

document.getElementById("switch").onclick = function() {
    var now = new Date();
    var today = now.getDay();
    switch (today) {
        case 0:
            document.getElementById("outPut").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("outPut").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("outPut").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("outPut").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("outPut").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("outPut").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("outPut").innerHTML = "Saturday";
            break;
        default:
            document.getElementById("outPut").innerHTML = "It's some other day";
            break;
    }
}
document.getElementById("keepAsk").onclick = function() {
    var getName = prompt("Enter Your Name");
    do {
        console.log("Please Enter Valid Value!")

    } while (getName === null || getName == "");
    document.getElementById("outPut").innerHTML = "Your Name is" + " " + getName;
}