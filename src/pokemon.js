/* @flow */
import type { Type } from './types'

export type Pokemon = {
  type1: Type,
  type2: ?Type
}

export const createPokemon = (type1: Type, type2?: Type): Pokemon => {
  return {
    type1: type1,
    type2: type2
  }
}
