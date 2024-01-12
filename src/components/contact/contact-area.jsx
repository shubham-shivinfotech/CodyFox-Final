import React from 'react';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt="" />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span><a href="mailto:codyfoxinfotech@gmail.com">codyfoxinfotech@gmail.com</a></span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span><a href="tel:7069927889">+91 7069927889</a></span>
                  <span><a href="tel:9727647676">+91 9727647676</a></span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span><a href="https://maps.app.goo.gl/JspwrZc9hf6yHhuN6" target="blank">145 Platinum point, Near Sudama Chowk Mota-varachha, Surat.</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;