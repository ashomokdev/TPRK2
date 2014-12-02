//$(document).ready(function () {
//    $("#buttonPlay").click(function () {
//        var val;
//        var val2 = ($('#inputx').val());

//        if (($('#inputx').val().length > 0))
//        {
//            val = $('#inputx').val();
//        }
        
//        else if (($('#inputxOk').val().length > 0)) {
//            val = $('#inputxOk').val();
//        }

//        else if (($('#inputxError').val().length > 0)) {
//            val = $('#inputxError').val();
//        }

//        $('#inputx').hide();
//        $('#inputxOk').hide();
//        $('#inputxError').hide();

//        if (isNumeric(val)) {
//            $('#inputxOk').show();
//            $('#inputxOk').text = $('#inputx').text;

//        }
//        else {
//            $('#inputxError').show();
//            $('#inputxError').text = $('#inputx').text;
//        }
//    });
//});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

$(document).ready(function () {
    $("#buttonPlay").click(function () {
        var val = ($('#inputx').val());
        if (isNumeric(val)) {
            $("#inputxclass").attr("class", "form-group has-success has-feedback");
            $("#inputxicon").attr("class", "glyphicon glyphicon-ok form-control-feedback");

        }
        else
        {
            $("#inputxclass").attr("class", "form-group has-error has-feedback");
            $("#inputxicon").attr("class", "glyphicon glyphicon-remove form-control-feedback");
        }
    });
});
