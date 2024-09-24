import React, { useState } from 'react';
import ImgContainer from './ImgContainer';
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

function MainButtons({ updateImage }) {
  const imgValues = [
    { accessories: ['earrings', 'glasses', 'hats', 'neckwear'] },
    'body',
    { clothes: ['layer1', 'layer2', 'layer3'] },
    'eyebrows',
    'eyes',
    'facialhair',
    'hair',
    'mouths',
    'noses',
  ];

  const [selectedImages, setSelectedImages] = useState({
    body: null,
    hair: null,
    eyes: null,
    facialhair: null,
    eyebrows: null,
    mouths: null,
    earrings: null,
    glasses: null,
    hats: null,
    neckwear: null,
    layer1: null,
    layer2: null,
    layer3: null,
  });

  function handleSelectImage(category, img) {
    setSelectedImages((prev) => ({ ...prev, [category]: img }));
    updateImage(category, img);
  }

  return (
    <div className="main_button-container">
      <ImgContainer
        customPart={imgValues[6]}
        images={hairImages}
        handleClick={(img) => handleSelectImage('hair', img)}
        selectedImage={selectedImages.hair}
      />
      <ImgContainer
        customPart={imgValues[3]}
        images={eyeBrowsImages}
        handleClick={(img) => handleSelectImage('eyebrows', img)}
        selectedImage={selectedImages.eyebrows}
      />
      <ImgContainer
        customPart={imgValues[4]}
        images={eyesImages}
        handleClick={(img) => handleSelectImage('eyes', img)}
        selectedImage={selectedImages.eyes}
      />
      <ImgContainer
        customPart={imgValues[7]}
        images={mouthsImages}
        handleClick={(img) => handleSelectImage('mouths', img)}
        selectedImage={selectedImages.mouths}
      />
      <ImgContainer
        customPart={imgValues[5]}
        images={facialHairImages}
        handleClick={(img) => handleSelectImage('facialhair', img)}
        selectedImage={selectedImages.facialhair}
      />
      <ImgContainer
        customPart={imgValues[1]}
        images={bodyImages}
        handleClick={(img) => handleSelectImage('body', img)}
        selectedImage={selectedImages.body}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[0]}
        images={earringsImages}
        handleClick={(img) => handleSelectImage('earrings', img)}
        selectedImage={selectedImages.earrings}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[1]}
        images={glassesImages}
        handleClick={(img) => handleSelectImage('glasses', img)}
        selectedImage={selectedImages.glasses}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[2]}
        images={hatsImages}
        handleClick={(img) => handleSelectImage('hats', img)}
        selectedImage={selectedImages.hats}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[3]}
        images={neckwearImages}
        handleClick={(img) => handleSelectImage('neckwear', img)}
        selectedImage={selectedImages.neckwear}
      />
      <ImgContainer
        customPart={imgValues[2].clothes[0]}
        images={layer1Images}
        handleClick={(img) => handleSelectImage('layer1', img)}
        selectedImage={selectedImages.layer1}
      />
      <ImgContainer
        customPart={imgValues[2].clothes[1]}
        images={layer2Images}
        handleClick={(img) => handleSelectImage('layer2', img)}
        selectedImage={selectedImages.layer2}
      />
      <ImgContainer
        customPart={imgValues[2].clothes[2]}
        images={layer3Images}
        handleClick={(img) => handleSelectImage('layer3', img)}
        selectedImage={selectedImages.layer3}
      />
    </div>
  );
}

export default MainButtons;
