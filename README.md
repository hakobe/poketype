# pokemon-type

[![CircleCI](https://circleci.com/gh/hakobe/pokemon-types.svg?style=svg)](https://circleci.com/gh/hakobe/pokemon-types)

Pokémon's type list and effectiveness calculation

## Synopsis

```javascript
import poketype from '.'

const { ほのお, くさ } = poketype.Types

const フシギダネ = poketype.createPokemon(くさ)
const ひのこ = ほのお
const effectiveness = poketype.calcEffectiveness(ひのこ, フシギダネ)

console.log(effectiveness.message) // 'こうかは ばつぐんだ！'
```

## LICENSE

MIT by @hakobe


