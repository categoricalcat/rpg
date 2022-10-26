export const createImage = (url: string) => {
  const img = new Image();
  img.src = url;

  return img;
};

export const createP = (text: string) => {
  const p = document.createElement('p');
  p.innerText = text;

  return p;
};
