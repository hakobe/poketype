import {
  calcEffectiveness,
  Pokemon,
  Type,
  かくとう,
  くさ,
  でんき,
  はがね,
  ひこう,
  ほのお,
  みず,
  むし,
  ゴースト,
  ノーマル,
  フェアリー
} from './src'

it('ヒトカゲの　ひのこ！', () => {
  const フシギダネ = new Pokemon(くさ)
  const ひのこ = ほのお

  expect(calcEffectiveness(ひのこ, フシギダネ)).toEqual({
    message: 'こうかは ばつぐんだ！',
    value: 2
  })
})

it('ピカチュウの　かみなり！', () => {
  const ギャラドス = new Pokemon(みず, ひこう)
  const かみなり = でんき

  expect(calcEffectiveness(かみなり, ギャラドス)).toEqual({
    message: 'こうかは ばつぐんだ！',
    value: 4
  })
})

it('ミミッキュの じゃれつく！', () => {
  const リザードン = new Pokemon(ほのお, ひこう)
  const じゃれつく = フェアリー

  expect(calcEffectiveness(じゃれつく, リザードン)).toEqual({
    message: 'こうかは いまひとつの ようだ',
    value: 0.5
  })
})

it('アブリーの　むしのさざめき！', () => {
  const ルカリオ = new Pokemon(かくとう, はがね)
  const むしのさざめき = むし

  expect(calcEffectiveness(むしのさざめき, ルカリオ)).toEqual({
    message: 'こうかは いまひとつの ようだ',
    value: 0.25
  })
})

it('カビゴンの　のしかかり！', () => {
  const ゲンガー = new Pokemon(ゴースト)
  const のしかかり = ノーマル

  expect(calcEffectiveness(のしかかり, ゲンガー)).toEqual({
    message: 'こうかが ない みたいだ・・・',
    value: 0
  })
})
