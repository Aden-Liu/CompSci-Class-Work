import { apiKey } from "./key.js";
let page = document.getElementById("movie");
let choices = [
  75612, 157336, 406759, 506072, 158852, 696806, 588228, 286217, 412656, 419704,
];

document.getElementById("get-button").addEventListener("click", getDetails);

function getDetails() {
  axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/${
      choices[document.getElementById("movies").selectedIndex]
    }?api_key=${apiKey}&language=en-US&append_to_response=videos`,
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
  document.getElementById("movie").innerHTML = "";
  let title = document.createElement("h1");
  let poster = document.createElement("img");
  let date = document.createElement("h3");
  let synopsis = document.createElement("p");
  let budget = document.createElement("h3");
  let runtime = document.createElement("h3");
  let popularity = document.createElement("h3");
  let revenue = document.createElement("h3");
  let tagline = document.createElement("p");
  let voteAverage = document.createElement("h3");
  let voteCount = document.createElement("h3");
  let trailer = document.createElement("iframe");

  title.innerHTML = `${result.data.title}`;
  title.setAttribute("class", "details-box");
  title.setAttribute("id", "title-box");
  poster.src = `https://image.tmdb.org/t/p/w500${result.data.poster_path}`;
  poster.setAttribute("id", "movie-poster");
  date.innerHTML = `Released: ${result.data.release_date}`;
  date.setAttribute("class", "info-box");
  synopsis.innerHTML = `${result.data.overview}`;
  synopsis.setAttribute("class", "info-box");
  budget.innerHTML = `Budget: $${result.data.budget}`;
  budget.setAttribute("class", "info-box");
  revenue.innerHTML = `Revenue: $${result.data.revenue}`;
  revenue.setAttribute("class", "info-box");
  runtime.innerHTML = `Runtime: ${result.data.runtime}  Minutes`;
  runtime.setAttribute("class", "info-box");
  popularity.innerHTML = `Popularity: ${result.data.popularity}`;
  popularity.setAttribute("class", "info-box");
  tagline.innerHTML = `"${result.data.tagline}"`;
  tagline.setAttribute("class", "info-box");
  voteAverage.innerHTML = `Rating: ${result.data.vote_average}/10`;
  voteAverage.setAttribute("class", "info-box");
  voteCount.innerHTML = `# of Ratings: ${result.data.vote_count}`;
  voteCount.setAttribute("class", "info-box");

  let trailerData = result.data.videos.results.filter((trailer) => {
    return trailer.type === "Trailer";
  });

  trailer.src = `https://www.youtube.com/embed/${trailerData.at(0).key}`;
  trailer.setAttribute("id", "trailer-box");

  page.appendChild(poster);
  page.appendChild(title);
  page.appendChild(date);
  page.appendChild(synopsis);
  page.appendChild(tagline);
  page.appendChild(budget);
  page.appendChild(runtime);
  page.appendChild(popularity);
  page.appendChild(revenue);
  page.appendChild(voteAverage);
  page.appendChild(voteCount);
  page.appendChild(trailer);
}

getDetails();
