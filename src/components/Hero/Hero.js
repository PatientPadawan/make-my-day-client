import React from 'react';
import ImageGallery from 'react-image-gallery';
import Photo1 from '../../images/gallery/whiteBalloons.jpg';
import Photo2 from '../../images/gallery/topDJ.jpg';
import Photo3 from '../../images/gallery/sparklersWedding.jpg';
import Photo4 from '../../images/gallery/festivalConfetti.jpg';
import Photo5 from '../../images/gallery/flowByDay.jpg';
import Photo6 from '../../images/gallery/weddingToast.jpg';
import Photo7 from '../../images/gallery/redHatParty.jpg';
import Photo8 from '../../images/gallery/festivalConfetti2.jpg';
import Photo9 from '../../images/gallery/smallDance.jpg';
import Photo10 from '../../images/gallery/pinkDJ.jpg';
import './Hero.css';

export default function Hero() {
  const images = [
    {
      original: Photo1,
      originalAlt: '',
      thumbnail: Photo1,
      thumbnailAlt: '',
    },
    {
      original: Photo2,
      originalAlt: '',
      thumbnail: Photo2,
      thumbnailAlt: '',
    },
    {
      original: Photo3,
      originalAlt: '',
      thumbnail: Photo3,
      thumbnailAlt: '',
    },
    {
      original: Photo4,
      originalAlt: '',
      thumbnail: Photo4,
      thumbnailAlt: '',
    },
    {
      original: Photo5,
      originalAlt: '',
      thumbnail: Photo5,
      thumbnailAlt: '',
    },
    {
      original: Photo6,
      originalAlt: '',
      thumbnail: Photo6,
      thumbnailAlt: '',
    },
    {
      original: Photo7,
      originalAlt: '',
      thumbnail: Photo7,
      thumbnailAlt: '',
    },
    {
      original: Photo8,
      originalAlt: '',
      thumbnail: Photo8,
      thumbnailAlt: '',
    },
    {
      original: Photo9,
      originalAlt: '',
      thumbnail: Photo9,
      thumbnailAlt: '',
    },
    {
      original: Photo10,
      originalAlt: '',
      thumbnail: Photo10,
      thumbnailAlt: '',
    },
  ];

  return (
    <header role="banner">
      <ImageGallery items={images} autoPlay />
    </header>
  );
}
