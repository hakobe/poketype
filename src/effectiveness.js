/* @flow */

import { TypesList } from './types'

import type { Pokemon } from './pokemon'
import type { Type } from './types'

type EffectivenessMsg =
  | 'こうかは ばつぐんだ！'
  | null
  | 'こうかは いまひとつの ようだ'
  | 'こうかが ない みたいだ・・・'

type EffectivenessValue = 4 | 2 | 1 | 0.5 | 0

const valueToMessage = (ev: EffectivenessValue): EffectivenessMsg => {
  if (ev === 4 || ev === 2) {
    return 'こうかは ばつぐんだ！'
  } else if (ev === 1) {
    return null
  } else if (ev === 0.5) {
    return 'こうかは いまひとつの ようだ'
  } else if (ev === 0) {
    return 'こうかが ない みたいだ・・・'
  }
  throw new Error('invalid flow')
}

export type Effectiveness = {
  message: EffectivenessMsg,
  value: EffectivenessValue
}

const typeToIndex = (type: Type) => TypesList.indexOf(type)

/* eslint-disable */
const typeChart: Array<Array<EffectivenessValue>> = [
  [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,0.5,  0,  1,  1,0.5,  0], // ノーマル
  [ 1,0.5,0.5,  1,  2,  2,  1,  1,  1,  1,  1,  2,0.5,  1,0.5,  1,  2,  1], // ほのお
  [ 1,  2,0.5,  1,0.5,  1,  1,  1,  2,  1,  1,  1,  2,  1,0.5,  1,  1,  1], // みず
  [ 1,  1,  2,0.5,0.5,  1,  1,  1,  0,  2,  1,  1,  1,  1,0.5,  1,  1,  1], // でんき
  [ 1,0.5,  2,  1,0.5,  1,  1,0.5,  2,0.5,  1,0.5,  2,  1,0.5,  1,0.5,  1], // くさ
  [ 1,0.5,0.5,  1,  2,0.5,  1,  1,  2,  2,  1,  1,  1,  1,  2,  1,0.5,  1], // こおり
  [ 2,  1,  1,  1,  1,  2,  1,0.5,  1,0.5,0.5,0.5,  2,  0,  1,  2,  2,  1], // かくとう
  [ 1,  1,  1,  1,  2,  1,  1,0.5,0.5,  1,  1,  1,0.5,0.5,  1,  1,  0,  2], // どく
  [ 1,  2,  1,  2,0.5,  1,  1,  2,  1,  0,  1,0.5,  2,  1,  1,  1,  2,  1], // じめん
  [ 1,  1,  1,0.5,  2,  1,  2,  1,  1,  1,  1,  2,0.5,  1,  1,  1,0.5,  1], // ひこう
  [ 1,  1,  1,  1,  1,  1,  2,  2,  1,  1,0.5,  1,  1,  1,  1,  0,0.5,  1], // エスパー
  [ 1,0.5,  1,  1,  2,  1,0.5,0.5,  1,0.5,  2,  1,  1,0.5,  1,  2,0.5,0.5], // むし
  [ 1,  2,  1,  1,  1,  2,0.5,  1,0.5,  2,  1,  2,  1,  1,  1,  1,0.5,  1], // いわ
  [ 0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  1,  1,  2,  1,0.5,  1,  1], // ゴースト
  [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  1,0.5,  0], // ドラゴン
  [ 1,  1,  1,  1,  1,  1,0.5,  1,  1,  1,  2,  1,  1,  2,  1,0.5,  1,0.5], // あく
  [ 1,0.5,0.5,0.5,  1,  2,  1,  1,  1,  1,  1,  1,  2,  1,  1,  1,0.5,  2], // はがね
  [ 1,0.5,  1,  1,  1,  1,  2,0.5,  1,  1,  1,  1,  1,  1,  2,  2,0.5,  1], // フェアリー
]
/* eslint-enable */

const single = (skillType: Type, targetType: Type): EffectivenessValue =>
  typeChart[typeToIndex(skillType)][typeToIndex(targetType)]

export const calc = (
  skillType: Type,
  targetPokemon: Pokemon
): Effectiveness => {
  const type1EV = single(skillType, targetPokemon.type1)
  const type2EV = targetPokemon.type2
    ? single(skillType, targetPokemon.type2)
    : 1
  const EV: EffectivenessValue = (type1EV * type2EV: any)
  return {
    message: valueToMessage(EV),
    value: EV
  }
}
