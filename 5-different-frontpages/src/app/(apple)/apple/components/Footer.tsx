import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Footer() {
    return (
        <footer className="w-full bg-[#F5F5F7] text-black text-[13px] py-7 flex flex-col items-center">
            <div className='w-full max-w-[980px] px-4 flex flex-col gap-5 opacity-50 mb-3'>
                <span>1. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.</span>

                <span>Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See support.apple.com/120850 for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.</span>

                <span>2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</span>

                <span>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</span>

                <span>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</span>

                <span>Learn more about how Apple Card applications are evaluated at <span className='underline'>support.apple.com/kb/HT209218</span></span>

                <span>Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to English (Australia, Canada, Ireland, New Zealand, South Africa, UK, or U.S.), as part of an iOS 18, iPadOS 18, and macOS Sequoia software update. Additional features and languages will be available in April, with more languages coming over the course of the year. Languages supported in 2025 include Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish, and Vietnamese.</span>

                <span>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</span>

                <span>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</span>

                <hr className="w-full h-[2px] bg-gray-300 md:my-3" />
            </div>

            <div className="w-full max-w-[980px] px-4 xl:px-0 hidden md:grid grid-cols-5 gap-3">

                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">Shop and Learn</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Store</a></li>
                            <li><a href="#" className="hover:underline">Mac</a></li>
                            <li><a href="#" className="hover:underline">iPad</a></li>
                            <li><a href="#" className="hover:underline">iPhone</a></li>
                            <li><a href="#" className="hover:underline">Watch</a></li>
                            <li><a href="#" className="hover:underline">Vision</a></li>
                            <li><a href="#" className="hover:underline">AirPods</a></li>
                            <li><a href="#" className="hover:underline">TV & Home</a></li>
                            <li><a href="#" className="hover:underline">AirTag</a></li>
                            <li><a href="#" className="hover:underline">Accessories</a></li>
                            <li><a href="#" className="hover:underline">Gift Cards</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">Apple Wallet</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Wallet</a></li>
                            <li><a href="#" className="hover:underline">Apple Card</a></li>
                            <li><a href="#" className="hover:underline">Apple Pay</a></li>
                            <li><a href="#" className="hover:underline">Apple Cash</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">Account</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
                            <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                            <li><a href="#" className="hover:underline">iCloud.com</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">Entertainment</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Apple One</a></li>
                            <li><a href="#" className="hover:underline">Apple TV+</a></li>
                            <li><a href="#" className="hover:underline">Apple Music</a></li>
                            <li><a href="#" className="hover:underline">Apple Arcade</a></li>
                            <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
                            <li><a href="#" className="hover:underline">Apple News+</a></li>
                            <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
                            <li><a href="#" className="hover:underline">Apple Books</a></li>
                            <li><a href="#" className="hover:underline">App Store</a></li>
                        </ul>
                    </div>
                </div>


                <div>
                    <h3 className="font-semibold opacity-50 mb-1">Apple Store</h3>
                    <ul className='opacity-50'>
                        <li><a href="#" className="hover:underline">Find a Store</a></li>
                        <li><a href="#" className="hover:underline">Genius Bar</a></li>
                        <li><a href="#" className="hover:underline">Today at Apple</a></li>
                        <li><a href="#" className="hover:underline">Group Reservations</a></li>
                        <li><a href="#" className="hover:underline">Apple Camp</a></li>
                        <li><a href="#" className="hover:underline">Apple Store App</a></li>
                        <li><a href="#" className="hover:underline">Certified Refurbished</a></li>
                        <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                        <li><a href="#" className="hover:underline">Financing</a></li>
                        <li><a href="#" className="hover:underline">Carrier Deals at Apple</a></li>
                        <li><a href="#" className="hover:underline">Order Status</a></li>
                        <li><a href="#" className="hover:underline">Shopping Help</a></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">For Business</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Apple and Business</a></li>
                            <li><a href="#" className="hover:underline">Shop for Business</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">For Education</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Apple and Education</a></li>
                            <li><a href="#" className="hover:underline">Shop for K-12</a></li>
                            <li><a href="#" className="hover:underline">Shop for College</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">For Healthcare</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Apple in Healthcare</a></li>
                            <li><a href="#" className="hover:underline">Mac in Healthcare</a></li>
                            <li><a href="#" className="hover:underline">Health on Apple Watch</a></li>
                            <li><a href="#" className="hover:underline">Health Records on iPhone and iPad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">For Government</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Shop for Government</a></li>
                            <li><a href="#" className="hover:underline">Shop for Veterans and Military</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">Apple Values</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Accessibility</a></li>
                            <li><a href="#" className="hover:underline">Education</a></li>
                            <li><a href="#" className="hover:underline">Environment</a></li>
                            <li><a href="#" className="hover:underline">Inclusion and Diversity</a></li>
                            <li><a href="#" className="hover:underline">Privacy</a></li>
                            <li><a href="#" className="hover:underline">Racial Equity and Justice</a></li>
                            <li><a href="#" className="hover:underline">Supply Chain</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold opacity-50 mb-1">About Apple</h3>
                        <ul className='opacity-50'>
                            <li><a href="#" className="hover:underline">Newsroom</a></li>
                            <li><a href="#" className="hover:underline">Apple Leadership</a></li>
                            <li><a href="#" className="hover:underline">Career Opportunities</a></li>
                            <li><a href="#" className="hover:underline">Investors</a></li>
                            <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Contact Apple</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Accordion type="single" collapsible className="w-full block md:hidden px-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">Shop and Learn</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Store</a></li>
                            <li><a href="#" className="hover:underline">Mac</a></li>
                            <li><a href="#" className="hover:underline">iPad</a></li>
                            <li><a href="#" className="hover:underline">iPhone</a></li>
                            <li><a href="#" className="hover:underline">Watch</a></li>
                            <li><a href="#" className="hover:underline">Vision</a></li>
                            <li><a href="#" className="hover:underline">AirPods</a></li>
                            <li><a href="#" className="hover:underline">TV & Home</a></li>
                            <li><a href="#" className="hover:underline">AirTag</a></li>
                            <li><a href="#" className="hover:underline">Accessories</a></li>
                            <li><a href="#" className="hover:underline">Gift Cards</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">Apple Wallet</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Wallet</a></li>
                            <li><a href="#" className="hover:underline">Apple Card</a></li>
                            <li><a href="#" className="hover:underline">Apple Pay</a></li>
                            <li><a href="#" className="hover:underline">Apple Cash</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">Account</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
                            <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                            <li><a href="#" className="hover:underline">iCloud.com</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">Entertainment</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Apple One</a></li>
                            <li><a href="#" className="hover:underline">Apple TV+</a></li>
                            <li><a href="#" className="hover:underline">Apple Music</a></li>
                            <li><a href="#" className="hover:underline">Apple Arcade</a></li>
                            <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
                            <li><a href="#" className="hover:underline">Apple News+</a></li>
                            <li><a href="#" className="hover:underline">Apple Podcasts</a></li>
                            <li><a href="#" className="hover:underline">Apple Books</a></li>
                            <li><a href="#" className="hover:underline">App Store</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">Apple Store</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Find a Store</a></li>
                            <li><a href="#" className="hover:underline">Genius Bar</a></li>
                            <li><a href="#" className="hover:underline">Today at Apple</a></li>
                            <li><a href="#" className="hover:underline">Group Reservations</a></li>
                            <li><a href="#" className="hover:underline">Apple Camp</a></li>
                            <li><a href="#" className="hover:underline">Apple Store App</a></li>
                            <li><a href="#" className="hover:underline">Certified Refurbished</a></li>
                            <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                            <li><a href="#" className="hover:underline">Financing</a></li>
                            <li><a href="#" className="hover:underline">Carrier Deals at Apple</a></li>
                            <li><a href="#" className="hover:underline">Order Status</a></li>
                            <li><a href="#" className="hover:underline">Shopping Help</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">For Business</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Apple and Business</a></li>
                            <li><a href="#" className="hover:underline">Shop for Business</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">For Education</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Apple and Education</a></li>
                            <li><a href="#" className="hover:underline">Shop for K-12</a></li>
                            <li><a href="#" className="hover:underline">Shop for College</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">For Healthcare</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Apple in Healthcare</a></li>
                            <li><a href="#" className="hover:underline">Mac in Healthcare</a></li>
                            <li><a href="#" className="hover:underline">Health on Apple Watch</a></li>
                            <li><a href="#" className="hover:underline">Health Records on iPhone and iPad</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">For Government</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Shop for Government</a></li>
                            <li><a href="#" className="hover:underline">Shop for Veterans and Military</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">Apple Values</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Accessibility</a></li>
                            <li><a href="#" className="hover:underline">Education</a></li>
                            <li><a href="#" className="hover:underline">Environment</a></li>
                            <li><a href="#" className="hover:underline">Inclusion and Diversity</a></li>
                            <li><a href="#" className="hover:underline">Privacy</a></li>
                            <li><a href="#" className="hover:underline">Racial Equity and Justice</a></li>
                            <li><a href="#" className="hover:underline">Supply Chain</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                    <AccordionTrigger>
                        <h3 className="font-semibold opacity-50">About Apple</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className='opacity-50 pl-4'>
                            <li><a href="#" className="hover:underline">Newsroom</a></li>
                            <li><a href="#" className="hover:underline">Apple Leadership</a></li>
                            <li><a href="#" className="hover:underline">Career Opportunities</a></li>
                            <li><a href="#" className="hover:underline">Investors</a></li>
                            <li><a href="#" className="hover:underline">Ethics & Compliance</a></li>
                            <li><a href="#" className="hover:underline">Events</a></li>
                            <li><a href="#" className="hover:underline">Contact Apple</a></li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className='w-full max-w-[980px] flex flex-col items-start mt-10 px-4 xl:px-0'>
                <div>
                    <span className='opacity-50'>More ways to shop:</span>
                    <span className='text-blue-300 underline'>&nbsp;Find an Apple Store</span>
                    <span className='opacity-50'>&nbsp;or</span>
                    <span className='text-blue-300 underline'>&nbsp;other retailer</span>
                    <span className='opacity-50'>&nbsp;near you. Or call 1-800-MY-APPLE.</span>
                </div>

                <hr className="w-full h-[2px] bg-gray-300 my-3 hidden xl:block" />

                <span className='opacity-50 block xl:hidden my-3'>United States</span>

                <div className='w-full flex flex-col xl:flex-row justify-between'>
                    <div className='flex flex-col xl:flex-row gap-1 xl:gap-7'>
                        <span className='opacity-50'>Copyright © 2024 Apple Inc. All rights reserved.</span>

                        <ul className='flex opacity-50 mt-3 sm:mt-1 xl:mt-0'>
                            <li className='border-r-2 pr-2'>Privacy Policy</li>
                            <li className='border-r-2 px-2'>Terms of Use</li>
                            <li className='border-r-2 px-2'>Sales and Refunds</li>
                            <li className='border-r-2 px-2'>Legal</li>
                            <li className='px-4'>Site map</li>
                        </ul>
                    </div>

                    <span className='opacity-50 hidden xl:block'>United States</span>
                </div>
            </div>

        </footer>
    );
}
