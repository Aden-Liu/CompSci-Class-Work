import { tmdbKey } from "./key.js";

async function getData(url) {
  return (await axios.get(url)).data;
}

function createMovieTile(id, poster, title, releaseDate, synopsis, director, cast, rating, studio, ageRating) {
    const tile = document.createElement("div");
    const image = document.createElement("img");
    const summary = document.createElement("div");
}