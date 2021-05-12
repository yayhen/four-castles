export default class MapCreator {
  constructor (dimention, players) {
    this.dimention = dimention;
    this.numberOfPlayers = players.length;
    this.players = players;
    this.battleGround = [];
  }

  createBattleGround() {
    for (let i=0; i<this.dimention.x; i++) {
      this.battleGround[i]=[];
      for (let j=0; j<this.dimention.y; j++) {
        this.battleGround[i][j] = {
          biom: "field",
          update: "none",
        }
      }
    }
  }

  addCastle(position = {x: 0, y: 0}, holder = 0) {
    this.battleGround[position.x][position.y].update = 'castle';
    this.battleGround[position.x][position.y].holder = holder;
  }

  addUnit(position, unit) {
    this.battleGround[position.x][position.y].unit = unit;
  }

}