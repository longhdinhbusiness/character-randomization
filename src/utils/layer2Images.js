function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const layer2Images = importAll(
  require.context(
    '../images/character/clothes/layer2',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default layer2Images;
