import React, { useEffect } from 'react';
import { FooterFive, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';


const Contact = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Contact'} />
      <ContactArea/>
      <FooterFive />
    </Wrapper>
  );
};

export default Contact;