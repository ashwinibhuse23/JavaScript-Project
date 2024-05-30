window.onload = () => {
    let param = new URLSearchParams(window.location.search);
    let title = param.get('query');
    console.log(title);

    if (title !== null) {
        searchMovie(title);
    } else {
        // console.log("Movie Not Found");
        let divtag = document.createElement('div');
        divtag.className = "col-xl-3";
        let h3tag = document.createElement('h3');
        h3tag.innerText = "Movie Not Found....";
        divtag.append(h3tag);
        document.querySelector(".row").append(divtag);
    }
}

const searchMovie = (title) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${title}&page=1`);




    xhr.send();

    // 4 step
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const movies = JSON.parse(xhr.responseText);
                //console.log(movies);
                if (movies.results.length < 0) {
                    movies.results.forEach((movie) => {
                        console.log(movie);
                        console.log(movie.title);
                        console.log(movie.vote_average);
                        console.log(movie.poster_path);

                        let divtag = document.createElement("div");
                        divtag.className = "col-xl-3";

                        let imgtag = document.createElement("img");
                        imgtag.className = "img-fluid";
                        let h4tag = document.createElement("h4");
                        let ptag = document.createElement("p");

                        imgtag.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        h4tag.innerHTML = movie.title;
                        ptag.innerHTML = `Rating : ${movie.poster_path}`
                        ptag.innerHTML = movie.vote_average;

                        divtag.append(imgtag);
                        divtag.append(h4tag);
                        divtag.append(ptag);

                        document.querySelector(".row").append(divtag);

                    });
                } else {
                    console.log("Not Found");
                    let divtag = document.createElement('div');
                    let h3tag = document.createElement('h3');
                    h3tag.innerText = "Movie Not Found....";
                    divtag.append(h3tag);
                    document.querySelector(".row").append(divtag);
                }

    }else {
        console.log("Error:" + xhr.status);

    }
}
    }
 };


