import React from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-center">
                {/* React Icon */}
                <Bars3Icon className="h-8 w-8 cursor-pointer" />

                {/* Link */}
                <Link href={'/'} prefetch={false}>
                    <h1 className="font-serif text-lg md:text-3xl flex-1 text-center">
                        <span className="decoration-6 decoration-orange-400">
                            NewsFlasher
                        </span>{' '}
                        Bulletin
                    </h1>
                </Link>

                {/* Dark Mode */}
                <div className="flex items-center justify-end space-x-2">
                    {/* Dark mode button */}
                    
                    {/* Button */}
                    <button className="hidden md:inline bg-slate-900 text-black font-semibold px-4 lg:px-8 py-2 lg:py-3 rounded-full dark:bg-lime-300">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
