import React from 'react';
import WebServicesArea from '../homes/home-4/web-services-area';
import AppServicesArea from '../homes/home-4/app-services-area';
import UIUXServicesArea from '../homes/home-4/ui-ux-services-area';
import WebIndustries from '../homes/home-6/web-industries-tech';
import MobileIndustries from '../homes/home-6/mobile-industries-tech';
import UIUXIndustries from '../homes/home-6/ui-ux-industries-tech';

import { useRouter } from 'next/router'

const ServiceDetailsArea = () => {
  const {asPath} = useRouter();

  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Find the best solution for every stage of your
                  business development</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">A dedicated product design team can help you achieve your business goals. Whether
                  you need to craft an idea for a completely new product or elevate the quality of an existing
                  solution, we’ll help you to create a product that is laser targeted to your users’ needs and
                  delivers business results.</p>
                <p className="pb-10">Design services range from research and product review to ideation, UX design, and
                  user testing.</p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="sd-big-img">
                <img src="/assets/img/service/service-icon-10.1.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">Design process based on best practices and
                  methodologies that deliver</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">A dedicated product design team can help you achieve your business goals. Whether
                  you need to craft an idea for a completely new product or elevate the quality of an existing
                  solution, we’ll help you to create a product that is laser targeted to your users’ needs and
                  delivers business results.</p>
                <p>Design services range from research and product review to ideation, UX design, and user testing.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {asPath=='/service-details/24'?
      (
        <><WebServicesArea/>
        <div className='mt-60'>
          <WebIndustries/>
        </div>
        </>
      )
      :asPath=='/service-details/23'?
      (
        <><AppServicesArea/>
        <div className='mt-60'>
          <MobileIndustries/>
        </div>
        </>
      ):
      (
        <><UIUXServicesArea/>
        <div className='mt-60'>
          <UIUXIndustries/>
        </div>
        </>
      )}

    </>
  );
};

export default ServiceDetailsArea;