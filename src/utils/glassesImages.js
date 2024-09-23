function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const glassesImages = importAll(
  require.context(
    '../images/character/accessories/glasses',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default glassesImages;
