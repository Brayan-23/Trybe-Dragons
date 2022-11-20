import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(life = 85, str = 63) {
    this._lifePoints = life;
    this._strength = str;
  }

  get strength(): number {
    return this._strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const attack = attackPoints > 0;
    if (attack) {
      this._lifePoints -= attackPoints;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1; 
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    this.receiveDamage(enemy.strength);
  }
}