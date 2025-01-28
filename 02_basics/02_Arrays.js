const marvel_heros=["Thor", "Ironman", "Spiderman"]
const dc_heros=["Batman", "flash", "Superman"]

//console.log(marvel_heros)
//console.log(dc_heros)

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros)

//const allHeros=marvel_heros.concat(dc_heros)
//console.log(allHeros)

const all_New_Heros=[...marvel_heros,...dc_heros]
//console.log(all_New_Heros)

const anotherHero=[1,2,3,[4,5,6],8,6,[2,4,5,[8,9]]]
const real_another_hero=anotherHero.flat(Infinity)
console.log(real_another_hero)