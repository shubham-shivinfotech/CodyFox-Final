import React, { useEffect } from 'react';
import { FooterFive, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceDetailsArea from './service-details-area';




const ServiceDetails = ({service}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={service?.title ? service?.title : 'Service Details'} />
      <ServiceDetailsArea/>
      {/* {asPath==='service-details/24'?<WebServiceDetailsArea/>:asPath==='service-details/23'?<MobileServiceDetailsArea/>:<DesktopServiceDetailsArea />} */}
      <FooterFive />
    </Wrapper>
  );
};

export default ServiceDetails;