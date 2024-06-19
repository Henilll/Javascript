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


let b=['yellow','red','black']

console.log(b.indexOf('yellow'))
console.log(b.indexOf('green'))
console.log(b.includes('yellow'))
console.log(b.includes('green'))

c=cars.concat(b)
console.log(c)

console.log(c.reverse())

console.log(c.slice(2))
console.log(c.slice(2,5))

console.log(c.slice(-2))
console.log(c.splice(4))
console.log(c.splice(0,1,'black','grey'))
console.log(c)

let num=[3,48,63,1,0,84]
console.log(num)
console.log(num.sort())
console.log(c.sort())



let tic=[['x','','0'],['','x',''],['0','','x']]
console.log(tic)
