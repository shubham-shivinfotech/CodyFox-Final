import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import ServiceArea from './service-area';
import ServicesItems from './services-items';
import FeatureArea from './feature-area';

const Service = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Mobile App Development'} />
      <ServicesItems/>
      <ServiceArea />
      <FeatureArea/>
      <CaseArea/>
      <TestimonialArea style_2={true}/>
      <CtaTwo/>
      <FooterThree />
    </Wrapper>
  );
};

export default Service;