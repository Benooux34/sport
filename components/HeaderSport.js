import Link from 'next/link';
import React from 'react'
import { GiMuscleUp } from "react-icons/gi";

function HeaderSport() {
  return (
    <div className="h-[80px] w-full flex justify-left items-center bg-gradient-to-b from-gray-900 to-gray-800 bg-gradient-to-r">
        <Link href="/">
            <div className="p-3">
                <GiMuscleUp className="cursor-pointer" color="white" fontSize={50} />
            </div>
        </Link>
    </div>
  )
}

export default HeaderSport