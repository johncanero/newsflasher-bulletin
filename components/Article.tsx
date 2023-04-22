import Image from 'next/image';
import ReadMoreButton from './ReadMoreButton';
// import LiveTimestamp from './LiveTimestamp';

type Props = {
	article: Article;
};
function Article({ article }: Props) {
	return (
		<article className="flex flex-col transition-all duration-200 ease-out rounded-lg shadow-md bg-slate-100 dark:bg-zinc-800 hover:scale-105 hover:shadow-lg hover:bg-slate-200">
			{article.image && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={article.image}
					alt={article.title}
					// width={500}
					// height={500}
					className="object-cover w-full h-56 rounded-t-lg shadow-md"
				/>
			)}
			<div className="flex flex-col flex-1">
				<div className="flex flex-col flex-1 p-5">
					<h2 className=" font-bold">{article.title}</h2>
					<section className="flex-1 mt-2">
						<p className="text-xs line-clamp-6">{article.description}</p>
					</section>
					<footer className="flex pt-5 ml-auto space-x-1 text-xs italic text-right text-gray-300">
						<p>{article.source} -</p>
						<p>
							{/* <LiveTimestamp time={article.published_at} /> */}
						</p>
					</footer>
				</div>
				{/* READ More button */}
				<ReadMoreButton article={article} />
			</div>
		</article>
	);
}

export default Article;