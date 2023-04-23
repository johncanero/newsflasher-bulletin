import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'
// Hero Icon
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    return (
        <header>
            <div className="flex items-center justify-between p-6 md:p-10 lg:mx-14 mx-auto">
                {/* React Icon */}
                <Bars3Icon className="w-8 h-8 cursor-pointer" />

                {/* Logo and Link */}
                <div className='flex gap-2 md:gap-1 justify-center mx-auto'>
                    {/* Logo */}
                    <Image
                        src="/images/icon/worldNews2.png"
                        alt="My Image"
                        width={40}
                        height={40}
                    />
                    {/* Link */}
                    <Link href={'/'} prefetch={false}>
                        <h1 className="flex-1 mt-2 text-base font-medium md:mt-1 md:text-3xl">
                            <span className="">
                                NewsFlasher
                            </span>{' '}
                            Bulletin
                        </h1>
                    </Link>
                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-end gap-2 space-x-2">
                    {/* Dark mode button */}
                    <DarkModeButton  />
                    {/* Button */}
                    <button className="hidden px-4 py-2 font-semibold rounded-full md:inline bg-lime-500 text-stone-800 lg:px-8 lg:py-3 dark:bg-lime-400">
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* Navlinks */}
            <NavLinks />
            {/* SearchBox */}
            <SearchBox />
        </header>
    )
}

export default Header
