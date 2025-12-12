import Marie from '/marie_curie.png'
import './references.css'
import Footer from '../../component/footer';

function References() {
  return (
    <div>
      <div className='hero_bg'>
        <div className='hero_content'>
            <h3>Marie Curie</h3>
            <p>References and more</p>
        </div>
        <div className='hero_image'>
            <img src={Marie} alt='Marie' />
        </div>
      </div>
      <div className='reference_container'>
        <h3>References</h3>
        <div className='reference_boxes'>
            <div className='box'>
              <h4>Academy of Sciences</h4>
              <p>
                The Academy of Sciences was established by Louis’s financial controller, Jean-Baptiste Colbert, to formalize under government control earlier private meetings on scientific matters.
              </p>
              <a href=''>
                view resources
              </a>
            </div>
            <div className='box'>
              <h4>Investigation of Radiation</h4>
              <p>
                Like Thomson’s discovery of the electron, the discovery of radioactivity in uranium by French physicist Henri Becquerel in 1896 forced scientists to radically change.
              </p>
              <a href=''>
                view resources
              </a>
            </div>
            <div className='box'>
              <h4>Naming of Curie</h4>
              <p>
                Curie, in physics, unit of activity of a quantity of a radioactive substance, named in honour of the French physicist Pierre Curie.
              </p>
              <a href=''>
                view resources
              </a>
            </div>
        </div>
        <div className='reference_boxes'>
            <div className='box'>
              <h4>Women in Science</h4>
              <p>
                Researchers can only speculate about the relative roles of men and women thousands of years ago, as they made shelters and clothing, tamed fire.
              </p>
              <a href=''>
                view resources
              </a>
            </div>
            <div className='box'>
              <h4>Britannica</h4>
              <p>
                From childhood she was remarkable for her prodigious memory, and at the age of 16 she won a gold medal on completion of her secondary education at the Russian ycée.
              </p>
              <a href=''>
                view resources
              </a>
            </div>
            <div className='box'>
              <h4>Nobel Prize in Physics1903</h4>
              <p>
                Marie Skłodowska was born in Warsaw, Poland, to a family of teachers who believed strongly in education. 
              </p>
              <a href=''>
                view resources
              </a>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default References;
