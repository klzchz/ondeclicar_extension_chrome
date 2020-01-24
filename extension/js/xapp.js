
    
$('#title').append('This Is Us');

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
