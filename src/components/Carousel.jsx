import 'slick-carousel/slick/slick.css'; 
import './Carousel.css';
import 'slick-carousel/slick/slick-theme.css';
// src/components/Carousel.jsx
import Slider from 'react-slick';

import slider1 from '../assets/Slider_1.jpg';
import slider2 from '../assets/Slider_2.jpg';
import slider3 from '../assets/Slider_3.jpg';
import slider4 from '../assets/Slider_4.jpg';
import slider5 from '../assets/Product_2.jpg';
import slider6 from '../assets/Product_3.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
    cssEase: "ease-in-out"
  };

  return (
    <div style={{ width: '800px', margin: 'auto', marginTop: '30px' }}>
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="Slide 1" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
        <div>
          <img src={slider2} alt="Slide 2" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
        <div>
          <img src={slider3} alt="Slide 3" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
        <div>
          <img src={slider4} alt="Slide 4" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
        <div>
          <img src={slider5} alt="Slide 5" style={{ width: '100%', borderRadius: '20px' }} />
        </div>
        <div>
          <img src={slider6} alt="Slide 6" style={{ width: '100%', borderRadius: '20px' , height: '180px', objectFit: 'cover', }} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
