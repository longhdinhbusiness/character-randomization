function importAll(r) {
  let images = [];
  r.keys().forEach((item) => {
    images.push(r(item));
  });
  return images;
}

const hatsImages = importAll(
  require.context(
    '../images/character/accessories/hats',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default hatsImages;
