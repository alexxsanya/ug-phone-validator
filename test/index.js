const {validateUGPhone} = require('../index')

console.log(validateUGPhone("+256788155220").valid)
console.log(validateUGPhone("+256788155220").telco)
console.log(validateUGPhone("+256788155220").type)