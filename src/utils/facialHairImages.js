function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const facialHairImages = importAll(
  require.context('../images/character/eyes', false, /\.(png|jpe?g|svg)$/)
);

export default facialHairImages;
