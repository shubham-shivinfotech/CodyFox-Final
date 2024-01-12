import React from 'react';

const Industries = () => {
  return (
    <div className="tp-industri-area pb-130 p-relative">
      <div className="bs-industri-1 d-none d-lg-block">
        <img src="assets/img/chose/hero-shape-5.1.png" alt="" />
      </div>
      <div className="container tp-industri-bg">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-project-section-box text-center">
              <h2 className="tp-title-sm pb-60">Technologies We Work With</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center tp-industri-space">
          <div className="col-12">
            <IndustryItem duration={'.3s'} delay={'.5s'} title={'UI / UX Design'} />
            <IndustryItem duration={'.5s'} delay={'.7s'} number={'one'} title={'React JS'} />
            <IndustryItem duration={'.7s'} delay={'.9s'} number={'two'} title={'Vue JS'} />
            <IndustryItem duration={'.9s'} delay={'1s'} number={'eight'} title={'TypeScript'} />
            <IndustryItem duration={'1s'} delay={'1.1s'} number={'four'} title={'JavaScript'} />
            <IndustryItem duration={'1.1s'} delay={'1.2s'} number={'five'} title={'Angular'} />
            <IndustryItem duration={'1.2s'} delay={'1.3s'} number={'six'} title={'Laravel'} />
            <IndustryItem duration={'1.3s'} delay={'1.3s'} number={'seven'} title={'Node JS'} />
            <IndustryItem duration={'1.3s'} delay={'1.3s'} number={'eight'} title={'PHP'} />
            <IndustryItem duration={'1.3s'} delay={'1.3s'} number={'night'} title={'CodeIgniter'} />
            <IndustryItem duration={'1.3s'} delay={'1.3s'} number={'one'} title={'.NET'} />
            <IndustryItem duration={'1.3s'} delay={'1.3s'} number={'one'} title={'WordPress'} />
            <IndustryItem duration={'1.2s'} delay={'1.3s'} number={'two'} title={'Express JS'} />


          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;


const IndustryItem = ({ duration, delay, number, title }) => {
  return (
    <a href="#">
      <div className="tpindustri wow tpfadeUp" data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tpindustri__content">
          <h3 className={`tp-industri-title ${number ? `tp-ind-color-${number}` : ''}`}>{title}</h3>
        </div>
      </div>
    </a>
  )
}