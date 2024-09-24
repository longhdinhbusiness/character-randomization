import React, { useState } from 'react';
import ImgContainer from './ImgContainer';

const categories = [
  'earrings', // 0
  'glasses', // 1
  'hats', // 2
  'neckwear', // 3
  'body', // 4
  'layer1', // 5
  'layer2', // 6
  'layer3', // 7
  'eyebrows', // 8
  'eyes', // 9
  'facialhair', // 10
  'hair', // 11
  'mouths', // 12
  'noses', // 13
];

function MainButtons({ updateImage }) {
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

  const handleSelectImage = (category, img) => {
    setSelectedImages((prev) => ({ ...prev, [category]: img }));
    updateImage(category, img);
  };

  return (
    <div className="main_button-container">
      <ImgContainer
        customPart={categories[11]}
        imagePath={'images/character/hair/'}
        handleClick={(img) => handleSelectImage('hair', img)}
        selectedImage={selectedImages.hair}
      />
      <ImgContainer
        customPart={categories[8]}
        imagePath={'images/character/eyebrows/'}
        handleClick={(img) => handleSelectImage('eyebrows', img)}
        selectedImage={selectedImages.eyebrows}
      />
      <ImgContainer
        customPart={categories[9]}
        imagePath={'images/character/eyes/'}
        handleClick={(img) => handleSelectImage('eyes', img)}
        selectedImage={selectedImages.eyes}
      />
      <ImgContainer
        customPart={categories[12]}
        imagePath={'images/character/mouths/'}
        handleClick={(img) => handleSelectImage('mouths', img)}
        selectedImage={selectedImages.mouths}
      />
      <ImgContainer
        customPart={categories[10]}
        imagePath={'images/character/facialhair/'}
        handleClick={(img) => handleSelectImage('facialhair', img)}
        selectedImage={selectedImages.facialhair}
      />
      <ImgContainer
        customPart={categories[4]}
        imagePath={'images/character/body/'}
        handleClick={(img) => handleSelectImage('body', img)}
        selectedImage={selectedImages.body}
      />
      <ImgContainer
        customPart={categories[0]}
        imagePath={'images/character/accessories/earrings/'}
        handleClick={(img) => handleSelectImage('earrings', img)}
        selectedImage={selectedImages.earrings}
      />
      <ImgContainer
        customPart={categories[1]}
        imagePath={'images/character/accessories/glasses/'}
        handleClick={(img) => handleSelectImage('glasses', img)}
        selectedImage={selectedImages.glasses}
      />
      <ImgContainer
        customPart={categories[2]}
        imagePath={'images/character/accessories/hats/'}
        handleClick={(img) => handleSelectImage('hats', img)}
        selectedImage={selectedImages.hats}
      />
      <ImgContainer
        customPart={categories[3]}
        imagePath={'images/character/accessories/neckwear/'}
        handleClick={(img) => handleSelectImage('neckwear', img)}
        selectedImage={selectedImages.neckwear}
      />
      <ImgContainer
        customPart={categories[5]}
        imagePath={'images/character/clothes/layer1/'}
        handleClick={(img) => handleSelectImage('layer1', img)}
        selectedImage={selectedImages.layer1}
      />
      <ImgContainer
        customPart={categories[6]}
        imagePath={'images/character/clothes/layer2/'}
        handleClick={(img) => handleSelectImage('layer2', img)}
        selectedImage={selectedImages.layer2}
      />
      <ImgContainer
        customPart={categories[7]}
        imagePath={'images/character/clothes/layer3/'}
        handleClick={(img) => handleSelectImage('layer3', img)}
        selectedImage={selectedImages.layer3}
      />
    </div>
  );
}

export default MainButtons;
