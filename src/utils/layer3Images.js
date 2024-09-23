function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const layer3Images = importAll(
  require.context(
    '../images/character/clothes/layer3',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default layer3Images;
