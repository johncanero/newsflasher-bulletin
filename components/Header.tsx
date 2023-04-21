import React from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'

function Header() {
    return (
        <header>
            <div className="grid items-center grid-cols-3 p-10">
                {/* React Icon */}
                <Bars3Icon className="w-8 h-8 cursor-pointer" />

                {/* Link */}
                <Link href={'/'} prefetch={false}>
                    <h1 className="flex-1 text-lg font-medium text-center md:text-3xl">
                        <span className="">
                            NewsFlasher
                        </span>{' '}
                        Bulletin
                    </h1>
                </Link>

                {/* Dark Mode */}
                <div className="flex items-center justify-end space-x-2">
                    {/* Dark mode button */}

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
