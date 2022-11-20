import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  public fight(): number {
    let play = true;
    let victory = 0;
    while (play) {
      this._player2.attack(this.player);
      if (this._player2.lifePoints <= 0) { 
        play = false;
        victory = 1;
        return victory;
      }
      this.player.attack(this._player2);
      if (this.player.lifePoints <= 0) {
        play = false;
        victory = -1;
        return victory;
      }
    }
    return victory;
  }
}

export default PVP;