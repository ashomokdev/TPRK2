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
        else {
            $("#inputxclass").attr("class", "form-group has-error has-feedback");
            $("#inputxicon").attr("class", "glyphicon glyphicon-remove form-control-feedback");
        }
    });
});

$(document).ready(function () {
    $("#buttonPlay").click(function (event) {
        event.preventDefault();
        var form = $(this);
        $.ajax({
            url: form.attr('action'),
            type: "POST",
            data: form.serialize(),
            success: function (data) {
                alert(data);
            

                //$("#FormContainer").html(data);
                //$.validator.unobtrusive.parse("form");
            },
            //error: function (jqXhr, textStatus, errorThrown) {
            //    alert("Error '" + jqXhr.status + "' (textStatus: '" + textStatus + "', errorThrown: '" + errorThrown + "')");
            //},
            //complete: function () {
            //    $("#ProgressDialog").dialog("close");
            //}
        });

    });
});
