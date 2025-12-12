import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
      <div className='footer' style={{backgroundImage: `
            linear-gradient( rgba(11, 19, 43, 0.85), rgba(11, 19, 43, 0.85)),
            url("/media/Marie_Curie_c._1920s.jpg")

          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
          
          <div className='FooterContent'>
            <div className='footerContainer1'>
              <img src="/media/Group 42.png" className='F-logo' alt="logo" />
              <p>Marie Curie was a pioneering physicist and chemist, the first woman to win two Nobel Prizes, renowned for discovering radioactivity, polonium, and radium. Marie Curie is considered one of the greatest scientists of all time.</p>
            </div>
            <div className='footerContainer2'>
              <h3>Personal bio</h3>
              <p>Home</p>
              <p>Biography</p>
              <p>Award and Honors</p>
              <p>Gallery</p>
              <p>References</p>
            </div>
            <div className='footerContainer3'>
              <h3>Educational Bio</h3>
              <p>Education and Career</p>
              <p>Research</p>
              <p>Select Works / Books</p>
            </div>
          </div>
          <div className='FooterSocialIcon'>
            <img src="/media/wikipediaicon.png" alt="Wikipedia" />
            <img src="/media/googleicon.png" alt="google" />
          </div>

      </div>
    </div>
  )
}

export default Footer;