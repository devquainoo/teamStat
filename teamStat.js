const team = {
  _players: [
    {
      firstName: 'Lionel',
      lastName: 'Messi',
      age: 34,
    },
    {
      firstName: 'Sergio',
      lastName: 'Busquets',
      age: 33,
    },
    {
      firstName: 'Antoinne',
      lastName: 'Griezman',
      age: 30,
    },
  ],
  _games: [
    {
      opponent: 'Madrid',
      teamPoints: 3,
      opponentPoints: 0,
    },
    {
      opponent: 'Juventus',
      teamPoints: 3,
      opponentPoints: 0,
    },
    {
      opponent: 'Chelsea',
      teamPoints: 3,
      opponentPoints: 0,
    },
  ],
  get players (){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    const player = {
      firstName,
      lastName,
      age
    }
    this._players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game);
  }
  
};

team.addPlayer('Steph', 'Curry' ,28);
team.addPlayer('Lisa ', 'Leslie ' ,44);
team.addPlayer('Bugs  ', 'Bunny  ' ,76);
console.log(team.players);

team.addGame('Atletico Madrid', 1, 1);
team.addGame('PSG', 3, 1);
team.addGame('Manchester United', 3, 1);
console.log(team.games);