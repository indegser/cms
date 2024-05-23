import { createClient } from 'next-sanity';

const projectId = 'em8nd69q';
const dataset = 'development';
const apiVersion = '2023-05-03';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
