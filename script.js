
fetch(apiUrlPop)
    .then(response => response.json())
    .then(data =>{
        const movies = data.results;
        const popContainer = document.querySelector('#popular')
        const hero = document.querySelector('.hero')
        hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${movies[0].backdrop_path}')`;
        const heroText = document.createElement('div')
        heroText.classList.add('hero-text')
        const h2 = document.createElement('h2');
        h2.textContent = movies[0].title;
        const overview = document.createElement('p');
        overview.textContent = movies[0].overview;

        heroText.append(h2, overview)
        hero.append(heroText)

        if(movies.length !== 0){
        movies.forEach(movie => {
            const newCard = createCard(movie)
            popContainer.append(newCard)
        });
    }else{
        console.log('Det finns ingen data');
    }
    }).catch(error => console.log(`Detta är felet ${error}`))

    fetch(apiUrlTv)
    .then(response => response.json())
    .then(data =>{
        const series = data.results;
        const tvContainer = document.querySelector('#tv')

        if(series.length !== 0){
        series.forEach(serie => {
            const newCard = createCardTv(serie)
            tvContainer.append(newCard)
        });
    }else{
        console.log('Det finns ingen data');
    }
    }).catch(error => console.log(`Detta är felet ${error}`))

    function createCard(movie){
        const filmCard = document.createElement('div')
        filmCard.classList.add('movie-card')

        const filmImg = document.createElement('div')
        filmImg.classList.add('overlay')

        const moviePic = document.createElement('div')
        filmImg.classList.add('movie-pic')

        const h3 = document.createElement('h3')
        h3.textContent = movie.title

        const p = document.createElement('p')
        p.textContent = movie.overview

        const img = document.createElement('img')
        img.setAttribute('src', `https://image.tmdb.org/t/p/original/${movie.poster_path}`)

        filmImg.append(h3)
        moviePic.append(img)
        filmCard.append(filmImg, moviePic)

filmCard.addEventListener('click', () => {
    // console.log(`Du klickade på ${movie.title}`);
    const hero = document.querySelector('.hero')

    hero.innerHTML= ''

    hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`;
    const heroOverlay = document.createElement('div')
    heroOverlay.classList.add('hero-overlay')
    const heroText = document.createElement('div')
    heroText.classList.add('hero-text')
    const h2 = document.createElement('h2');
    h2.textContent = movie.title;


    const maxLength = 300;
    const movieOverviewTrim = movie.overview.length > maxLength ?
            movie.overview.substring(0, maxLength) + '...' :
            movie.overview;
    const overview = document.createElement('p');
    overview.textContent = movieOverviewTrim;

    heroText.append(h2, movieOverviewTrim)
    hero.append(heroOverlay, heroText)
});
        return filmCard
    }

    function createCardTv(serie){
        const filmCard = document.createElement('div')
        filmCard.classList.add('movie-card')

        const filmImg = document.createElement('div')
        filmImg.classList.add('overlay')

        const moviePic = document.createElement('div')
        filmImg.classList.add('movie-pic')

        const h3 = document.createElement('h3')
        h3.textContent = serie.name

        const p = document.createElement('p')
        p.textContent = serie.overview

        const img = document.createElement('img')
        img.setAttribute('src', `https://image.tmdb.org/t/p/original/${serie.poster_path}`)

        filmImg.append(h3)
        moviePic.append(img)
        filmCard.append(filmImg, moviePic)

        filmCard.addEventListener('click', () => {
            // console.log(`Du klickade på ${movie.title}`);
            const hero = document.querySelector('.hero')
            hero.innerHTML= ''
            hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${serie.backdrop_path}')`;
            const heroOverlay = document.createElement('div')
            heroOverlay.classList.add('hero-overlay')
            const heroText = document.createElement('div')
            heroText.classList.add('hero-text')
            const h2 = document.createElement('h2');
            h2.textContent = serie.name;

            const maxLength = 300;
            const serieOverviewTrim = serie.overview.length > maxLength ?
                    serie.overview.substring(0, maxLength) + '...' :
                    serie.overview;
            const overview = document.createElement('p');
            overview.textContent = serieOverviewTrim;
        
            heroText.append(h2, serieOverviewTrim)
            hero.append(heroOverlay, heroText)
        });


        return filmCard
    }


