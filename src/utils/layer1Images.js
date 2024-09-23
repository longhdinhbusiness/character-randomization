function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const layer1Images = importAll(
  require.context(
    '../images/character/clothes/layer1',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default layer1Images;
