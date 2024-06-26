const movies = [{
        "title": "Ben & Gunnar",
        "length": "58 min",
        "genre": "Comedy, Drama",
        "description": "A 1985 Bruce Springsteen concert is the beginning of a beautiful male friendship.",
        "released": "1999",
        "image": "https://m.media-amazon.com/images/M/MV5BYjc0ZWIxYWEtZmI1Yi00ZjE2LWI3N2YtNjQ2Y2M4OGEyOTk3XkEyXkFqcGdeQXVyMTMwOTMzNzU@._V1_UY209_CR10,0,140,209_AL_.jpg"
    },
    {
        "title": "Mitt liv som hund",
        "length": "101 min",
        "genre": "Drama, Comedy",
        "description": "In the late '50s, young Ingemar learns a lot about life and himself when he is sent away from his sick mother to live with his aunt and uncle in a town full of eccentrics.",
        "released": "1985",
        "image": "https://m.media-amazon.com/images/M/MV5BNjQzYmFjZTUtMzU3NC00ZWYyLTkzNWItMWQ4MWE4YmZlMmJhXkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_UY209_CR3,0,140,209_AL_.jpg"
    },
    {
        "title": "Så som i himmelen",
        "length": "133 min",
        "genre": "Comedy, Drama",
        "description": "A famous international conductor returns to his small childhood town in Sweden for early retirement. He's asked to help with the church choir. He affects the lives of all in the choir.",
        "released": "2004",
        "image": "https://m.media-amazon.com/images/M/MV5BN2FmNGQ2MDAtYmJhYi00Y2RmLWE2NTAtZjMyZDg1ZTNmOTMyXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
        "title": "Fyra nyanser av brunt",
        "length": "192 min",
        "genre": "Comedy, Drama",
        "description": "An eccentric millionaire dies at a manor in Dalarna in Sweden, leaving behind three sons and a mistress. One of four parallel stories about parents and children. Four sides of Sweden. Four shades of brown.",
        "released": "2004",
        "image": "https://m.media-amazon.com/images/M/MV5BMTIxMjYxNjg1OV5BMl5BanBnXkFtZTcwMTQ0MjA0MQ@@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
        "title": "Körkarlen",
        "length": "107 min",
        "genre": "Drama, Fantasy, Horror",
        "description": "On New Year's Eve, the driver of a ghostly carriage forces a drunken man to reflect on his selfish, wasted life.",
        "released": "1921",
        "image":"https://m.media-amazon.com/images/M/MV5BZDJjMzU4N2MtZDkxNi00YmRkLThkZjgtYzRlNzNlYjExNzAwXkEyXkFqcGdeQXVyNzQxNDExNTU@._V1_UX140_CR0,0,140,209_AL_.jpg"
    },
    {
        "title": "Häxan",
        "length": "87 min",
        "genre": "Documentary, Fantasy, Horror",
        "description": "Fictionalized documentary showing the evolution of witchcraft, from its pagan roots to its confusion with hysteria in Eastern Europe.",
        "released": "1922",
        "image":"https://m.media-amazon.com/images/M/MV5BNGJjOWY1NDUtZGEyZC00Y2VmLWIzZWUtZDRmODYwYmQzN2VmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_UY209_CR2,0,140,209_AL_.jpg"
    }
]

function renderAllMovies() {
    htmlString = "";
    for (i = 0; i < movies.length; i++) {
        htmlString += `
        <div class="card">
        <div class="card-left">
          <img alt="${movies[i].title}"
            src="${movies[i].image}">
        </div>
        <div class="card-right">
          <h2>${movies[i].title}</h2>
          <span class="year">${movies[i].released}</span>
          <span class="length">${movies[i].length}</span>
          <span class="genre">${movies[i].genre}</span>
          <p>${movies[i].description}</p>
        </div>
      </div>
        `
    }
    document.getElementById("movieList").innerHTML = htmlString;
}

function sortAtoZ() {
    const data = movies.sort((a, b) => a.title.localeCompare(b.title));
    htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += `
        <div class="card">
        <div class="card-left">
          <img alt="${data[i].title}"
            src="${data[i].image}">
        </div>
        <div class="card-right">
          <h2>${data[i].title}</h2>
          <span class="year">${data[i].released}</span>
          <span class="length">${data[i].length}</span>
          <span class="genre">${data[i].genre}</span>
          <p>${data[i].description}</p>
        </div>
      </div>
        `
    }
    document.getElementById("movieList").innerHTML = htmlString;
}

function sortZtoA() {
    const data = movies.sort((a, b) => b.title.localeCompare(a.title));
    htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += `
        <div class="card">
        <div class="card-left">
          <img alt="${data[i].title}"
            src="${data[i].image}">
        </div>
        <div class="card-right">
          <h2>${data[i].title}</h2>
          <span class="year">${data[i].released}</span>
          <span class="length">${data[i].length}</span>
          <span class="genre">${data[i].genre}</span>
          <p>${data[i].description}</p>
        </div>
      </div>
        `
    }
    document.getElementById("movieList").innerHTML = htmlString;
}

function filter(genre) {
    const data = movies.filter(movie => movie.genre.toLowerCase().includes(genre));
    htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += `
        <div class="card">
        <div class="card-left">
          <img alt="${data[i].title}"
            src="${data[i].image}">
        </div>
        <div class="card-right">
          <h2>${data[i].title}</h2>
          <span class="year">${data[i].released}</span>
          <span class="length">${data[i].length}</span>
          <span class="genre">${data[i].genre}</span>
          <p>${data[i].description}</p>
        </div>
      </div>
        `
    }
    document.getElementById("movieList").innerHTML = htmlString;

}

document.querySelector('.hamburger').addEventListener('click', function () {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

document.getElementById('submit').addEventListener('click', function() {
    const searchValue = document.getElementById("search").value;
    confirm(`you have searched for ${searchValue}`);
});

document.getElementById('sort').addEventListener('change', function() {
    const value = document.getElementById('sort').value;
    if (value === 'aToZ') {
        sortAtoZ();
    }
    if(value === 'zToA') {
        sortZtoA();
    }
});

document.getElementById('filter').addEventListener('change', function() {
    const value = document.getElementById('filter').value;
    if(value !== '') {
        filter(value);
    }
})
renderAllMovies();