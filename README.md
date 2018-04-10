# pokemon-type

[![CircleCI](https://circleci.com/gh/hakobe/pokemon-types.svg?style=svg)](https://circleci.com/gh/hakobe/pokemon-types)

Pokemon have particular characteristics, such as natures, abilities, typing, and moves.  This project focuses on the typing aspect of Pokemon, and how particular typing of Pokemon can be effective against another. 

Pokemon can have up to 2 different types, such as “Water” and “Flying”. By using the existing type list of all Pokemon, This project aims determine how effective it is against another. As an example, a Pokemon that is “Water” and “Flying” is incredibly ineffective against Pokemon of the “Electric” typing. This project aims to calculate effectiveness and reveal the results to the user. 

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


