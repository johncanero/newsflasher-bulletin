'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
function DarkModeButton() {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<div className='md:mt-1 lg:mt-2'>
			{currentTheme === 'light' ? (
				<MoonIcon
					className="w-6 h-6 text-gray-500 cursor-pointer"
					onClick={() => setTheme('dark')}
				/>
			) : (

				<SunIcon
					className="w-6 h-6 text-yellow-500 cursor-pointer"
					onClick={() => setTheme('light')}
				/>
			)}
		</div>
	);
}
export default DarkModeButton;