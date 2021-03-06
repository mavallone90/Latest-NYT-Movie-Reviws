import nytapi from "./key";

const root = document.querySelector(".site-wrap");
const type = "picks"; // could also be "all"
const movieStuff = `https://api.nytimes.com/svc/movies/v2/reviews/${type}.json?api-key=${nytapi}`;

const just_url = document.querySelector(".API_URL");
just_url.innerHTML = `<a href="${movieStuff}">API</a>`;

// const stuff = document.querySelector(".stuff");
// stuff.innerHTML = movieStuff.map( function(item){return item.status})

// just getting the results in the console
// fetch(movieStuff)
//     .then((response) => response.json())
//     .then((myJson) => console.log(myJson.results));

// passing to function
fetch(movieStuff)
  .then((response) => response.json())
  .then((myJson) => renderStories(myJson));

function renderStories(data) {
  data.results.forEach(function (story) {
    // console.log(story)
    var theArticles = document.createElement("div");
    theArticles.className = "movietalk";
    theArticles.innerHTML = `<img src="${
      story.multimedia.src
    }" alt="oops"></img>
            <div>
                <h2><a href="${story.link.url}">${
      story.display_title ? story.display_title : "uhhhh idk"
    }</a></h2>
                <h3>Review By ${story.byline}</h3>
                <h3>Opening ${
                  story.opening_date ? story.opening_date : "N/A"
                }</h3>
            </div>`;
    // console.log(theArticles);
    just_url.prepend(theArticles);
  });
}
