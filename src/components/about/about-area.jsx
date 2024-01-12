import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

const contents = {
  title:'Building software for world changers',
  video_title:'See Demo Video',
  video_id:'8D6b3McyhhU',
  right_text_1:"At CodyFox, we specialize in crafting digital products that redefine the way people engage with technology. Our dedicated team thrives on challenges and collaborates closely with clients to deliver revolutionary solutions that reshape industries.",
  right_text_2:"We excel in translating bold ideas into functional, user-centric digital products that elevate user experiences and drive change.",
  client_icon:'/assets/img/about/testi-7.png',
  client_name:'Wiktor Schmidt',
  client_title:'Executive Chairman (orix)',
  desc:"Wow. What a great experience with this copywriter. CodyFox is a very talented digital agnecy. yesterday.",
  about_img:'/assets/img/breadcrum/ab-1.2.jpg',
}
const {about_img,client_icon,client_name,client_title,desc,right_text_1,right_text_2,title,video_id,video_title} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                  {/* <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div> */}
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  {/* <div className="actestimonial__icon">
                    <img src={client_icon} alt="" />
                  </div> */}
                  {/* <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">{client_name}</a></h4>
                    <span>{client_title}</span>
                  </div> */}
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-right"></i></span> We are proud to have served clients from over 20 countries, establishing a diverse and global clientele. Our reach extends across borders, reflecting our commitment to delivering top-notch services to a wide array of clients worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src={about_img} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;