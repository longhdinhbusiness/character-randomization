function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const bodyImages = importAll(
  require.context('../images/character/body', false, /\.(png|jpe?g|svg)$/)
);

export default bodyImages;
