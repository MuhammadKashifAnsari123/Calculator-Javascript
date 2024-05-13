var displayInput = document.getElementById("displayInput");

function getBtnValue(val){
    displayInput.value += val;
}
function calculateVal() {
    var val = displayInput.value;
    var ans = eval(val);
    displayInput.value = ans;

}

function clearVal() {
    displayInput.value = " ";
}
