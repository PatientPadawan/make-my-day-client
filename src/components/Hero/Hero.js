import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Hero.css';

export default function Hero() {
  const images = [
    {
      original: 'https://i.imgur.com/jabsphK.jpg',
      thumbnail: 'https://i.imgur.com/jabsphKt.jpg',
    },
    {
      original: 'https://i.imgur.com/jaBkAal.jpg',
      thumbnail: 'https://i.imgur.com/jaBkAalt.jpg',
    },
    {
      original: 'https://i.imgur.com/D6cIbb5.jpg',
      thumbnail: 'https://i.imgur.com/D6cIbb5t.jpg',
    },
    {
      original: 'https://i.imgur.com/TJmPvG2.jpg',
      thumbnail: 'https://i.imgur.com/TJmPvG2t.jpg',
    },
    {
      original: 'https://i.imgur.com/PkrhU9D.jpg',
      thumbnail: 'https://i.imgur.com/PkrhU9Dt.jpg',
    },
    {
      original: 'https://i.imgur.com/wm9V76i.jpg',
      thumbnail: 'https://i.imgur.com/wm9V76it.jpg',
    },
    {
      original: 'https://i.imgur.com/f92GeES.jpg',
      thumbnail: 'https://i.imgur.com/f92GeESt.jpg',
    },
    {
      original: 'https://i.imgur.com/VZPEHgu.jpg',
      thumbnail: 'https://i.imgur.com/VZPEHgut.jpg',
    },
    {
      original: 'https://i.imgur.com/jh5lwiN.jpg',
      thumbnail: 'https://i.imgur.com/jh5lwiNt.jpg',
    },
    {
      original: 'https://i.imgur.com/1CC7oX6.jpg',
      thumbnail: 'https://i.imgur.com/1CC7oX6t.jpg',
    },
  ];

  return (
    <header role="banner">
      <ImageGallery items={images} autoPlay />
    </header>
  );
}
