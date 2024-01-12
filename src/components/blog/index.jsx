import React, { useEffect } from 'react';
import { FooterFive, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogArea from './blog-area';


const Blog = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Blog & Article'} />
      <BlogArea/>
      <FooterFive />
    </Wrapper>
  );
};

export default Blog;