import React, { useEffect } from 'react';
import { FooterFive, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogDetailsArea from './blog-details-area';


const BlogDetails = ({blog}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={'Blog Details'} />
      <BlogDetailsArea blog={blog}/>
      <FooterFive />
    </Wrapper>
  );
};

export default BlogDetails;