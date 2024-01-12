import React from 'react';

const social_links=[
  {link: 'https://www.linkedin.com/company/codyfox-infotech', target: '_blank', icon: 'fab fa-linkedin'},
  {link: '#', target: '_blank', icon: 'fab fa-twitter'},
  // {link: 'https://www.skype.com/en/', target: '_blank', icon: 'fab fa-skype'},
  {link: '#', target: '_blank', icon: 'fab fa-youtube'}
]

const hero_socials = [
  { num: 1,link:'https://www.linkedin.com/company/codyfox-infotech',target: '_blank', icon: 'fab fa-linkedin social-icon-1', title: 'Linkdin' },
  { num: 3,link:'#',target: '_blank',icon: 'fab fa-youtube social-icon-3', title: 'Youtube' },
  { num: 2,link:'#',target: '_blank',icon:'fab fa-twitter social-icon-2', title: 'Twitter' },
]

export const HeroSocials = ({hide_title=false}) => {
  return (
    <>{hero_socials.map((l, i) => <a key={i} href={l.link} className={`social-icon-${l.num}`}
    target={l.target ? l.target:''}><i className={l.icon}></i>{hide_title?'':l.title}</a>)}</>
  );
};

const SocialLinks = () => {
  return (
    <>{social_links.map((l, i) => <a key={i} href={l.link}
    target={l.target ? l.target:''}><i className={l.icon}></i></a>)}</>
  );
};

export default SocialLinks;