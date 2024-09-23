function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const hairImages = importAll(
  require.context('../images/character/hair', false, /\.(png|jpe?g|svg)$/)
);

export default hairImages;
