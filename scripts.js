/**
 * So this entire js file is just for this function. 
 */
function convertButton() {
    var tmp = document.getElementById("tempInput").value;
    tmp = Number(tmp);
    if (isNaN(tmp)) {
        tmp = "Error!";
        document.getElementById("congratsImg").style.visibility = "hidden"; // by default this image is hidden, but if it has been set visible this will re-hide it
    }
    else {
        tmp = celsiusToFahrenheit(tmp);
        document.getElementById("congratsImg").style.visibility = "visible";
    }
    document.getElementById("fahrenheit").textContent = tmp;
}

function celsiusToFahrenheit(celsius) {
    return ((celsius * 1.8) + 32);
}
