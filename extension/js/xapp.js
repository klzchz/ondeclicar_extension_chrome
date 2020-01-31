
const url  = "http://www.omdbapi.com/?apikey=6fd6c25e";


// $('#title').append('This Is Us');

$("#loader-wrapper").removeAttr("style").hide();
// $('#loader-wrapper').attr({display:none});
$(".card").hide();

$('body').on('click','#search',function(e){
    e.preventDefault();
    
    $("#loader-wrapper").show();
    let data = $('#serie').val();
    
    if( data == 'Janell Chao' 
        || data == 'Lok Wun Chao'
        || data == 'flango')
    {
        alert("Hit me Up ! I a made this extension for u 😘😘");
        
    }
    
    
    if(data == '' ||!data)
         data = 'This+Is+Us';

    axios.get(`${url}&t=${data}`)
        .then((result)=>{

            $('#title').html('');
            $('#poster').attr('src','');
            $('#description').html('');
            $('#imdb').html('');
            $('#global').html('');

            if(result.Response )
            {
                $('#title').append("This Is Us");
                $('#poster').attr('src',"https://m.media-amazon.com/images/M/MV5BMDM2YTMzMWMtNmFhZi00ZWY4LTk1ZmUtMWExNzg3NDZmMTY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg");
                $('#description').append("A heartwarming and emotional story about a unique set of triplets, their struggles, and their wonderful parents.");
                $('#imdb').append("8.7");
                $('#global').append("8.7/10");
            }
            
            $('#title').append(result.data.Title);
            $('#poster').attr('src',result.data.Poster);
            $('#description').append(result.data.Plot);
            $('#imdb').append(result.data.imdbRating);
            $('#global').append(result.data.Ratings[0].Value);
            // alert(result.data.Title);
            // conosole.log(response)
        })
        .catch((result) => {

            $('#title').append("This Is Us");
            $('#poster').attr('src',"https://m.media-amazon.com/images/M/MV5BMDM2YTMzMWMtNmFhZi00ZWY4LTk1ZmUtMWExNzg3NDZmMTY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg");
            $('#description').append("A heartwarming and emotional story about a unique set of triplets, their struggles, and their wonderful parents.");
            $('#imdb').append("8.7");
            $('#global').append("8.7/10");

            // $('#title').html('');
            // $('#poster').attr('src','');
            // $('#description').html('');
            // $('#imdb').html('');
            // $('#global').html('');
        
            // $("#search-box").show();
            // $(".card").hide();
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
