function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const neckwearImages = importAll(
  require.context(
    '../images/character/accessories/neckwear',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default neckwearImages;
