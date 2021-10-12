import React from 'react';


const Image = ({ src , href}: { src: string, href: string }) => {
  return <a href={href}>
  <img src={src} style={{ width: 300 }} alt="CoxinhaSwap Ecosystem Plataform" />
  </a>
}

export default Image;