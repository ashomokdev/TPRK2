$(document).ready(function () {
    $("#buttonPlay").click(function () {
        var val = $('#inputx').val();
        if (isNumeric(val)) {     
        }
        else {

            alert('not number');
        }
    });
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}