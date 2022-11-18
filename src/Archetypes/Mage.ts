import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private static _count = 0;
  private _power: EnergyType;

  constructor(n: string, power: EnergyType = 'mana') {
    super(n);
    this._power = power;
  }

  static createdArchetypeInstances(): number {
    this._count += 1;
    return this._count;
  }

  get energyType(): EnergyType {
    return this._power;
  }
}