let card = document.getElementsByClassName('card')

fetch('./assets/data/myMovies.json')
.then((response) => {
    return response.json();
})

.then((datas) => {
    datas.results.forEach(movieObj => {
        document.querySelector('main').innerHTML += `<div class="card">
                                                        <div class="cardDesign">
                                                            <div class="cardFront">
                                                                <div class="cardImg">
                                                                    <img src="${movieObj.poster_path}" alt="${movieObj.original_title}">
                                                                </div>
                                                            </div>
                                        
                                                            <div class="cardBack">
                                                                <div class="cardInfo">
                                                                    <h2 class="p-2">${movieObj.original_title}</h2>
                                                                    <div class="average">${movieObj.vote_average}</div>
                                                                </div>
                                                                <div class="info">
                                                                    <p class="resume">${movieObj.overview}</p> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    `; 
})
});