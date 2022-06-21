import React from 'react'
import { motion } from "framer-motion"
import Link from "next/link"

function Training() {
  return (
    <div className="h-screen mt-[40px] sm:mt-60">
        <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-semibold">Les Entrainements</h2>
        </div>
        <div className="mx-5 mt-[35px] sm:mt-20 grid grid-cols-2 sm:grid-cols-6 gap-5 sm:gap-y-0 place-items-center justify-self-center">
            <Link href="/sport/pectoraux">
                <motion.div whileHover={{ scale: 1.05 }} className="relative z-0 h-[300px] sm:h-[400px] w-[100%] border border-2 border-black cursor-pointer">
                    <img className="h-full w-full object-cover" src="pectoraux.png" alt="" /> 
                    <div className="absolute bottom-5 w-[100%] z-10 text-center">
                        <button className="border border-gray-900 border-2 bg-white px-5 py-2 text-xl text-gray-900">Pectoraux</button>
                    </div>
                </motion.div>
            </Link>
            <Link href="/sport/bras">
                <motion.div whileHover={{ scale: 1.05 }} className="relative h-[300px] sm:h-[400px] w-[100%] border border-2 border-black cursor-pointer">
                    <img className="h-full w-full object-cover" src="bras.png" alt="" />
                    <div className="absolute bottom-5 w-[100%] z-10 text-center">
                        <button className="border border-gray-900 border-2 bg-white px-5 py-2 text-md sm:text-xl text-gray-900">Bras et Avant-bras</button>
                    </div>
                </motion.div>
            </Link>
            <Link href="/sport/abdominaux">
                <motion.div whileHover={{ scale: 1.05 }} className="relative cursor-pointer h-[300px] sm:h-[400px] w-[100%] border border-2 border-black">
                    <img className="h-full w-full object-cover" src="abdos.jpg" alt="" />
                    <div className="absolute bottom-5 w-[100%] z-10 text-center">
                        <button className="border border-gray-900 border-2 bg-white px-5 py-2 text-xl text-gray-900">Abdominaux</button>
                    </div>
                </motion.div>
            </Link>
            <Link href="/sport/dos">
                <motion.div whileHover={{ scale: 1.05 }} className="relative cursor-pointer h-[300px] sm:h-[400px] w-[100%] border border-2 border-black">
                    <img className="h-full w-full object-cover object-[35%]" src="dos.jpg" alt="" />
                    <div className="absolute bottom-5 w-[100%] z-10 text-center">
                        <button className="border border-gray-900 border-2 bg-white px-5 py-2 text-xl text-gray-900">Dos</button>
                    </div>
                </motion.div>
            </Link>
            <Link href="/sport/jambes">
                <motion.div whileHover={{ scale: 1.05 }} className="relative cursor-pointer h-[300px] sm:h-[400px] w-[100%] border border-2 border-black">
                    <img className="h-full w-full object-cover" src="jambes.jpg" alt="" />
                    <div className="absolute bottom-5 w-[100%] z-10 text-center">
                        <button className="border border-gray-900 border-2 bg-white px-5 py-2 text-xl text-gray-900">Jambes</button>
                    </div>
                </motion.div>
            </Link>
            <Link href="/sport/epaules">
                <motion.div whileHover={{ scale: 1.05 }} className="relative cursor-pointer h-[300px] sm:h-[400px] w-[100%] border border-2 border-black">
                    <img className="h-full w-full object-cover" src="epaules.jpg" alt="" />
                    <div className="absolute bottom-5 w-[100%] z-10 text-center">
                        <button className="border border-gray-900 border-2 bg-white px-5 py-2 text-xl text-gray-900">Épaules</button>
                    </div>
                </motion.div>
            </Link>
        </div>
    </div>
  )
}

export default Training