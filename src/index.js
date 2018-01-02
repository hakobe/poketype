/* @flow */

import { Types, TypesList } from './types'
import { createPokemon } from './pokemon'
import { calc } from './effectiveness'

export default {
  Types: Types,
  TypesList: TypesList,
  createPokemon: createPokemon,
  calcEffectiveness: calc
}
