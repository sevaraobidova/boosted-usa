import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.scss';
import { Pagination, Navigation } from 'swiper/modules';

import img1 from "../assets/img/Rectangle (54).png";
import img2 from "../assets/img/Rectangle (55).png";
import img3 from "../assets/img/Rectangle (56).png";
import img4 from "../assets/img/Rectangle (57).png";
import img5 from "../assets/img/Rectangle (58).png";
import img6 from "../assets/img/Rectangle (59).png";
import img7 from "../assets/img/Rectangle (60).png";

export default function Swipers() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const information = [
    {
      img: img1,
      name: 'Rev Tube 1',
      price: '$16.00',
      sale: '$19.00',
    },
    {
      img: img2,
      name: 'Rev Tube 2',
      price: '$16.00',
      sale: '$19.00',
    },
    {
      img: img3,
      name: 'Rev Tube 3',
      price: '$16.00',
      sale: '$19.00',
    },
    {
      img: img4,
      name: 'Rev Tube 4',
      price: '$16.00',
      sale: '$19.00',
    },
      {
        img: img5,
        name: 'Rev Tube 4',
        price: '$16.00',
        sale: '$19.00',
      },
      {
        img: img6,
        name: 'Rev Tube 4',
        price: '$16.00',
        sale: '$19.00',
      },
      {
        img: img7,
        name: 'Rev Tube 4',
        price: '$16.00',
        sale: '$19.00',
      },
  ];

  useEffect(() => {
    // Update the number of slides displayed based on screen width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // For mobile devices
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // For tablets
      } else {
        setSlidesPerView(5); // For larger screens
      }
    };
    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <h1 className='simple-heading ours'>Looking for Accessories?</h1>
    <div className="line"></div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {information.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cardlar">
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>
              <p>
                {item.price} <span>{item.sale}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
