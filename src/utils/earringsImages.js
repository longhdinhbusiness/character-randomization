function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const earringsImages = importAll(
  require.context(
    '../images/character/accessories/earrings',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default earringsImages;
