import React from 'react'
import HeaderSport from "../../components/HeaderSport"

function dos() {
  return (
    <div>
      <HeaderSport />  

<div className="text-left ml-5 sm:ml-0 sm:text-center">
    <h1 className="text-3xl sm:text-4xl mt-10">Exercices pour le Dos</h1>
</div>

{/* EXERCICES 5 MIN */}
<div>
    <h2 className="text-xl sm:text-2xl mt-10 ml-5">Exercices de 5 minutes</h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center justify-self-center mt-5">
    <div>
      <iframe width="460" height="260" src="https://www.youtube.com/embed/dH0Ef2hZ_p4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div>
      <iframe width="460" height="260" src="https://www.youtube.com/embed/ol_10ow2zZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div>
      <iframe width="460" height="260" src="https://www.youtube.com/embed/mXHFRxe7bgo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
</div>

<div className="mt-5 mx-5">
    <h3 className="text-xl">Conseils :</h3>
    <span></span>
</div>

    </div>
  )
}

export default dos