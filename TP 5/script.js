const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    }) 
}


function showMovies(data) {
    main.innerHTML=""

    
    data.forEach(movie => {
        const {title,poster_path,vote_average,overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">
          <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getColor(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
              <h3>Overview</h3>
              ${overview}
          </div>
          `

        main.appendChild(movieEl);
    });
}

let nombre_de_pages=1;

window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
    let page = API_URL+`&page=1`;
    if (scrollTop+clientHeight>scrollHeight-1) {
        let page1 = API_URL+`&page=`+nombre_de_pages++;
        loading();
        setTimeout(() => {
            getMovies(page1);
        }, 2000);
    }
})

function loading() {
    const loading = document.createElement('div');
    loading.className="loading";
    const loader = document.createElement('div');
    loader.classList.add('loader');
    main.appendChild(loading);
    loading.appendChild(loader);

    setTimeout(() => {
        loading.style.display='none';
    }, 2000);
}







function getColor(vote){
if (vote>=8) {
    return 'green';
}else if (vote>=5) {
    return 'orange'
}else{
    return 'red';
}
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchItem = search.value;
    if (searchItem) {
        getMovies(searchURL+'&query='+searchItem);
    }else{
        getMovies(API_URL)
    }
})