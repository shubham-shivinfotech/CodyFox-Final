import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from 'next/link';

const testimonial_contents = {
  subtitle: 'Testimonial',
  title: 'Check what ',
  highlight_text: 'client say',
  btn_text: 'More Testimonial',
  testimonial_data: [
    {
      id: 1,
      // brand_img: '/assets/img/testimonial/testi-brands-1.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'CodyFox delivered an outstanding shopping website with a stunning UI and a powerful backend. The seamless integration of design and functionality exceeded my expectations. Highly recommended for web development.',
      img: '/assets/img/testimonial/testi-4.2.png',
      name: 'Maria Rodriguez',
      title: 'Project Manager'
    },
    {
      id: 2,
      // brand_img: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: "I'm incredibly grateful to CodyFox for creating an amazing Action hero game on Android! Their skills in game development are truly commendable. We're incradible happy to work with them.",
      img: '/assets/img/testimonial/testi-4.5.png',
      name: 'Hassan Al-Farsi',
      title: 'CEO'
    },
    {
      id: 3,
      // brand_img: '/assets/img/testimonial/testi-brands-3.png',
      ratings: [1, 2, 3, 4, 5],
      desc: "Absolutely amazing. we can't believe how incredible this turned out. CodyFox's developers are true professional. They are such a honest, decent and reliable. and They have greate experience.",
      img: '/assets/img/testimonial/testi-4.1.png',
      name: 'Anita Patel',
      title: 'Product Designer'
    },
    {
      id: 4,
      // brand_img: '/assets/img/testimonial/testi-brands-1.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Hats off to CodyFox for developing an incredible CMS system! Their expertise is evident in the seamless functionality and user-friendly interface. Grateful for their skills in bringing this project to life. Highly recommended!',
      img: '/assets/img/testimonial/testi-4.2.png',
      name: 'Emily Thompson',
      title: 'Project Manager'
    }
  ]
}

const { btn_text, highlight_text, subtitle, testimonial_data, title } = testimonial_contents;

const TestimonialArea = ({ home_6, style_2 = false }) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <div className={`tp-testimonial-area ${style_2 ? 'pb-130' : 'pt-130 pb-130'} p-relative`}>
      <div className={`${home_6 ? 'bs-testi-shape-1' : 'ce-testi-shape'} d-none d-lg-block`}>
        <img src={home_6 ? "/assets/img/testimonial/testimonial-shape-5.3.png" : "/assets/img/hero/hero-shape-4.png"} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
              <div className="tp-testimonial-title-box ">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm">{title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="212" height="11" viewBox="0 0 212 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="tp-testi-button-right-side">
                {/* <Link href="/testimonial">
                  <a className={`${home_6 || style_2 ? 'tp-btn-yellow' : 'tp-btn'}`}>{btn_text}</a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="tp-testimonial-slider-section-four">
          <Swiper
            loop={sliderLoop}
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="swiper-container testi-slider-active-five"
            breakpoints={{
              '1200': {
                slidesPerView: 3,
              },
              '992': {
                slidesPerView: 3,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }}
          >
            {testimonial_data.map((item) => {
              const { id, brand_img, desc, img, name, ratings, title } = item;
              return <SwiperSlide key={id}>
                <div className="tp-testimonial-item-four">
                  <div
                    className="tp-testimonial-item-four__meta d-flex justify-content-between 
                    align-items-center mb-60">
                    <div className="tp-testimonial-item-four__logo">
                      <a href="#"><img src={brand_img} alt="" /></a>
                    </div>
                    <div className="tp-testimonial-item-four__rating">
                      {ratings.map((r) => <span key={r}>
                        <i className="fas fa-star"></i></span>)}
                    </div>
                  </div>
                  <div className="tp-testi-paragraph pb-40">
                    <p>{desc}</p>
                  </div>
                  <div className="tp-testimonial-item-four__client d-flex align-items-center">
                    <div className="mr-20">
                      <img src={img} alt="" />
                    </div>
                    <div className="tp-testimonial-item-four__position">
                      <h4 className="m-0">{name}</h4>
                      <span>{title}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;