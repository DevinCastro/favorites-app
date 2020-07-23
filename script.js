let favoriteGames = ['Zelda', 'League of Legends', 'Bloodborne', 'Monster Hunter', 'Crash Bandicoot', 'Pokemon', 'Maplestory', 'God of War', 'Super Smash', 'Warframe']

let movies = ['Toy Story 4', 'Crazy Rich Asians', 'Braveheart', 'Joker', 'La La Land', 'Wolf of Wallstreet', 'Peanut Butter Falcon', 'Good Boys', 'Space Jam', 'Remember The Titans']

let songs = ['Hotel California', 'California Love', 'California Dreaming', 'California Girls', 'California Sun', 'California Kids', 'California Waiting', 'Going Back To Cali', 'California Nights', 'California Soul']

let foods = ['burger', 'pizza', 'pasta', 'eggs', 'bacon', 'cereal', 'noodles', 'cake', 'cheese', 'crackers']

let sports = ['football', 'baseball', 'basketball', 'soccer', 'gymnastics', 'hockey', 'volleyball', 'tennis', 'swimming', 'running']
// for (i = 0; i < favoriteGames.length; i++) {

//   let gameElem = document.createElement('li')
//   gameElem.className = 'list-group-item'
//   gameElem.textContent = favoriteGames[i]
//   document.getElementById('games').append(gameElem)

//   // document.getElementById(i).textContent = `${favoriteGames[i - 1]}`
// }

const generateFavorites = () => {

  let possibleFavorites = []
  let guaranteedFavorites = []
  let favorites = []

  let length = parseInt(prompt('How many favorites do you want? Choose between 5 and 30'))

  if (length < 5 || length > 30) {
    alert('Please choose a valid lenth')
    return
  }

  if (confirm("Would you like to add movies?")) {
    possibleFavorites = possibleFavorites.concat(movies)
    //  guarantees at least one element
    guaranteedFavorites.push(movies[Math.floor(Math.random() * movies.length)])
  }

  if (confirm("Would you like to add songs?")) {
    possibleFavorites = possibleFavorites.concat(songs)
    guaranteedFavorites.push(songs[Math.floor(Math.random() * songs.length)])

  }

  if (confirm("Would you like to add games?")) {
    possibleFavorites = possibleFavorites.concat(favoriteGames)
    guaranteedFavorites.push(favoriteGames[Math.floor(Math.random() * favoriteGames.length)])


  }

  if (confirm("Would you like to add foods?")) {
    possibleFavorites = possibleFavorites.concat(foods)
    guaranteedFavorites.push(foods[Math.floor(Math.random() * foods.length)])

  }

  if (confirm("Would you like to add sports?")) {
    possibleFavorites = possibleFavorites.concat(sports)
    guaranteedFavorites.push(sports[Math.floor(Math.random() * sports.length)])
  }


  // concat wouldve saved my life on the homework

  for (i = 0; i < length; i++) {
    favorites.push(possibleFavorites[Math.floor(Math.random() * possibleFavorites.length)])
  }

  // This insures we get one of each element
  for (i = 0; i < guaranteedFavorites.length; i++) {
    favorites[i] = guaranteedFavorites[i]
  }

  // join returns an array into a string
  return favorites.join(' ')

}

document.getElementById('genFavs').addEventListener('click', () => {
  let favorites = generateFavorites()

  document.getElementById('favorites').textContent = favorites
})