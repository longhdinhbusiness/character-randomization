import React, { useState } from 'react';
import bodyImages from '../utils/bodyImages';
import hairImages from '../utils/hairImages';
import eyesImages from '../utils/eyesImages';
import facialHairImages from '../utils/facialHairImages';
import eyeBrowsImages from '../utils/eyebrowsImages';
import mouthsImages from '../utils/mouthsImages';
import earringsImages from '../utils/earringsImages';
import glassesImages from '../utils/glassesImages';
import hatsImages from '../utils/hatsImages';
import neckwearImages from '../utils/neckwearImages';
import layer1Images from '../utils/layer1Images';
import layer2Images from '../utils/layer2Images';
import layer3Images from '../utils/layer3Images';
import ImgElement from './ImgElement';
import noseImg from '../images/character/noses/1.png';
import RandomButton from './RandomButton';
import MainButtons from './MainButtonsCard';

function RandomizeChar() {
  function generateRandomNumber(imgLength) {
    return Math.floor(Math.random() * imgLength);
  }

  const [randomImages, setRandomImages] = useState({
    body: bodyImages[generateRandomNumber(bodyImages.length)],
    hair: hairImages[generateRandomNumber(hairImages.length)],
    eyes: eyesImages[generateRandomNumber(eyesImages.length)],
    facialhair: facialHairImages[generateRandomNumber(facialHairImages.length)],
    eyebrows: eyeBrowsImages[generateRandomNumber(eyeBrowsImages.length)],
    mouths: mouthsImages[generateRandomNumber(mouthsImages.length)],
    earrings: earringsImages[generateRandomNumber(earringsImages.length)],
    glasses: glassesImages[generateRandomNumber(glassesImages.length)],
    hats: hatsImages[generateRandomNumber(hatsImages.length)],
    neckwear: neckwearImages[generateRandomNumber(neckwearImages.length)],
    layer1: layer1Images[generateRandomNumber(layer1Images.length)],
    layer2: layer2Images[generateRandomNumber(layer2Images.length)],
    layer3: layer3Images[generateRandomNumber(layer3Images.length)],
  });

  function handleClick() {
    setRandomImages({
      body: bodyImages[generateRandomNumber(bodyImages.length)],
      hair: hairImages[generateRandomNumber(hairImages.length)],
      eyes: eyesImages[generateRandomNumber(eyesImages.length)],
      facialhair:
        facialHairImages[generateRandomNumber(facialHairImages.length)],
      eyebrows: eyeBrowsImages[generateRandomNumber(eyeBrowsImages.length)],
      mouths: mouthsImages[generateRandomNumber(mouthsImages.length)],
      earrings: earringsImages[generateRandomNumber(earringsImages.length)],
      glasses: glassesImages[generateRandomNumber(glassesImages.length)],
      hats: hatsImages[generateRandomNumber(hatsImages.length)],
      neckwear: neckwearImages[generateRandomNumber(neckwearImages.length)],
      layer1: layer1Images[generateRandomNumber(layer1Images.length)],
      layer2: layer2Images[generateRandomNumber(layer2Images.length)],
      layer3: layer3Images[generateRandomNumber(layer3Images.length)],
    });
  }

  function updateImage(category, img) {
    setRandomImages((prevImages) => ({
      ...prevImages,
      [category]: img,
    }));
  }

  return (
    <>
      <div className="main-card_wrapper">
        <div className="img_wrapper">
          <ImgElement src={noseImg} name="noses" />
          <ImgElement src={randomImages.body} name="body" />
          <ImgElement src={randomImages.hair} name="hair" />
          <ImgElement src={randomImages.eyes} name="eyes" />
          <ImgElement src={randomImages.facialhair} name="facialhair" />
          <ImgElement src={randomImages.eyebrows} name="eyebrows" />
          <ImgElement src={randomImages.mouths} name="mouths" />
          <ImgElement src={randomImages.earrings} name="earrings" />
          <ImgElement src={randomImages.glasses} name="glasses" />
          <ImgElement src={randomImages.hats} name="hats" />
          <ImgElement src={randomImages.neckwear} name="neckwear" />
          <ImgElement src={randomImages.layer1} name="layer1" />
          <ImgElement src={randomImages.layer2} name="layer2" />
          <ImgElement src={randomImages.layer3} name="layer3" />
          <RandomButton handleClick={handleClick} />
        </div>
      </div>
      <MainButtons updateImage={updateImage} />
    </>
  );
}

export default RandomizeChar;
