import nouns from "../../../../auxility/words/nouns";
import "../styleTabs.css"

function Nouns() {
  const chunkSize = Math.ceil(nouns.length / 3);
  const chunks = [];
  for (let i = 0; i < nouns.length; i += chunkSize) {
    chunks.push(nouns.slice(i, i + chunkSize));
  }
  return (
    
    <div className="nouns-container mt-4">
     <div className="tabs-column">
       {chunks.map((chunk, index) => (
         <table key={index} className="tabs-table">
           <thead>
             <tr>
               <th>Sustantivo</th>
               <th>Traducción</th>
             </tr>
           </thead>
           <tbody>
             {chunk.map((noun, idx) => (
               <tr key={idx}>
                 <td>{noun.espanol}</td>
                 <td>{noun.ingles}</td>
               </tr>
             ))}
           </tbody>
         </table>
       ))}
     </div>
    </div>
)
}

export default Nouns