import adjetives from "../../../../auxility/words/adjetives";
import "../styleTabs.css"

function Adjectives() {
  const chunkSize = Math.ceil(adjetives.length / 3);
  const chunks = [];
  for (let i = 0; i < adjetives.length; i += chunkSize) {
    chunks.push(adjetives.slice(i, i + chunkSize));
  }
  return (
    <div className="adjetives-container mt-4">
    <div className="tabs-column">
      {chunks.map((chunk, index) => (
          <table key={index} className="tabs-table">
            <thead>
              <tr>
                <th>Adjetivo</th>
                <th>Traducción</th>
              </tr>
            </thead>
            <tbody>
              {chunk.map((adjetive, idx) => (
                <tr key={idx}>
                  <td>{adjetive.espanol}</td>
                  <td>{adjetive.ingles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
    </div>
    </div>
)
}

export default Adjectives