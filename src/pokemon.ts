import { Type } from './types'

export class Pokemon {
  public type1: Type
  public type2?: Type
  constructor(type1: Type, type2?: Type) {
    this.type1 = type1
    this.type2 = type2
  }
}
