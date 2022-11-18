import Race from './Race';

export default class Orc extends Race {
  private _lifePoints = 74;
  private static _count = 0;

  static createdRacesInstances(): number {
    this._count += 1;
    return this._count;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}