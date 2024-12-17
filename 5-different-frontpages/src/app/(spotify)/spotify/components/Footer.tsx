import { Button } from '@/components/ui/button'
import React from 'react'

export default function Footer() {
    return (
        <footer className='w-full h-[74px] flex justify-between footer-gradient rounded-[3px] pl-3 xl:pl-[0.75vw] pr-[1.5vw]'>
            <div className='text-white flex flex-col justify-center'>
                <span className='text-[14px] md:text-[15px] flex gap-2'>
                    Podgląd Spotify! 
                    <span className='hidden md:block xl:hidden'>Zarejestruj się, aby słuchać utworów i podcastów!</span>
                    <span className='hidden mobile:block md:hidden'>- Sprawdź!</span>
                </span>

                <span className='hidden xl:block text-[13px] 2xl:text-[14px] font-Halvetica'>
                    Zarejestruj się, aby słuchać utworów i podcastów przerywanych sporadycznie reklamami. Nie wymagamy podania numeru karty kredytowej.
                </span>
            </div>

            <div className='w-[250px] md:w-[270px] flex justify-center items-center'>
                <Button className='bg-white px-7 md:px-9 py-5 md:py-6 hover:bg-[#F3F3F3] text-[14px] md:text-[15px] hover:text-[15px] md:hover:text-[16px] font-semibold text-black rounded-[32px]'>
                    Zarejestruj się za darmo
                </Button>
            </div>
        </footer>
    )
}


