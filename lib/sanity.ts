import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your project ID
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data every time
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const QUERIES = {
  allInsights: `*[_type == "insight"] | order(publishedAt desc)`,
  allServices: `*[_type == "service"] | order(title asc)`,
  allIndustries: `*[_type == "industry"] | order(title asc)`,
  featuredReport: `*[_type == "report" && isFeatured == true][0]`,
};