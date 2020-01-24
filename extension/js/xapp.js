
    
$('#title').append('This is us');

$(".card").hide();

$('body').on('click','#search',function(){
    $(".card").show();
    $("#search-box").hide();
});
    // $.ajax({
    //     type: "method",
    //     url: "url",
    //     data: "data",
    //     dataType: "dataType",
    //     success: function (response) {
            
    //     }
    // });
