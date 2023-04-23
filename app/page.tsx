import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from '@/components/NewsList';
import Image from 'next/image';


async function HomePage() {
	// fetch news data
	const news: NewsResponse = await fetchNews(categories.join(','));
	// set timeout for 3 seconds
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<div>
			{/* Background Image */}
			<div className='mx-auto flex justify-center'>
				<Image
					src="/images/newsFlasherHeaderBackground-min.jpg"
					alt="My image"
					width={1100}
					height={1100}
					className=""
				/>
			</div>
			<NewsList news={news} />
		</div>
	);
}

export default HomePage;