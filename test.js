/* @flow */
import test from 'ava'
import poketype from '.'

const {
  ノーマル,
  ほのお,
  くさ,
  でんき,
  みず,
  ひこう,
  かくとう,
  はがね,
  むし,
  フェアリー,
  ゴースト
} = poketype.Types

test('ヒトカゲの　ひのこ！', t => {
  const フシギダネ = poketype.createPokemon(くさ)
  const ひのこ = ほのお

  t.deepEqual(poketype.calcEffectiveness(ひのこ, フシギダネ), {
    message: 'こうかは ばつぐんだ！',
    value: 2
  })
})

test('ピカチュウの　かみなり！', t => {
  const ギャラドス = poketype.createPokemon(みず, ひこう)
  const かみなり = でんき

  t.deepEqual(poketype.calcEffectiveness(かみなり, ギャラドス), {
    message: 'こうかは ばつぐんだ！',
    value: 4
  })
})

test('ミミッキュの じゃれつく！', t => {
  const リザードン = poketype.createPokemon(ほのお, ひこう)
  const じゃれつく = フェアリー

  t.deepEqual(poketype.calcEffectiveness(じゃれつく, リザードン), {
    message: 'こうかは いまひとつの ようだ',
    value: 0.5
  })
})

test('アブリーの　むしのさざめき！', t => {
  const ルカリオ = poketype.createPokemon(かくとう, はがね)
  const むしのさざめき = むし

  t.deepEqual(poketype.calcEffectiveness(むしのさざめき, ルカリオ), {
    message: 'こうかは いまひとつの ようだ',
    value: 0.25
  })
})

test('カビゴンの　のしかかり！', t => {
  const ゲンガー = poketype.createPokemon(ゴースト)
  const のしかかり = ノーマル

  t.deepEqual(poketype.calcEffectiveness(のしかかり, ゲンガー), {
    message: 'こうかが ない みたいだ・・・',
    value: 0
  })
})
