/* @flow */

import Types from './types'
import { createPokemon } from './pokemon'
import { calc } from './effectiveness'

export default {
  Types: Types,
  createPokemon: createPokemon,
  calcEffectiveness: calc
}
