'use client'
import { categories } from '@/constants';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

function NavLinks() {
    // hooks navigation
	const pathname = usePathname();

	const isActive = (path: string) => {
		return pathname?.split('/').pop() === path;
	};
	return (
		<nav className="grid grid-cols-4 lg:grid-cols-7 text-center text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b border-zinc-600">
			{categories.map((category) => (
				<NavLink
					key={category}
					category={category}
					isActive={isActive(category)}   
				/>
			))}
		</nav>
	);
}

export default NavLinks;