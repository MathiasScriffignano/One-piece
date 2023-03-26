import React from 'react'
import { Parallax } from 'react-parallax'
import Imgsite from '../composant/Img/siteimg.png'
import Drapeau from '../composant/Img/logo.png'
import Luffy from '../composant/Img/Luffy.png'

function Newsite() {
  return (
    <div>
        <Parallax bgImage={Imgsite} strength={300}>
            <div className="relative fondep  w-full h-screen">
            <div className="text-center pt-60">
              <h2 className="text-center text-7xl text-white">Nouveau <span className="underline decoration-cyan-600"> Site</span></h2>
            </div>
        </div>
        </Parallax>

        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4">
                <h3 className='text-center mt-10 text-4xl text-cyan-600'>Bienvenue sur le site</h3>
                <div className='flex justify-center mb-10 mt-5'>
                        <img className='' src={Drapeau} alt="" />
                </div>
                    <p className='text-xl'>
                   Bienvenue sur notre site dédié à One Piece, la célèbre série de manga créée par Eiichiro Oda ! Nous sommes ravis de vous accueillir dans notre communauté de fans passionnés qui cherchent à découvrir toutes les dernières nouvelles et mises à jour sur l'univers de One Piece. <br/>
                    Notre site est le lieu idéal pour trouver toutes les informations sur les derniers chapitres du manga, les dernières annonces de l'auteur et de l'éditeur, les sorties des tomes en France et bien plus encore. Nous sommes dédiés à vous fournir les meilleures actualités et analyses pour vous aider à comprendre chaque détail de cet univers riche et complexe.<br/>
                    Merci de nous rejoindre sur notre site, et n'hésitez pas à explorer toutes nos fonctionnalités pour découvrir tout ce que nous avons à offrir. Que votre voyage à travers l'univers de One Piece commence ici !
                    </p>
                  <div className='flex justify-center mb-10 mt-5'>
                    <img className='w-[25em]' src={Luffy} alt="" /></div>
            </div>  
        </div>
    </div>
  )
}

export default Newsite