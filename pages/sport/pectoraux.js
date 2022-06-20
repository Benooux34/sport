import React from 'react'
import Image from 'next/image'
import HeaderSport from '../../components/HeaderSport'

function pectoraux() {
  return (
    <div>
        <HeaderSport />  

        <div className="text-center">
            <h1 className="text-3xl sm:text-4xl mt-10">Exercices pour les Pectoraux</h1>
        </div>

        {/* EXERCICES 5 MIN */}
        <div>
            <h2 className="text-xl sm:text-2xl mt-10 ml-5">Exercices de 5 minutes</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center justify-self-center mt-5">
            <div>
                <iframe width="460" height="260" src="https://www.youtube.com/embed/EAzT-DJxZC0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            <div>
                <iframe width="460" height="260" src="https://www.youtube.com/embed/c7JisdFieeI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            <div>
                <iframe width="460" height="260" src="https://www.youtube.com/embed/XQSvE-8Kgp4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        </div>

        <div className="mt-5 mx-5">
            <h3 className="text-xl">Conseils :</h3>
            <span>Les exercices de 5 minutes sont parfaits lorsque tu commences. Si tu n&apos;arrives pas à faire des pompes "classiques", tu peux faire des pompes sur les genoux. Si tu choisis de faire des exercices de 5 minutes et que tu souhaites travailler uniquement les pectoraux, je te conseille de faire 3 fois la même vidéo ou de faire 3 vidéos différentes. 15 minutes de pectoraux est largement suffisant, car ce muscle est très vite congestionné. En revanche, si tu décides de travailler tout le corps, 1 vidéo de 5 minutes suffit.</span>
        </div>

        {/* EXERCICES 10/15 MIN */}
        <div>
            <h2 className="text-xl sm:text-2xl mt-10 ml-5">Exercices de 8/10 minutes</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 place-items-center justify-self-center mt-5">
            <div>
                <iframe width="460" height="260" src="https://www.youtube.com/embed/79T9769v2NY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            <div>
                <iframe width="460" height="260" src="https://www.youtube.com/embed/YFGTEr3i6RE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
            <div>
                <iframe width="460" height="260" src="https://www.youtube.com/embed/QLoSIIvV5XA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>
        </div>

        <div className="mt-5 mx-5 mb-5">
            <h3 className="text-xl">Conseils :</h3>
            <span>Les exercices de 8/10 minutes sont idéales, si tu arrives à finir une vidéo de 5 minutes sans faire de pompes sur les genoux. Tu peux faire 2 vidéos soit 20 minutes. Si tu n&apos;arrives pas à finir une vidéo de 5 minutes sans faire de pompes sur les genoux, je te conseille de faire 1 seule vidéo de 8 ou 10 minutes. Tu peux combiner 1 vidéo de 10 minutes sur les pectoraux et 2 ou 3 vidéos de 5 minutes sur les triceps. Si tu te lances dans une vidéo de 10 minutes, tu dois absolument la finir. Tu peux mettre la vidéo en pause ou prendre plus de temps entre les exercices mais tu dois finir la vidéo. Si malgré ça, tu n&apos;arrives pas à finir une vidéo de 10 minutes, tu dois retourner sur les vidéos de 5 minutes.</span>
        </div>

    </div>
  )
}

export default pectoraux