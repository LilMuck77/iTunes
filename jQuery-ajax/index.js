$(document).ready(function(){

    let endpoint = 'https://www.googleapis.com/books/v1/volumes';
    let params = {
        q: 'bees',
        filter: 'full',
        maxResults: 12
    }

    $.get(
        endpoint,
        params,
        function(data){
           data.items.forEach(item => {
               $('#result').append(`<h3>${item.volumeInfo.title}</h3>`);
              if(item.volumeInfo.authors) {
                  $('#result').append(`<p>By: ${item.volumeInfo.authors.join(', ')}</p>`);
              }
              // let something = a ?? '';
               $('#result').append(`<p>By: ${item.volumeInfo?.authors?.join(', ') ?? 'N/A'}</p>`);

               $('#result').append(`<img src="${item.volumeInfo?.imageLinks?.thumbnail}"<hr>`)

           })
        },
        'json'
    )
    //for itunes assignment set limit to 12 21 or something

})