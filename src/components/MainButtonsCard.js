import React from 'react';
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

function MainButtons() {
  const imgValues = [
    { accessories: ['earrings', 'glasses', 'hats', 'neckwear'] },
    'body',
    { clothes: ['layer1', 'layer2', 'layer3'] },
    'eyebrows',
    'eyes',
    'facialhair',
    'hair',
    'mouths',
    'noses', // Only one nose, don't have to do this one
  ];

  return (
    <div className="main_button-container">
      <ImgContainer customPart={imgValues[6]} images={hairImages} />
      <ImgContainer customPart={imgValues[3]} images={eyeBrowsImages} />
      <ImgContainer customPart={imgValues[4]} images={eyesImages} />
      <ImgContainer customPart={imgValues[7]} images={mouthsImages} />
      <ImgContainer customPart={imgValues[5]} images={facialHairImages} />
      <ImgContainer customPart={imgValues[1]} images={bodyImages} />
      <ImgContainer
        customPart={imgValues[0].accessories[0]}
        images={earringsImages}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[1]}
        images={glassesImages}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[2]}
        images={hatsImages}
      />
      <ImgContainer
        customPart={imgValues[0].accessories[3]}
        images={neckwearImages}
      />
      <ImgContainer
        customPart={imgValues[2].clothes[0]}
        images={layer1Images}
      />
      <ImgContainer
        customPart={imgValues[2].clothes[1]}
        images={layer2Images}
      />
      <ImgContainer
        customPart={imgValues[2].clothes[2]}
        images={layer3Images}
      />
    </div>
  );
}

export default MainButtons;
