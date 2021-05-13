async function getMovieTitles(substr) {
    let url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr;
    let response = await fetch(url);
    let data = await response.json();
    let movies = data.data;

    let movieTitles = [];

    movies.map((m) => {
        movieTitles.push(m.Title);
    })

    if (data.total_pages > 1) {

        for (let i = 2; i <= data.total_pages; i++) {
            let url2 = "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr + "&page=" + i;
            let response2 = await fetch(url2);
            let data2 = await response2.json();
            let movies2 = data2.data;

            movies2.map((m) => {
                movieTitles.push(m.Title);
            })
        }  
    } else {
       let sortedMovies1 = movieTitles.sort().join("\n");
       console.log(sortedMovies1);
    }

    let sortedMovies2 = movieTitles.sort().join("\n");
    console.log(sortedMovies2);
}

getMovieTitles("spiderman")