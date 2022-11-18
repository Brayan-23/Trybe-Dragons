import Race from './Race';

export default class Elf extends Race {
  private _lifePoints = 99;
  private static _count = 0;

  static createdRacesInstances(): number {
    this._count += 1;
    return this._count;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}