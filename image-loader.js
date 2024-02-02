'use client';

export default function myImageLoader({ src, width, quality = 75 }) {
  if (src.includes('prod-files-secure.s3.us-west-2.amazonaws.com')) return src;
  return `${src}?w=${width}&q=${quality}`;
}
