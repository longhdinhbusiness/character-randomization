function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const eyebrowsImages = importAll(
  require.context('../images/character/eyebrows', false, /\.(png|jpe?g|svg)$/)
);

export default eyebrowsImages;
