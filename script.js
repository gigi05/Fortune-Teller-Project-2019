$("button").click(function() {
    var nameBox = $(".name").val();
    var birthdayBox = $(".birthday").val();
    var birthsignBox = $(".sign").val();
    var dreamjobBox = $(".dreamjob").val();
    var cakeBox =$(".cake").val(); 
    
    $(".results").append(" hello " + nameBox + " your birthday is on " + birthdayBox + " your birth sign is a " + birthsignBox + " your futrue dream job will be a " + dreamjobBox + " you can eat " + cakeBox + "  red velvelt cakes a day... WOW " );
    });