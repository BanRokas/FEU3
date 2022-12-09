const data = {
  title: "Search movies",
  selector: ["IMDB is higher than", "IMDB is lower than", "Actor", "Director", "Name", "Released before year", "Released after year", "Type"],
  errorMessage: "Sorry, we didn't found any movies matching your search input.",
  movies: [
    {
      aktoriai: ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Gwynth Paltrow', 'Leslie Bibb'],
      IMDB: 7.9,
      leidimoMetai: 2008,
      pavadinimas: "IronMan",
      rezisierius: "Jon Favreau",
      tipas: ['Action', 'Adventure', 'Sci-Fi'],
      trukme: 126,
      paveiksliukas: "https://pics.filmaffinity.com/Ironman-108960873-large.jpg",
      aprasymas: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
    }, {
      aktoriai: ['Chris Hemsworth', 'Natalie Portman', 'Tom Hiddleston', 'Anthony Hopkins', 'Stellan Skarsgard'],
      IMDB: 7,
      leidimoMetai: 2011,
      pavadinimas: "Thor",
      rezisierius: "Kenneth Branagh",
      tipas: ['Action', 'Adventure', 'Fantasy'],
      trukme: 115,
      paveiksliukas: "https://m.media-amazon.com/images/I/91P1wWqX63L._SL1500_.jpg",
      aprasymas: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."

    }, {
      aktoriai: ['Sean Connery', 'Naseeruddin Shah', 'Peta Wilson', 'Tony Curran', 'Stuart Townsend'],
      IMDB: 5.8,
      leidimoMetai: 2003,
      pavadinimas: "The League of Extraordinary Gentlemen",
      rezisierius: "Stephen Norrington",
      tipas: ['Action', 'Adventure', 'Fantasy'],
      trukme: 110,
      paveiksliukas: "https://i.pinimg.com/736x/fe/18/28/fe1828d116d1eb99f8eebe36873f786c.jpg",
      aprasymas: "In an alternate Victorian Age world, a group of famous contemporary fantasy, science fiction, and adventure characters team up on a secret mission."
    }, {
      aktoriai: ['Tobey Maguire', 'Willem Dafoe', 'Kirsten Dunst', 'James Franco', 'Cliff Robertson'],
      IMDB: 7.3,
      leidimoMetai: 2002,
      pavadinimas: "SpiderMan",
      rezisierius: "Sam Raimi",
      tipas: ['Action', 'Adventure', 'Sci-Fi'],
      trukme: 121,
      paveiksliukas: "https://m.media-amazon.com/images/I/51kzFX8Zr8L._AC_.jpg",
      aprasymas: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family."
    }, {
      aktoriai: ['Ryan Reynolds', 'Karan Soni', 'Ed Skrein', 'Michael Benyaer', 'Brianna Hildebrand'],
      IMDB: 8,
      leidimoMetai: 2016,
      pavadinimas: "Deadpool",
      rezisierius: "Tim Miller",
      tipas: ['Action', 'Adventure', 'Comedy'],
      trukme: 108,
      paveiksliukas: "https://chickflickingreviews.files.wordpress.com/2016/02/deadpool-valentinesday_.jpg",
      aprasymas: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks."
    }, {
      aktoriai: ['Hugh Jackman', 'Kate Beckinsale', 'Richard Roxburgh', 'David Wenham', 'Shuler Hensley'],
      IMDB: 6.1,
      leidimoMetai: 2004,
      pavadinimas: "Van Helsing",
      rezisierius: "Stephen Sommers",
      tipas: ['Action', 'Adventure', 'Fantasy'],
      trukme: 131,
      paveiksliukas: "https://m.media-amazon.com/images/I/71DHEagosIL._AC_SY679_.jpg",
      aprasymas: "The famed monster hunter is sent to Transylvania to stop Count Dracula, who is using Dr. Frankenstein's research and a werewolf for nefarious purposes."
    }, {
      aktoriai: ['Hugh Jackman', 'Patrick Stewart', 'Ian McKellen', 'Famke Janssen', 'James Marsden'],
      IMDB: 7.4,
      leidimoMetai: 2000,
      pavadinimas: "X-Men",
      rezisierius: "Bryan Singer",
      tipas: ['Action', 'Adventure', 'Sci-Fi'],
      trukme: 104,
      paveiksliukas: "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      aprasymas: "In a world where mutants (evolved super-powered humans) exist and are discriminated against, two groups form for an inevitable clash: the supremacist Brotherhood, and the pacifist X-Men."
    }, {
      aktoriai: ['Paul Rudd', 'Michael Douglas', 'Evangeline Lilly', 'Corey Stoll', 'Bobby Cannavale'],
      IMDB: 7.3,
      leidimoMetai: 2015,
      pavadinimas: "Ant-Man",
      rezisierius: "Peyton Reed",
      tipas: ['Action', 'Adventure', 'Comedy'],
      trukme: 117,
      paveiksliukas: "https://m.media-amazon.com/images/I/71E9abm2ayL._AC_SL1111_.jpg",
      aprasymas: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
    }, {
      aktoriai: ['Hera Hilmar', 'Robert Sheehan', 'Hugo Weaving', 'Jihae', 'Ronan Raftery'],
      IMDB: 6.1,
      leidimoMetai: 2018,
      pavadinimas: "Mortal Engines",
      rezisierius: "Christian Rivers",
      tipas: ['Action', 'Adventure', 'Fantasy'],
      trukme: 128,
      paveiksliukas: "https://m.media-amazon.com/images/I/91qiKWG+CrL._AC_SY741_.jpg",
      aprasymas: "In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy."
    }, {
      aktoriai: ['Jesse Eisenberg', 'Woody Harrelson', 'Emma Stone', 'Abigail Breslin'],
      IMDB: 7.6,
      leidimoMetai: 2009,
      pavadinimas: "Zombieland",
      rezisierius: "Ruben Fleischer",
      tipas: ['Adventure', 'Comedy', 'Horror'],
      trukme: 98,
      paveiksliukas: "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_.jpg",
      aprasymas: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search of the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America."
    }, {
      aktoriai: ['Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes', 'Gary Oldman'],
      IMDB: 8.2,
      leidimoMetai: 2005,
      pavadinimas: "Batman Begins",
      rezisierius: "Christopher Nolan",
      tipas: ['Action', 'Adventure'],
      trukme: 140,
      paveiksliukas: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      aprasymas: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
    }, {
      aktoriai: ['Sean Astin', 'Orlando Bloom', 'Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
      IMDB: 8.8,
      leidimoMetai: 2001,
      pavadinimas: "The Lord of the Rings: The Fellowship of the Ring",
      rezisierius: "Peter Jackson",
      tipas: ['Action', 'Adventure', 'Drama'],
      trukme: 178,
      paveiksliukas: "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_SY741_.jpg",
      aprasymas: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
    }, {
      aktoriai: ['Ian McKellen', 'Martin Freeman', 'Richard Armitage', 'Ken Stott', 'Graham McTavish'],
      IMDB: 7.8,
      leidimoMetai: 2012,
      pavadinimas: "The Hobbit: An Unexpected Journey",
      rezisierius: "Peter Jackson",
      tipas: ['Fantasy', 'Adventure'],
      trukme: 169,
      paveiksliukas: "https://m.media-amazon.com/images/I/71E9rZRPOLL._AC_SL1333_.jpg",
      aprasymas: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug."
    }
  ]
}