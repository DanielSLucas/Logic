import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export const apiEndpoint = 'https://logic.prismic.io/api/v2';

export const client = (req = null): DefaultClient => {
  const options = req ? { req } : null;

  return Prismic.client(apiEndpoint, options);
};
