import Image from 'next/image'
import "../css/FeaturesSlider.css"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AppleFeatures({ autoScroll }: { autoScroll: boolean }) {

    const features = [
        {
            image: "/apple/img/appleFeatures/arcade.png",
            link: "https://apps.apple.com/us/app/nba-2k25-arcade-edition/id6504000920?ign-itscg=10000&ign-itsct=aa-apl_hp-play_now--240326",
            tag: "Play now",
        },
        {
            image: "/apple/img/appleFeatures/podcast.png",
            link: "https://music.apple.com/us/music-video/ros%C3%A9-the-zane-lowe-interview/1781341491?itscg=10000&itsct=am-apl_hp-listen_now--240326",
            tag: "Listen now",
        },
        {
            image: "/apple/img/appleFeatures/fitness.png",
            link: "https://fitness.apple.com/us/workout/core-with-jenn/1779544249?itscg=10000&itsct=afp-apl_hp-watch_now--240326",
            tag: "Watch now",
        },
        {
            image: "/apple/img/appleFeatures/music.png",
            link: "https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb",
            tag: "Listen now",
        },
        {
            image: "/apple/img/appleFeatures/arcade2.png",
            link: "https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132?ign-itscg=10000&ign-itsct=aa-apl_hp-play_now--240326",
            tag: "Play now",
        },
        {
            image: "/apple/img/appleFeatures/fitness2.png",
            link: "https://fitness.apple.com/us/studio-collection/travel-friendly-workouts/1691360777?itscg=10000&itsct=afp-apl_hp-watch_now--240326",
            tag: "Watch now",
        },
        {
            image: "/apple/img/appleFeatures/music2.png",
            link: "https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb",
            tag: "Listen now",
        },
    ];



    return (
        <div className='w-full max-w-[2560px] flex overflow-hidden gap-4'>
            <div key={"1-1"} className={`flex flex-nowrap gap-4 infinite-slider ${autoScroll ? 'animation-running' : 'animation-paused'}`}>
                {features.map((feature, index: number) => (
                    <Link key={index} href={feature.link}>
                        <div key={index} className='relative w-[417px] h-[236px] flex-shrink-0 group flex justify-center items-center'>
                            <Image
                                src={feature.image}
                                fill
                                alt={`feature-${index}`}
                                className="object-cover z-0"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />

                            <Button className='relative hidden z-30 group-hover:block bg-[#f5f5f5] hover:bg-white text-black rounded-[23px]'>{feature.tag}</Button>
                        </div>
                    </Link>
                ))}
            </div>
            <div key={"2-1"} className={`flex flex-nowrap gap-4 infinite-slider ${autoScroll ? 'animation-running' : 'animation-paused'}`}>
                {features.map((feature, index: number) => (
                    <Link key={index} href={feature.link}>
                        <div key={index} className='relative w-[417px] h-[236px] flex-shrink-0 group flex justify-center items-center'>
                            <Image
                                src={feature.image}
                                fill
                                alt={`feature-${index}`}
                                className="object-cover z-0"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />

                            <Button className='relative hidden z-30 group-hover:block bg-[#f5f5f5] hover:bg-white text-black rounded-[23px]'>{feature.tag}</Button>
                        </div>
                    </Link>
                ))}
            </div>
            <div key={"3-1"} className={`flex flex-nowrap gap-4 infinite-slider ${autoScroll ? 'animation-running' : 'animation-paused'}`}>
                {features.map((feature, index: number) => (
                    <Link key={index} href={feature.link}>
                        <div key={index} className='relative w-[417px] h-[236px] flex-shrink-0 group flex justify-center items-center'>
                            <Image
                                src={feature.image}
                                fill
                                alt={`feature-${index}`}
                                className="object-cover z-0"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />

                            <Button className='relative hidden z-30 group-hover:block bg-[#f5f5f5] hover:bg-white text-black rounded-[23px]'>{feature.tag}</Button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
