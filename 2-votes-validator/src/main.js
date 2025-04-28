const { readSurvey } = require('./reading');

const pathfile = process.argv[2] || '../encuesta.json';

async function main() {
  try {
    const datos = await readSurvey(pathfile);
    console.log(datos)
    


  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();