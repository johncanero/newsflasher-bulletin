import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function w/ Next.js 13 caching
  const res = await fetch(
    "https://radzionkownowy.stepzen.net/api/news-flasher/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 10000 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log("LOADING NEW DATA FROM API FOR CATEGORY -> ", category, keywords);
  const newsResponse = await res.json();

  // sort function
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
  // return results
};

export default fetchNews;

// Check Media Stack API (Stepzen + Media Stack)
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=MEDIA_STACK_API_KEY&source=business,sports"
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=MEDIA_STACK_API_KEY&countries=us%2Cgb&limit=100&offset=0&sort=published_desc"
