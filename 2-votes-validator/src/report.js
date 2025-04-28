
const formatStatistics = (statistics, total) => 
    Object.entries(statistics)
      .map(([question, responses]) => {
        const resultados = Object.entries(responses)
          .map(([response, count]) => `  ${response}: ${(count / total * 100).toFixed(1)}%`)
          .join('\n');
        return `${question}:\n${resultados}`;
      })
      .join('\n\n');



const generateReport = ({ valid, invalid }, statistics, averageAge) => `
Total participants: ${valid.length + invalid.length}
Valid Participants: ${valid.length}
Invalid Participants: ${invalid.length}

Average Age: ${averageAge.toFixed(1)}

Results by question:
--------------------\n
${formatStatistics(statistics, valid.length)}

`;

module.exports= {
    generateReport
}