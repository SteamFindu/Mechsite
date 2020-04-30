$("#mainform").submit(function(event){
    event.preventDefault();
    var postUrl = $(this).attr("action"); //get form action url
    var requestMethod = $(this).attr("method"); //get form GET/POST method
    var formData = $(this).serialize(); //Encode form elements for submission

    $.ajax({
        url : postUrl,
        type: requestMethod,
        data : formData
    }).done(function(response){ //
        $("#server-results").html(response);
    });
});