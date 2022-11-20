import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[] = [];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._monsters = monster;
  }
  
  public fight(): number {
    let victory = 1;
    this._monsters.map((bicho) => {
      this.player.attack(bicho);
      if (bicho.lifePoints <= 0) { 
        victory = 1;
        return victory;
      }
      bicho.attack(this.player);
      if (this.player.lifePoints <= 0) {
        victory = -1;
        return victory;
      }
      return victory;
    });
    return victory;
  }
}