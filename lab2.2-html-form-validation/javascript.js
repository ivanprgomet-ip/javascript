var errorDiv = $('#error');
var submit = $('#submit');
var age = $('#age');
var result = $('#hiddenText');
var form = $('#form');

submit.on("click", function (e) {

    errorDiv.html("");
    errorDiv.css('background-color', "");
    result.css('visibility', 'hidden');

    if (age.val() < 1 || age.val() > 110) {
        errorDiv.html(age.val() + " is not a valid age!");
        errorDiv.css('background-color', "#FFA5A5");
    } else {
        var newAge = age.val() - 10;
        form.css('visibility', 'hidden');
        result.css('visibility', '');
        result.css('background-color', '#BEF2A4');
        result.val(
            $('#username').val() + "\n" +
            $('#firstname').val() + "\n" +
            $('#lastname').val() + "\n" +
            $('#phone').val() + "\n" +
            $('#city').val() + "\n" +
            age.val() + "\n" +
            "Ten years ago you were " + newAge + " years old!"
        );

    };
});