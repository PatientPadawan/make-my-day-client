import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Hero.css';

export default function Hero() {
  const images = [
    {
      original: 'https://i.imgur.com/jabsphK.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/jabsphKt.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/jaBkAal.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/jaBkAalt.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/D6cIbb5.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/D6cIbb5t.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/TJmPvG2.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/TJmPvG2t.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/PkrhU9D.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/PkrhU9Dt.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/wm9V76i.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/wm9V76it.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/f92GeES.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/f92GeESt.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/VZPEHgu.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/VZPEHgut.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/jh5lwiN.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/jh5lwiNt.jpg',
      thumbnailAlt: '',
    },
    {
      original: 'https://i.imgur.com/1CC7oX6.jpg',
      originalAlt: '',
      thumbnail: 'https://i.imgur.com/1CC7oX6t.jpg',
      thumbnailAlt: '',
    },
  ];

  return (
    <header role="banner">
      <ImageGallery items={images} autoPlay />
    </header>
  );
}
