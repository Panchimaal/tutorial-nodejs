// CommonJSm every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') //as long as there is a function in the module it will work
//when the node exports a module it wraps it in the funcion

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)