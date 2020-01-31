
const url  = "http://www.omdbapi.com/?apikey=6fd6c25e";


$('#title').append('This Is Us');

$("#loader-wrapper").removeAttr("style").hide();
// $('#loader-wrapper').attr({display:none});
$(".card").hide();

$('body').on('click','#search',function(e){
    e.preventDefault();
    
    $("#loader-wrapper").show();
    let data = $('#serie').val();
    
    
    
    if(data == '' ||!data)
         data = 'This+Is+Us';

    axios.get(`${url}&t=${data}`)
        .then((result)=>{

            $('#title').html('');
            $('#poster').attr('src','');
            $('#description').html('');
            $('#imdb').html('');
            $('#global').html('');
          
            $('#title').append(result.data.Title);
            $('#poster').attr('src',result.data.Poster);
            $('#description').append(result.data.Plot);
            $('#imdb').append(result.data.imdbRating);
            $('#global').append(result.data.Ratings[0].Value);
            // alert(result.data.Title);
            // conosole.log(response)
        })
        .catch((result) => {
            console.log(result);
        })
        .finally(()=>{
            $("#loader-wrapper").removeAttr("style").hide()
            $("#search-box").hide();
            $(".card").show();
    });
});

$('#clean').on('click',function(){
    $('#title').html('');
    $('#poster').attr('src','');
    $('#description').html('');
    $('#imdb').html('');
    $('#global').html('');

    $("#search-box").show();
    $(".card").hide();
  

});
    // $.ajax({
    //     type: "method",
    //     url: "url",
    //     data: "data",
    //     dataType: "dataType",
    //     success: function (response) {
            
    //     }
    // });
