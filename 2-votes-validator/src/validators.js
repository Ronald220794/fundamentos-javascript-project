/* 
    Cada respuesta esté presente (no vacía).
    La edad sea un número entero positivo.
    El nombre esté compuesto solo por letras y espacios.

*/
const validateName = (name) =>
    typeof name === 'string' && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())

const validateAge = (age) => 
     Number.isInteger(age) && age > 0

const validateResponses = (responses) => 
    Object.values(responses).every(r => typeof r === 'string' && r.trim() !== '');

const validateParticipant = (participant) =>
    validateName(participant.name) &&
    validateAge(participant.age) &&
    validateResponses(participant.responses)



/* TESTING
console.log(validateName('Ronald Acosta'))
console.log(validateName('Ethan 011076')) 

console.log(validateAge(15))
console.log(validateAge(-1)) 
console.log(validateAge('asdad')) 

const test_response = {
    p1: "Sí",
    p2: "No",
    p3: "Tal vez"
}

const test_response2 = {
    p1: "Sí",
    p2: "",
    p3: "Tal vez"
}

console.log(validateResponses(test_response))
console.log(validateResponses(test_response2))

*/

module.exports ={
    validateName,
    validateAge,
    validateResponses,
    validateParticipant
}



