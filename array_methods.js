let cars=['audi','bmw','merceds','toyoto']
cars.push('Kia')

console.log(cars)
cars.push('lmborghini')
console.log(cars)

cars.pop()
console.log(cars)

cars.unshift('Ferrari')
console.log(cars)

cars.unshift('mini')
console.log(cars)

cars.shift()
console.log(cars)


//Practice Qs
// start:['january','july','march','august']
// final:['july','june','march','august']

let a=['january','july','march','august']
a.shift()
a.shift()
a.unshift('june')
a.unshift('july')
console.log(a)