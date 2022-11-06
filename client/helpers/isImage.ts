export const isImage = (url: string) =>
  url.match(/\.(jpeg|jpg|gif|png|svg|webp)$/) != null;
