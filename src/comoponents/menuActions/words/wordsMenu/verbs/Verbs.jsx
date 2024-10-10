import verbs from "../../../../auxility/words/verbs";
import "../styleTabs.css"

function Verbs() {

  
  const chunkSize = Math.ceil(verbs.length / 3);
  const chunks = [];
  for (let i = 0; i < verbs.length; i += chunkSize) {
    chunks.push(verbs.slice(i, i + chunkSize));
  }

  return (
    <div className="verbs-container mt-4">
      <div className="tabs-column">
        {chunks.map((chunk, index) => (
          <table key={index} className="tabs-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Traducción</th>
              </tr>
            </thead>
            <tbody>
              {chunk.map((verb, idx) => (
                <tr key={idx}>
                  <td>{verb.espanol}</td>
                  <td>{verb.ingles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Verbs;
