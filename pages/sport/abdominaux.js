import React from 'react'
import HeaderSport from "../../components/HeaderSport"

function abdominaux() {
  return (
    <div>
        <HeaderSport />  

<div className="text-center">
    <h1 className="text-3xl sm:text-4xl mt-10">Exercices pour les Abdominaux</h1>
</div>

{/* EXERCICES 5 MIN */}
<div>
    <h2 className="text-xl sm:text-2xl mt-10 ml-5">Exercices de 5 minutes</h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center justify-self-center mt-5">
    <div>
        <iframe width="460" height="260" src="https://www.youtube.com/embed/l3_BaB7QHCo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
    <div>
        <iframe width="460" height="260" src="https://www.youtube.com/embed/VdxbLHKAego" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
    <div>
        <iframe width="460" height="260" src="https://www.youtube.com/embed/VY4FtHFk34w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
</div>

<div className="mt-5 mx-5">
    <h3 className="text-xl">Conseils :</h3>
    <span>!Important! Tu ne dois pas faire des exercices d&apos;abdominaux juste après avoir mangé. Tu dois attendre 45 minutes ou 1 heure après ton repas. Les exercices de 5 minutes sont parfaits pour débuter. Tu peux faire 2 ou 3 vidéos soit 10/15 minutes d&apos;exercices pour les abdominaux. Si tu travailles tout le corps, 1 vidéo de 5 minutes suffit.</span>
</div>

{/* EXERCICES 10/15 MIN */}
<div>
    <h2 className="text-xl sm:text-2xl mt-10 ml-5">Exercices de 10 minutes</h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center justify-self-center mt-5">
    <div>
        <iframe width="460" height="260" src="https://www.youtube.com/embed/wX8eSe1SZks" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
    <div>
        <iframe width="460" height="260" src="https://www.youtube.com/embed/4o7sr6x_dEg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
    <div>
        <iframe width="460" height="260" src="https://www.youtube.com/embed/BMPps30ZQZQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
    </div>
</div>

<div className="mt-5 mx-5 mb-5">
    <h3 className="text-xl">Conseils :</h3>
    <span>Je te conseille de faire 1 vidéo de 10 minutes même si tu es débutant. Les exercices pour travailler les abdominaux ne sont pas très compliqués. Si tu travailles tout le corps ou juste les abdominaux, 1 vidéo de 10 minutes est largement suffisant.</span>
</div>
    </div>
  )
}

export default abdominaux