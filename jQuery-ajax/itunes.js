
document.querySelector('.btn').addEventListener('click', function(){

    $(document).ready(function(){

        let searchInput = document.getElementById("searchInput").value;



        let endpoint = 'https://itunes.apple.com/search';
        let params = {
            term: searchInput,
            limit: 12

        }
        document.getElementById('searchResults').innerHTML = '';
        this.innerText = '';

        $.get(
            endpoint,
            params,
            function(data){
                data.results.forEach(artistInfo => {
                    let newCard = document.createElement('div');
                    newCard.classList.add('card', 'col-3', 'my-2', 'mx-2');
                    newCard.style.backgroundColor = 'red';


                    let artistName = document.createTextNode(`Artist Name: ${artistInfo.artistName}`);
                    let breakpoint1 = document.createElement('br');
                    let trackName = document.createTextNode(`Track Name: ${artistInfo.trackName}`);
                    let breakpoint2 = document.createElement('br');
                    let albumName = document.createTextNode(`Album Name: ${artistInfo.collectionName}`);
                    let breakpoint3 = document.createElement('br');
                    let genre = document.createTextNode(`Genre: ${artistInfo.primaryGenreName}`);




                    newCard.appendChild(artistName);
                    newCard.appendChild(breakpoint1);
                    newCard.appendChild(trackName);
                    newCard.appendChild(breakpoint2);
                    newCard.appendChild(albumName);
                    newCard.appendChild(breakpoint3);
                    newCard.appendChild(genre);




                    document.getElementById('searchResults').appendChild(newCard);


                })
            },
            'json'
        )
        document.getElementById("searchInput").value = '';

    })

})


//
// create a new card for each result in the data array, you can modify the code as follows:
//
//     HTML:
//         ```html
// Add a container where the search results will be displayed -->
// id="searchResults"></div>
// ```
//
// JavaScript:
//     ```javascript
// document.querySelector('.btn').addEventListener('click', function() {
// $(document).ready(function() {
// let searchInput = document.getElementById("searchInput").value;
// let endpoint = 'https://itunes.apple.com/search';
// let params = {
// term: searchInput,
// limit: 12
// };
// $.get(endpoint, params, function(data) {
// data.results.forEach(artistInfo => {
// // Create a new card element for each result
// let card = document.createElement('div');
// card.classList.add('card');
//
// // Add the artist name and track name to the card
// let cardContent = document.createTextNode(`Artist Name: ${artistInfo.artistName}, ${artistInfo.trackName}`);
// card.appendChild(cardContent);
//
// // Append the card to the searchResults container
// document.getElementById('searchResults').appendChild(card);
// });
// }, 'json');
// });
// });
// ```
//
// Make sure to add appropriate CSS styles for the card element to make it visually appealing.
//
