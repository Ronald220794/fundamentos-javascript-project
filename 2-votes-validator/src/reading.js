const fs = require('fs').promises

const readSurvey = async (pathfile) => {
    try {
        const data = await fs.readFile(pathfile,'utf-8')
        return JSON.parse(data)

    } catch (error){
        throw new Error (`Error reading file: ${error.message}`)
    }


}

module.exports = {
    readSurvey
};
