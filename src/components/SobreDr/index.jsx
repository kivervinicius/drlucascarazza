import React from "react"
import imgdr from "../images/dr-lucas.jpeg"
import"./style.scss"
const SobreOdr = () => {
  return (
    <>
      <div className="conteiner-dr">
        <div className="d-flex justify-content-center">
        <img src={imgdr} alt="..."  className="img-dr img-thumbnail"></img>
            <div className="d-block text-justify col-3 p-3" >
              <h1>SOBRE MIM</h1>
              <br />
              <h4>Dr Lucas Caraza</h4>
              <p className="text-dr">Ambitioni dedisse scripsisse iudicaretur. Cras mattis
                iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros.
                Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium
                purus sit amet fermentum.
              </p>
            </div>
        
          </div>
        </div>
    </>
  );

}
export default SobreOdr