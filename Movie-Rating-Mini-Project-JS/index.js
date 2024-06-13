const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inputBox");


//Function to fetch movie details using api
const getMovieInfo = async (movie)=>{
    inputBox.value = "";
    try{
    const myAPIKey = '261fcc6a';
    const url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`;
    
    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Unable to fetch movie data!!!");
    }

    const data = await response.json();
    
    showMovieData(data);    //2
    console.log(data)
    }
    catch(error){
        showErrorDetail('No Movie Found!!!')
    }
}

//Function to show maovie data on screen
const showMovieData = (data)=>{
    
    //extract data from getMovieInfo() and destructuring from data object
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;
    
    const movieElement = document.createElement("div");
    movieContainer.innerHTML = "";
    movieContainer.classList.remove("no-background");
    movieElement.classList.add("movie-info");
    movieElement.innerHTML = `<h2>${Title}</h2>
                              <p><strong>Rating : &#11088</strong>${imdbRating}</p>`
    
    const movieGenreElement = document.createElement("div");
    movieGenreElement.classList.add("movie-genre");
    Genre.split(",").forEach(elem =>{
        const p = document.createElement("p");
        p.innerText = elem;
        movieGenreElement.appendChild(p);
    })
    movieElement.append(movieGenreElement);

    movieElement.innerHTML += `<p><strong>Released Date : </strong>${Released}</p>
                              <p><strong>Duration : </strong>${Runtime}</p>
                              <p><strong>Cast : </strong>${Actors}</p>
                              <p><strong>Plot : </strong>${Plot}</p>`



    //Creating movie poster

    const moviePosterElement = document.createElement("div");
    moviePosterElement.classList.add("movie-poster");
    moviePosterElement.innerHTML = `<img src="${Poster}" />`


    movieContainer.appendChild(moviePosterElement);
    movieContainer.appendChild(movieElement);

}

//handle error
const showErrorDetail = (message)=>{
    movieContainer.innerHTML = `<h2>${message}</h2>`
        const h2 = document.querySelector('.movie-container h2');
        h2.style.color = 'red';
}

//Adding event listener to submit button
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if(movieName !== ""){
        showErrorDetail("Getting Movie Information...")
        setTimeout(()=>{
            getMovieInfo(movieName);    //1
        },1000)
        
    }else{
        showErrorDetail('Enter Movie name to get movie information!!!')
    }
});

