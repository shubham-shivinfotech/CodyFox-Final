import Link from 'next/link';
import React from 'react';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/about-me">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const contents = {
  title: 'Creating world class experiences',
  sm_desc_1: "At the core of our success lies our deep appreciation for the power of data. We leverage cutting-edge analytics and insights to inform our design and development processes, ensuring that every product we create is not just revolutionary but also data-driven.",
  sm_desc_2: "Share your vision with CodyFox, and together, let's embark on a journey to create a digital product that not only meets but exceeds expectations. Join the ranks of those who have redefined industries, and let's shape the future together."
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{sm_desc_1}</p>
                <p>{sm_desc_2}</p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={'Project kikoff'}
                subtitle={'At CodyFox we specialize designing building, shipping...'} />
              <FeatureItem title={'PIdeation'} color={'2'}
                subtitle={'At CodyFox we specialize designing building, shipping...'} />
              <FeatureItem title={'Design Process'} color={'3'}
                subtitle={'At CodyFox we specialize designing building, shipping...'} />
              <FeatureItem title={'Development'} color={'4'}
                subtitle={'At CodyFox we specialize designing building, shipping...'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;