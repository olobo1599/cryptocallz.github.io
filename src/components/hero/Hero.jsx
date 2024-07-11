import React from 'react'
import "./Hero.css"
import Button from '../Button/Button';
import ImagBeat from '../imagebeate/ImagBeat';

const Hero = ({ title }) => {
  return (
    <div className='hero__container'>
      <div className="text__content">
        <h1 className='title'>
          {title}
        </h1>
        <p className="sub">
          MKT: @Mrwhales_01 & @cryptoitachicalls
          <br /><br />
          I yeet 100x gems and shitcoins. I invest in everything I post.
          <br /><br />
          ape at your own demise. dyor always.
          Crypto Itachi calls eally based an have good whales  🐳 who invest.
        </p>
        <button className="buttons">
          <Button placeholder='CALLS TELEGRAM' href='https://t.me/cryptoetherchicallz'/>
          <Button placeholder='TWITTER' lightOrDark='dark_mode' href="google.com"/>
        </button>
      </div>
      <ImagBeat />
    </div>
  )
}

export default Hero;