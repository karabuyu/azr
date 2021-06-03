const api_Url = 'https://karabuyu.github.io/azr/cards.json';
const newGames = document.getElementById("new-games");
const lowOnSpace = document.getElementById("low-on-space");


const games = fetch(api_Url).then(response => response.json())
.then(data => {
    data.new_games.forEach(element => {
        let eachList = `<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 px-2"><div class="game-div"><div class="image"><img class="img-fluid" src="img/${element.img_src}" alt=""></div><p class="title"><a href="#">${element.game}</a></p><p class="publisher"><a href="#">${element.publisher}</a></p><div class="stars star-${element.stars}"><img src="img/stars-full.png"></div></div></div></div></div>`;
        newGames.innerHTML += eachList;
    });
    data.low_on_spaces.forEach(element => {
        let eachList = `<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 px-2"><div class="game-div"><div class="image"><img class="img-fluid" src="img/${element.img_src}" alt=""></div><p class="title"><a href="#">${element.game}</a></p><p class="publisher"><a href="#">${element.publisher}</a></p><div class="stars star-${element.stars}"><img src="img/stars-full.png"></div></div></div></div></div>`;
        lowOnSpace.innerHTML += eachList;
    });
})
.catch(error => {
    $('.section-content').each(function() {
        $(this).html('<p class="m-2">No games found :(</p>')
    });
});