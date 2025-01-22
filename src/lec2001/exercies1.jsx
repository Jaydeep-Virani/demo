import { useState, useEffect } from 'react';

const Exerciess1 = () => {
  const images = ['/images/ad1.jpg','/images/ad2.jpg','/images/ad3.jpg',];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        style={{ width: '400px', height: '200px', borderRadius: '10px' }}
      />
    </div>
  );
};

export default Exerciess1;
