import React from "react"
import img1 from "../images/clinica.jpg"
import img2 from "../images/clinica2.jpg"
import img3 from "../images/clinica3.jpeg"
import img4 from "../images/clinica4.jpeg"

import"./style.scss"
const SobreAcl = () => {
  return (
    <>
      <div className="conteiner d-flex justify-content-around">
        <div className="d-flex justfy-content-between">
           <div className="flex p-3">
              <div className="conteiner-img">
                  <img src={img1} alt="..."  className="img-clinica img-thumbnail"></img>
                  <img src={img2} alt="..."  className="img-clinica img-thumbnail"></img>
                </div>
                <div>
                  <img src={img3} alt="..."  className="img-clinica img-thumbnail"></img>
                  <img src={img4} alt="..."  className="img-clinica img-thumbnail"></img>
                </div>
            </div>
          </div>
            <div className="d-block col-4 pl-2" >
              <h1 className="text-clinica text-align-center">A CLINÍCA</h1>
              <p class="text-justify-center text-dr">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
            </div>
          </div>

    </>
  );

}
export default SobreAcl