import React, { useState } from 'react';
import ImgElement from './ImgElement';
import noseImg from '../images/character/noses/1.png';
import RandomButton from './RandomButton';
import MainButtons from './MainButtonsCard';

const generateRandomNumber = (imgLength) =>
  Math.floor(Math.random() * imgLength) + 1;

const randomizeAvatar = () => ({
  body: `images/character/body/${generateRandomNumber(17)}.png`,
  hair: `images/character/hair/${generateRandomNumber(73)}.png`,
  eyes: `images/character/eyes/${generateRandomNumber(24)}.png`,
  facialhair: `images/character/facialhair/${generateRandomNumber(17)}.png`,
  eyebrows: `images/character/eyebrows/${generateRandomNumber(15)}.png`,
  mouths: `images/character/mouths/${generateRandomNumber(24)}.png`,
  earrings: `images/character/accessories/earrings/${generateRandomNumber(
    32
  )}.png`,
  glasses: `images/character/accessories/glasses/${generateRandomNumber(
    17
  )}.png`,
  hats: `images/character/accessories/hats/${generateRandomNumber(28)}.png`,
  neckwear: `images/character/accessories/neckwear/${generateRandomNumber(
    18
  )}.png`,
  layer1: `images/character/clothes/layer1/${generateRandomNumber(5)}.png`,
  layer2: `images/character/clothes/layer2/${generateRandomNumber(5)}.png`,
  layer3: `images/character/clothes/layer3/${generateRandomNumber(9)}.png`,
});

function RandomizeChar() {
  const [randomImages, setRandomImages] = useState(randomizeAvatar());

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
          <RandomButton
            handleClick={() => setRandomImages(randomizeAvatar())}
          />
        </div>
      </div>
      <MainButtons
        updateImage={(category, img) =>
          setRandomImages((prevImages) => ({
            ...prevImages,
            [category]: img,
          }))
        }
      />
    </>
  );
}

export default RandomizeChar;
