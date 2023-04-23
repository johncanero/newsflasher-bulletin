import React from 'react'
import Link from 'next/link';
type Props = {
	category: string;
	isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
	return (
		<div>
			<Link
				href={`/news/${category}`}
				className={`navlink ${isActive &&
					'underline decoration-lime-400 underline-offset-4 font-bold text-xs md:text-base lg:text-lg'}`}
			>
				{category}
			</Link>
		</div>
	);
}

export default NavLink;