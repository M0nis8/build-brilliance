import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

/**
 * Fetch data from Sanity using a GROQ query.
 * @param {string} query - GROQ query string
 * @param {Object} [params={}] - Query parameters
 * @returns {Promise<any>} Query results
 */
export async function sanityFetch(query, params = {}) {
  return client.fetch(query, params);
}
