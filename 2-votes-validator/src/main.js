const { readSurvey } = require('./reading');
const { classifyParticipants, calculateAverageAge, calculateStatistics} = require('./statistics')
const { generateReport } = require('./report')

const pathfile = process.argv[2] || '../encuesta.json'

async function main() {
  try {
    const datos = await readSurvey(pathfile)
    const classification = classifyParticipants(datos)
    const statistics = calculateStatistics(classification.valid)
    const averageAge = calculateAverageAge(classification.valid)
    
    console.log(generateReport(classification, statistics, averageAge)) 
    
 
    /*console.log(datos)
    console.log(classification)
    console.log(statistics)
    console.log(averageAge)*/

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();