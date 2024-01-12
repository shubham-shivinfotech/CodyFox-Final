import { Bulb, Code, Managed } from "../svg";

const services_data = [
  {
    id:1,
    duration:'.5s',
    delay:'.8s',
    img:'/assets/img/service/service-1.png',
    title:'Ideation & Evaluation',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    text_2:'At CodyFox we specialize in designing, building, shipping and scaling...',
    home:true,
    service_p_2:true,
  },
  {
    id:2,
    duration:'.7s',
    delay:'1s',
    img:'/assets/img/service/service-2.png',
    title:'Ideation & Evaluation',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    text_2:'At CodyFox we specialize in designing, building, shipping and scaling...',
    home:true,
    service_p_2:true,
  },
  {
    id:3,
    duration:'.9s',
    delay:'1.2s',
    img:'/assets/img/service/service-3.png',
    title:'Online Marketing',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    text_2:'At CodyFox we specialize in designing, building, shipping and scaling...',
    home:true,
    service_p_2:true,
  },
  {
    id:4,
    duration:'.9s',
    delay:'1.3s',
    img:'/assets/img/service/service-icon-9.1.png',
    title:'Customer Support',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    text_2:'At CodyFox we specialize in designing, building, shipping and scaling...',
    service_p_2:true,
  },
  // home two
  {
    id:5,
    duration:'.3s',
    delay:'.6s',
    color:'tp-sv-blue-color',
    img:'/assets/img/service/service-3.png',
    title:'Mobile Design',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_2:true,
    service_p_3:true,
  },
  {
    id:6,
    duration:'.5s',
    delay:'.8s',
    color:'tp-sv-sky-color',
    img:'/assets/img/service/service-1.png',
    title:'Web Development',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_2:true,
    service_p_3:true,
  },
  {
    id:7,
    duration:'.7s',
    delay:'1s',
    color:'tp-sv-pink-color',
    img:'/assets/img/service/service-icon-4.png',
    title:'UI UX Design',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_2:true,
    service_p_3:true,
  },
  // home three
  {
    id:8,
    duration:'1s',
    delay:'.3s',
    img:'/assets/img/service/service-5.png',
    title:'Marketing',
    color:'service-color-1',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_3:true,
    service_p_4:true,
  },
  {
    id:9,
    duration:'1s',
    delay:'.5s',
    img:'/assets/img/service/service-6.png',
    title:'Web Design',
    color:'service-color-2',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_3:true,
    service_p_4:true,
  },
  {
    id:10,
    duration:'1s',
    delay:'.7s',
    img:'/assets/img/service/service-7.png',
    title:'Branding',
    color:'service-color-3',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_3:true,
    service_p_4:true,
  },
  // home four
  {
    id:11,
    duration:'.3s',
    delay:'.5s',
    img:'/assets/img/service/007-email.png',
    title:'Custom Web Development',
    border_effect:'',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:12,
    duration:'.5s',
    delay:'.7s',
    img:'/assets/img/service/service4.1.png',
    title:'Progressive Web Development',
    border_effect:'sv-border-effect-1',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:13,
    duration:'.7s',
    delay:'.9s',
    img:'/assets/img/service/service4.2.png',
    title:'Back-end Web Development',
    border_effect:'sv-border-effect-2',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:14,
    duration:'.9s',
    delay:'1s',
    img:'/assets/img/service/service4.3.png',
    title:'Front-end Web Development',
    border_effect:'sv-border-effect-3',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:15,
    duration:'.9s',
    delay:'1.1s',
    img:'/assets/img/service/service4.4.png',
    title:"User-Friendly Web Development",
    border_effect:'sv-border-effect-4',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:16,
    duration:'1s',
    delay:'1.1s',
    img:'/assets/img/service/service4.5.png',
    title:"E-Commerce Web Development",
    border_effect:'sv-border-effect-5',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:17,
    duration:'1.1s',
    delay:'1.2s',
    img:'/assets/img/service/service4.6.png',
    title:"Open Source Web Development",
    border_effect:'sv-border-effect-6',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  {
    id:50,
    duration:'1.1s',
    delay:'1.2s',
    img:'/assets/img/service/service4.1.png',
    title:"User interface & User experience Designing",
    border_effect:'sv-border-effect-1',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_4:true,
    service_p:true,
  },
  //Mobile
  {
    id:51,
    duration:'.3s',
    delay:'.5s',
    img:'/assets/img/service/007-email.png',
    title:'Native App Development',
    border_effect:'',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_7:true,
    service_p:true,
  },
  {
    id:52,
    duration:'.5s',
    delay:'.7s',
    img:'/assets/img/service/service4.1.png',
    title:'Hybrid App Development',
    border_effect:'sv-border-effect-1',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_7:true,
    service_p:true,
  },
  {
    id:53,
    duration:'.7s',
    delay:'.9s',
    img:'/assets/img/service/service4.2.png',
    title:'Maintenance & Support',
    border_effect:'sv-border-effect-2',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_7:true,
    service_p:true,
  },
  {
    id:54,
    duration:'.9s',
    delay:'1s',
    img:'/assets/img/service/service4.3.png',
    title:'UI & UX Designing',
    border_effect:'sv-border-effect-3',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_7:true,
    service_p:true,
  },
  {
    id:55,
    duration:'.9s',
    delay:'1.1s',
    img:'/assets/img/service/service4.4.png',
    title:"PWA Development",
    border_effect:'sv-border-effect-4',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_7:true,
    service_p:true,
  },
  {
    id:56,
    duration:'1s',
    delay:'1.1s',
    img:'/assets/img/service/service4.5.png',
    title:"App Migrations & Integrations",
    border_effect:'sv-border-effect-5',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_7:true,
    service_p:true,
  },
// ui/ux
{
  id:61,
  duration:'.3s',
  delay:'.5s',
  img:'/assets/img/service/007-email.png',
  title:'Website Designing',
  border_effect:'',
  text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
  home_8:true,
  service_p:true,
},
{
  id:62,
  duration:'.5s',
  delay:'.7s',
  img:'/assets/img/service/service4.1.png',
  title:'Mobile App Designing',
  border_effect:'sv-border-effect-1',
  text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
  home_8:true,
  service_p:true,
},
{
  id:63,
  duration:'.7s',
  delay:'.9s',
  img:'/assets/img/service/service4.2.png',
  title:'Company Branding',
  border_effect:'sv-border-effect-2',
  text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
  home_8:true,
  service_p:true,
},
{
  id:64,
  duration:'.9s',
  delay:'1s',
  img:'/assets/img/service/service4.3.png',
  title:'Product Designing',
  border_effect:'sv-border-effect-3',
  text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
  home_8:true,
  service_p:true,
},
{
  id:65,
  duration:'.9s',
  delay:'1.1s',
  img:'/assets/img/service/service4.4.png',
  title:"ProtoTypes",
  border_effect:'sv-border-effect-4',
  text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
  home_8:true,
  service_p:true,
},
{
  id:66,
  duration:'1s',
  delay:'1.1s',
  img:'/assets/img/service/service4.5.png',
  title:"Wireframes",
  border_effect:'sv-border-effect-5',
  text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
  home_8:true,
  service_p:true,
},
  // add service item 
  {
    id:18,
    duration:'1.2s',
    delay:'1.3s',
    img:'/assets/img/service/007-email.png',
    title:'Product Management',
    border_effect:'',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p:true,
  },
  // home five
  {
    id:19,
    img:'/assets/img/service/service4.1.png',
    top_border:true,
    icon:'flaticon-target',
    title:<>Business <br /> Analysis</>,
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
  {
    id:20,
    img:'/assets/img/service/service4.2.png',
    icon:'flaticon-statistics',
    title:<>Marketing <br />Strategy</>,
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
  {
    id:21,
    img:'/assets/img/service/service4.3.png',
    icon:'flaticon-coding',
    title:<>Design & <br />Development</>,
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
  {
    id:22,
    img:'/assets/img/service/service4.4.png',
    icon:'flaticon-team',
    title:<>Business <br /> Consulting</>,
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    home_5:true,
  },
   // home six
   {
    id:23,
    img:'/assets/img/service/service-1.png',
    icon:<Code/>,
    title:"Mobile App Development",
    text_1:"Enhance your digital presence with CodyFox's expertise in delivering user-friendly, interactive, and feature-rich mobile app development services, fostering your digital growth.",
    duration:'.3s',
    delay:'.5s',
    home_6:true,
  },
   {
    id:24,
    img:'/assets/img/service/service-2.png',
    icon:<Managed/>,
    title:"Web App Development",
    text_1:"Empower your business and clients with CodyFox's distinctive web development services, tailored to elevate your online presence.",
    duration:'.5s',
    delay:'.7s',
    active:true,
    home_6:true,
  },
   {
    id:25,
    img:'/assets/img/service/service-3.png',
    icon:<Bulb/>,
    title:"UI/UX Development",
    text_1:"Unlock the potential of seamless and robust desktop applications with CodyFox's development services, tailored to empower your business functionality and user experience.",
    duration:'.7s',
    delay:'.9s',
    home_6:true,
  },

  // services 3
  {
    id:26,
    duration:'.9s',
    delay:'1s',
    color:'tp-sv-blue-color',
    img:'/assets/img/service/service-11.png',
    title:'Customer Support',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_3:true,
  },
  {
    id:27,
    duration:'.9s',
    delay:'1.1s',
    color:'tp-sv-sky-color',
    img:'/assets/img/service/service-8.png',
    title:'Custom Service',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_3:true,
  },
  {
    id:28,
    duration:'.9s',
    delay:'1.2s',
    color:'tp-sv-pink-color',
    img:'/assets/img/service/service-9.png',
    title:'Website Design',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_3:true,
  },

  // service 4,
  {
    id:29,
    duration:'.9s',
    delay:'1s',
    img:'/assets/img/service/service-9.png',
    title:'Content Writing',
    color:'sv-four-color',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_4:true,
  },
  {
    id:30,
    duration:'.9s',
    delay:'1.1s',
    img:'/assets/img/service/service-10.png',
    title:'Web Design',
    color:'sv-six-color',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_4:true,
  },
  {
    id:31,
    duration:'.9s',
    delay:'1.2s',
    img:'/assets/img/service/service-5.png',
    title:'UI Design',
    color:'sv-five-color',
    text_1:'At CodyFox we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast',
    service_p_4:true,
  },
]

export default services_data;