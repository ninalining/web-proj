const movies = [
    {
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
        "title": "Ben & Gunnar",
        "length": "58 min",
        "genre": "Comedy, Drama",
        "description": "A 1985 Bruce Springsteen concert is the beginning of a beautiful male friendship.",
        "released": "1999"
    },
    {
        "title": "Ben & Gunnar",
        "length": "58 min",
        "genre": "Comedy, Drama",
        "description": "A 1985 Bruce Springsteen concert is the beginning of a beautiful male friendship.",
        "released": "1999"
    }
]

document.querySelector('.hamburger').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });