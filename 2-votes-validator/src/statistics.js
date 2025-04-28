const { validateParticipant } = require('./validators')

const classifyParticipants = (datos) =>
      datos.reduce((acc, participant) => {
        
        acc.valid = acc.valid || [];
        acc.invalid = acc.invalid || [];
        
        if (validateParticipant(participant)){
            acc.valid.push(participant)
        } else {
            acc.invalid.push(participant)     
        }
        return acc
    }, {})


const calculateAverageAge = (participants) =>
    participants.reduce((sum, { age }) => sum + age, 0) / participants.length || 0


const calculateStatistics = (participants) => {
    return participants.reduce((statistics, { responses }) => {
      Object.entries(responses).forEach(([question, response]) => {
        if (!statistics[question]) {
            statistics[question] = {};
        }
        statistics[question][response] = (statistics[question][response] || 0) + 1;
      });
      return statistics;
    }, {});
  };


/*test = [
    {
      name: 'Carlos',
      age: 29,
      responses: { p1: 'Sí', p2: 'No', p3: 'Tal vez' }
    },
    {
      name: 'Lucía',
      age: 'veinticinco',
      responses: { p1: 'Sí', p2: '', p3: 'No sé' }
    },
    {
      name: 'Mario',
      age: 40,
      responses: { p1: 'No', p2: 'Sí', p3: 'No' }
    }
]

console.log(test)
classifyParticipants(test)
console.log(classifyParticipants(test)) 

const validParticipant = classifyParticipants(test).valid
console.log(validParticipant)

console.log(averageAge(validParticipant)) 

console.log(calculateStatistics(validParticipant))*/


module.exports ={
    classifyParticipants,
    calculateAverageAge,
    calculateStatistics
}