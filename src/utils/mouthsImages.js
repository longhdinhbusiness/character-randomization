function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const mouthsImages = importAll(
  require.context('../images/character/mouths', false, /\.(png|jpe?g|svg)$/)
);

export default mouthsImages;
