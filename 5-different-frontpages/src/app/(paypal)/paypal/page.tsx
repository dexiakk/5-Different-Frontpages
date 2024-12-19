import Image from 'next/image'
import React from 'react'

export default function Home() {
    return (
        <div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>

                <div className='hidden md:block'>
                    <div className='leftHero h-[560px] w-[85%] overflow-hidden'>
                        <div className='leftHeroBackground h-[560px] w-full overflow-hidden z-10' />
                    </div>
                    <div className='rightHero h-[560px] w-[85%]'>
                        <div className='rightHeroBackground h-[560px] w-full'/>
                    </div>
                </div>
            </div>

            <div></div>

            <div></div>
        </div>
    )
}
