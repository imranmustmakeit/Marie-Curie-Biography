import React from 'react'
import Navbar from '../component/navbar'
import './gallery.css'
import Footer from '../component/footer'

function Gallery() {
  return (
    <div>
      <div>
        <div className='header'>
          <div className="header1">
            <h1> Marie Curie</h1>
            <p>Gallery and Research memories</p>
          </div>
          <div className="header2">
            <img src="/media/headerImage.png" alt="headerImage" />
          </div>
        </div>
        <div className='GalleryContent'>
          <h1>Gallery</h1>
          <hr />
          <div className='gridUsingFlex'>
            <div className="galleryContainer1">
              <div className="galleryContainer1Child1">
                <div className="galleryContainer1Childchild">
                  <div className='galleryContainer1Childchild1 IMAGE'>
                    <img src="/media/peakpx (2).jpg" alt="" />
                  </div>
                  <div className="img1">
                    <div className='imgChild IMAGE'>
                      <img src="/media/Marie_Curie_-_Mobile_X-Ray-Unit.jpg" alt="" />
                    </div>
                    <div className='imgChild IMAGE'>
                      <img src="/media/WhatsApp Image 2025-12-07 at 14.13.00_9a225e2c.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="galleryContainer1Childchild">
                  <div className='galleryContainer1Childchild1 IMAGE'>
                    <img src="/media/WhatsApp Image 2025-12-07 at 14.12.59_43e3e095.jpg" alt="" />
                  </div>
                  <div className="img2">
                    <div className='imgChild IMAGE'>
                      <img src="/media/WhatsApp Image 2025-12-07 at 14.12.59_d64abacd.jpg" alt="" />
                    </div>
                    <div className='imgChildd'>
                      <div className='IMAGE'>
                      <img src="/media/WhatsApp Image 2025-12-07 at 14.12.58_5fbe1d0e.jpg" alt="" />
                      </div>
                      <div className='IMAGE'>
                      <img src="/media/WhatsApp Image 2025-12-07 at 15.25.30_991524f5.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="galleryContainer1Child2 IMAGE">
                <img src="/media/Marie_Curie_c._1920s.jpg" alt="" />
              </div>
            </div>
            <div className="galleryContainer2">
              <div className="galleryCon1 IMAGE"><img src="/media/einstein-67711.jpg" alt="" /></div>
              <div className="galleryCon2 IMAGE"><img src="/media/1911_Solvay_conference.jpg" alt="" /></div>
            </div>
            <div className="galleryContainer3">
              <div className="galleryCon1 IMAGE"><img src="/media/Marie_Curie_1903.jpg" alt="" /></div>
              <div className="galleryCon2 IMAGE"><img src="/media/WhatsApp Image 2025-12-07 at 14.13.00_838fad0c.jpg" alt="" /></div>
              <div className='galleryCon2 IMAGE'><img src="/media/WhatsApp Image 2025-12-07 at 15.25.31_740b1718.jpg" alt="" /></div>
            </div>
            <div className="galleryContainer4">
              <div className="galleryCont1">
                <div className="galleryConImg IMAGE"><img src="/media/Pierre_Curie_et_Marie_Sklodowska_Curie_1895 (1).jpg" alt="" /></div>
                <div className="galleryConImg IMAGE"><img src="/media/Maria_Sklodowska_et_sa_sœur_Bronislawa_en_1886.jpg" alt="" /></div>
              </div>
              <div className="galleryCont2">
                <div className="galleryConta1 IMAGE"><img src="/media/ema1.png" alt=""/></div>
                <div className="galleryConta2">
                  <div className="IMAGE"><img src="/media/Mariecurie.jpg" alt="" /></div>
                  <div className="IMAGE"><img src="/media/Irene_and_Marie_Curie_1925.jpg" alt="" /></div>
                </div>
                <div className="galleryConta3 IMAGE"><img src="/media/ema2.png" alt="" /></div>
              </div>
            </div>
            <div className="galleryContainer5">
              <div className="galleryCon1 IMAGE"><img src="/media/Marie_Pierre_Irene_Curie.jpg" alt="" /></div>
              <div className="galleryCon2 IMAGE"><img src="/media/Nobel_Pierre_et_Marie_Curie_1.jpg" alt="" /></div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery