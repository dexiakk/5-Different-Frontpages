import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='flex flex-col justify-center h-[560px]'>
                <div className='z-20 grid gap-6 grid-cols-1 md:grid-cols-2 justify-center'>
                    <div className='z-20 w-full flex justify-center md:justify-end px-8 md:px-4'>
                        <div className='w-full max-w-[560px] flex flex-col items-center text-center md:text-white'>
                            <span className='text-[32px] md:text-[40px] font-light'>Konto osobiste</span>
                            <span className='mt-1 text-[20px] font-sans font-semibold'> Kupuj w milionach witryn, wysyłaj pieniądze rodzinie i znajomym</span>

                            <Button className='mt-8 px-32 py-6 bg-[#0070BA] md:bg-white hover:bg-[#005EA6] md:hover:bg-white text-[15px] md:text-[#0070BA] font-semibold rounded-[32px]'>Zaczynajmy!</Button>
                        </div>
                    </div>

                    <div className='z-20 w-full flex justify-center md:justify-start px-4'>
                        <div className='w-full max-w-[560px] flex flex-col items-center text-center md:text-white'>
                            <span className='text-[32px] md:text-[40px] font-light'>Konto firmowe</span>
                            <span className='mt-1 text-[20px] font-sans font-semibold'> Kupuj w milionach witryn, wysyłaj pieniądze rodzinie i znajomym</span>

                            <Button className='mt-8 px-32 py-6 bg-[#0070BA] md:bg-white hover:bg-[#005EA6] md:hover:bg-white text-[15px] md:text-[#0070BA] font-semibold rounded-[32px]'>Zaczynajmy!</Button>
                        </div>
                    </div>
                </div>

                <div className='hidden md:flex absolute w-full h-[560px] top-0 z-10'>
                    <div className='leftHero h-[560px] w-[85%] overflow-hidden'>
                        <div className='leftHeroBackground h-[560px] w-full overflow-hidden z-10' />
                    </div>
                    <div className='rightHero h-[560px] w-[85%]'>
                        <div className='rightHeroBackground h-[560px] w-full' />
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#EAECED] py-6'>
                <div className='px-8 text-center'>
                    <span className='text-gray-500 font-sans text-[20px] '>
                        Masz pytania?&nbsp;
                        <span className='text-[#0070BA] font-bold hover:underline cursor-pointer'>Kliknij tutaj,</span>
                        &nbsp;aby przejść do Centrum pomocy
                    </span>
                </div>
            </div>

            <div className='w-full startUpHrGradient py-6'>
                <div className='px-8 text-center'>
                    <span className='text-white font-sans font-bold text-[20px]'>
                        PayPal dla startupów
                    </span>
                </div>
            </div>

            
        </div>
    )
}
