import { categories } from '../constants';
import fetchNews from '../lib/fetchNews';
import NewsList from '@/components/NewsList';

async function HomePage() {
	// fetch news data
	const news: NewsResponse = await fetchNews(categories.join(','));

	console.log(news);
	return (
		<div>
			<NewsList news={news} />
		</div>
	);
}

export default HomePage;