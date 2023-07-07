const team = {
    _players: [
    {
      firstName: "Mustafa",
      lastName: "Eftekin",
      age: 21
    },
    {
      firstName: "Arda",
      lastName: "Kavakcı",
      age: 21
    },
    {
      firstName: "Mehmet Kaan",
      lastName: "Demir",
      age: 21
    }
    ],
    _games: [ 
      {
        opponent: "Boston Celtics",
        teamPoints: 90,
        opponentPoints: 188
      },
      {
        opponent: "LA Lakers",
        teamPoints: 126,
        opponentPoints: 112
      },
      {
        opponent: "Miami Heats",
        teamPoints: 25000,
        opponentPoints: 3
      }
    ],
  
    get players(){
      return this._players
    },
  
    get games(){
      return this._games
    },
  
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
  }
  
  team.addPlayer("Talha", "Kayar", 20)
  team.addPlayer("Atadan", "Icen", 24)
  team.addPlayer("Dila", "Can", 21)
  console.log(team._players)
  team.addGame("Denver Nuggets", 100, 98)
  console.log(team._games)