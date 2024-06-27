console.log('\x1b[33m%s\x1b[0m', 'Hello World !') //yellow

// implementing variables
// let, var, --const--
// console.log()
// data types - number, string, null, undefined,

function decorator1(fn) {
	return function (...args) {
		console.log('Decorator 1 - before')
		const result = fn.apply(this, args)
		console.log('Decorator 1 - after')
		return result
	}
}

function decorator2(fn) {
	return function (...args) {
		console.log('Decorator 2 - before')
		const result = fn.apply(this, args)
		console.log('Decorator 2 - after')
		return result
	}
}

function greet(name) {
	return `Hi, ${name}!`
}

const decoratedGreet = decorator1(decorator2(greet))

console.log(decoratedGreet('Alice'))
