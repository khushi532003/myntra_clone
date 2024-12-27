import React from 'react'
import { BiSolidLeftArrow } from 'react-icons/bi'
import { GoBell } from 'react-icons/go'

function BellIcon() {
    return (
        <>
            <div className="bell bg-[#1d85fc] text-white p-2.5 z-40 text-2xl rounded-full fixed bottom-20 right-5">
                <GoBell />
            </div>
            <div className="w-18 bg-gray-600 px-1.5 py-6 fixed right-0 z-40 bottom-32 flex flex-col items-center gap-14">
                <div className="text-white text-2xl">
                    <BiSolidLeftArrow />
                </div>
                <h3 className='font-bold uppercase text-white text-2xl vertical-rl  rotate-180'>flat ₹500 Off</h3>
                
            </div>
        </>
    )
}

export default BellIcon
