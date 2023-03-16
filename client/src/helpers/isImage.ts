import mime from 'mime';

export const isImage = (url: string) =>
  url
    .split(' ')
    .some((u) => mime.getType(u)?.startsWith('image/'));
