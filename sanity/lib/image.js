import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

const builder = imageUrlBuilder(client);

/**
 * Generate an image URL from a Sanity image source.
 * Usage: urlFor(source).width(800).url()
 * @param {Object} source - Sanity image reference object
 * @returns {import('@sanity/image-url/lib/types/builder').ImageUrlBuilder}
 */
export function urlFor(source) {
  return builder.image(source);
}
