import Link from 'next/link'

function Footer() {
    return (
        <div className='py-10 md:mb-0 md:px-10 lg:px-32 md:py-16'>
            {/* Copyright */}
            <div className="mt-4 text-center md:mt-1">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://johncanero.com/"
                >
                    <span className="mr-2 font-bold text-zinc-900 dark:text-lime-400">
                        NewsFlasher
                    </span>
                </Link>
                &copy; {new Date().getFullYear()} All Rights Reserved
            </div>

        </div>
    )
}

export default Footer
