let page = document.getElementById("movie");
let choices = [
  75612, 157336, 406759, 506072, 158852, 696806, 588228, 286217, 412656, 419704,
];

function getDetails() {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${
      choices[document.getElementById("movies").selectedIndex]
    }?api_key=186585b7b6aff9c8ea3b6e64e18c88f0&language=en-US&append_to_response=videos`,
  })
    .then((result) => {
      console.log(result);
      createMovieTile(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createMovieTile(result) {
  let title = document.createElement("h1");
  let poster = document.createElement("img");
  let date = document.createElement("h2");
  let synopsis = document.createElement("p");
  let budget = document.createElement("h2");
  let runtime = document.createElement("h2");
  let popularity = document.createElement("h3");
  let revenue = document.createElement("h3");
  let tagline = document.createElement("h3");
  let trailer = document.createElement("iframe");
  title.innerHTML = `${result.data.title}`;
  poster.src = `https://image.tmdb.org/t/p/w500${result.data.poster_path}`;
  date.innerHTML = `${result.data.release_date}`;
  synopsis.innerHTML = `${result.data.overview}`;
  budget.innerHTML = `${result.data.budget}`;
  runtime.innerHTML = `${result.data.runtime}`;
  popularity.innerHTML = `${result.data.popularity}`;
  revenue.innerHTML = `${result.data.revenue}`;
  tagline.innerHTML = `${result.data.tagline}`;
  trailer.src = `https://www.youtube-nocookie.com/embed/${
    result.data.videos.results.at(0).key
  }`;
  page.appendChild(title);
  page.appendChild(poster);
  page.appendChild(date);
  page.appendChild(synopsis);
  page.appendChild(budget);
  page.appendChild(runtime);
  page.appendChild(popularity);
  page.appendChild(revenue);
  page.appendChild(tagline);
  page.appendChild(trailer);

  console.log(result.data.videos.results.at(0).key);
}

getDetails();
