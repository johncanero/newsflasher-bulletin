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
			<NewsList news={news} />
		</div>
	);
}

export default HomePage;