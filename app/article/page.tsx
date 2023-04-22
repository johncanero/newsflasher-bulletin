import { notFound } from 'next/navigation';
import Image from 'next/image';
// import LiveTimestamp from '@/components/LiveTimestamp';

type Props = {
	searchParams?: Article;
};
function ArticlePage({ searchParams }: Props) {
	if (
		(searchParams && Object.entries(searchParams).length === 0) ||
		!searchParams
	) {
		return notFound();
	}

	const article: Article = searchParams;

	return (
		<article>
			<section className="flex flex-col px-0 pb-24 lg:flex-row lg:px-10">
				{article.image && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						className="object-cover max-w-md mx-auto rounded-lg shadow-md h-50 md:max-w-lg lg:max-w-xl"
						src={article.image}
						alt={article.title}
					/>
				)}
				<div className="px-10">
					<h1 className="px-0 pb-2 no-underline headerTitle">
						{article.title}
					</h1>

					<div className="flex space-x-4 divide-x-2">
						<h2 className="font-bold">By: {article.author || 'unknown'}</h2>
						<h2 className="pl-4 font-bold">
							Source: {article.source || 'unknown'}
						</h2>
						<p className="pl-4">{article.published_at}</p>
					</div>
					<p className="pt-4">{article.description}</p>
				</div>
			</section>
		</article>
	);
}

export default ArticlePage;