/* @flow */

export type Type =
  | 'ノーマル'
  | 'ほのお'
  | 'みず'
  | 'でんき'
  | 'くさ'
  | 'こおり'
  | 'かくとう'
  | 'どく'
  | 'じめん'
  | 'ひこう'
  | 'エスパー'
  | 'むし'
  | 'いわ'
  | 'ゴースト'
  | 'ドラゴン'
  | 'あく'
  | 'はがね'
  | 'フェアリー'

export const TypesList: Array<Type> = [
  'ノーマル',
  'ほのお',
  'みず',
  'でんき',
  'くさ',
  'こおり',
  'かくとう',
  'どく',
  'じめん',
  'ひこう',
  'エスパー',
  'むし',
  'いわ',
  'ゴースト',
  'ドラゴン',
  'あく',
  'はがね',
  'フェアリー'
]

export const Types: { [Type]: Type } = TypesList.reduce((types, t) => {
  types[t] = t
  return types
}, {})

export default Types
