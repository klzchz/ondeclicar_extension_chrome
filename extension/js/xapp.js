
const url  = "http://www.omdbapi.com/?apikey=6fd6c25e";


$('#title').append('This Is Us');

$(".card").hide();

$('body').on('click','#search',function(){
    let data = $('#serie').val();
    
    $(".card").show();
    

    axios.get(`${url}&t=${data}`)
        .then((result)=>{
            $("#search-box").hide();
            alert(result.Body.Title);
        })
        .catch((result) => {
            console.log(result);
        }).finally(function(){
                console.log("Terminou a requisição")
        });
});
    // $.ajax({
    //     type: "method",
    //     url: "url",
    //     data: "data",
    //     dataType: "dataType",
    //     success: function (response) {
            
    //     }
    // });
