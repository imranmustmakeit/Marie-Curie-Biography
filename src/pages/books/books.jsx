import React from 'react'
import './books.css'
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';

function Books() {
  return (
    <div>
        <Navbar />
      <div className='many'>
        <h1>MARIE CURIE BOOKS</h1>
      </div>

    <div className='allbook'>
    <div className='public'>
        <div >
            <img src="/mariebooks.png" className='mariebooks' alt="" />
        </div>
        <div className='Substances'>
            <p>
                Publication date: 1872. Usage: Public Domain Mark 1.0 Creative Commons License publicdomain. Publisher: Wigand.
            </p>
        </div>
        <div className='active'>
            <h5>Selbstbiographie</h5>
        </div>
      </div>

    <div className='public'>
        <div>
            <img src="/discovery.png" className='mariebooks' alt="" />
        </div>
        <div className='Substances'>
            <p>
                The discovery of Radium and another one in 1911 for the discovery of the polonium.During her visit at Vassar College in May 1921, she gave a short account of her early work about radium.
            </p>
        </div>
        <div className='active'>
            <h5>The Discovery of Radium and Radio</h5>
        </div>
      </div>

    <div className='public'>
        <div>
            <img src="/drinking.png" className='mariebooks' alt="" />
        </div>
        <div className='Substances'> 
            <p>
                Radio-active Substances," Marie Skłodowska Curie presents a groundbreaking exploration of radioactivity, a term she helped to define.
            </p>
        </div>
        <div className='active'>
            <h5>Radio-active Substances</h5>
        </div>
      </div>
    </div>

    <div className='books'>
    <h1>BOOKS ABOUT MARIE CURIE</h1>
    </div>

<div className='mycontent'>
<div className='womanall'>
    <div>
      <img src="/madame.png" className='woman' alt="" />
    </div>
    <div className='whos'>
        <h3>Madame Curie</h3>
    </div>
    <div className='letter'>
        <p>
            The latter of which was a biography on Eve’s mother, Marie Curie, who along with Eve’s father, Pierre was a Nobel Prize winner.
        </p>
    </div>
    <div className='active'>
        <div className='active'>
        <h5>
        Translater by Eve Curie
        </h5>
    </div>
    
    </div>
</div> 

<div className='womanall'>
    <div>
      <img src="/contact.png" className='woman' alt="" />
    </div>
    <div className='whos'>
        <h3>Who was Marie Curie?</h3>
    </div>
    <div className='letter'>
        <p>
            The latter of which was a biography on Eve’s mother, Marie Curie, who along with Eve’s father, Pierre was a Nobel Prize winner.
        </p>
    </div>
    <div className='active'>
        <h5>Translater by Eve Curie</h5>
    </div>
</div> 
</div>

    <div className='books'>
        <h1>Description of Marie Curie's Scientific Papers and Journals</h1>
    </div>

<div className='famous'>
    <div>
        <img src="/image 1.png" className='famousimg' alt="" />
    </div>
    <div className='writeup'>
        <p>
            Marie Curie, a pioneering physicist and chemist famous for her groundbreaking research on radioactivity. Her scientific papers and personal laboratory notebooks are notable for their significant contributions to science and their enduring radioactive nature.  Marie Curie's research focused on invisible rays emitted by uranium, a phenomenon discovered by Henri Becquerel. Her systematic investigation led to the development of the term "radioactivity
        </p>
    </div>
    </div>

    <div className='notekey'>
        <p>
            Key Discoveries and Papers: In 1898, through careful chemical separation from pitchblende ore, Marie and her husband Pierre discovered two new elements: polonium (named after her native Poland) and radium. They published their findings in several papers, including a key communication in July 1898 where they introduced polonium. Her work demonstrated that radiation was an atomic phenomenon, challenging the prevailing belief that the atom was indivisible.
        Nobel Prizes: Her work earned her the 1903 Nobel Prize in Physics (shared with Pierre Curie and Henri Becquerel) and the 1911 Nobel Prize in Chemistry, making her the only person to win Nobel Prizes in two different scientific fields.
        PhD Thesis: Her PhD thesis, Research on Radioactive Substances, was defended in 1903 and outlined her hypothesis of the transformation of atoms.
        Wartime Work: During World War I, she championed the use of mobile X-ray units, known as "petites Curies," to help battlefield surgeons. 
            Marie Curie's research fundamentally established the field of radioactivity. Her most significant publications include: 
        Recherches sur les substances radioactives (Research on Radioactive Substances) (1903): This was her doctoral dissertation, defended at the Sorbonne. It presented her systematic investigation into uranium and thorium rays, introduced the term "radioactivity", and detailed the discovery and isolation of the new elements, polonium and radium. The examining committee considered it the greatest scientific contribution ever made in a doctoral thesis.
        Traité de Radioactivité (Treatise on Radioactivity) (1910): A classic, comprehensive book summarizing the state of the field at the time.
        L'Isotopie et les Éléments Isotopes. 
      Between 1919 and her death in 1934, scientists at the Radium Institute published 483 works, including 31 papers and books by Curie herself.

        </p>
    </div>

    <div className='books'>
        <h1>Marie Curie Journals and Laboratory Notebooks</h1>
    </div>

    <div className='notekey'>
        <p>
            Marie Curie's personal laboratory notebooks and journals are historical scientific treasures, famous for a remarkable reason: they are still highly radioactive nearly a century after her death. This contamination is due to her extensive work with radium-226, which has a half-life of about 1,600 years. 
            Location and Storage: The notebooks are considered national scientific treasures and are stored in lead-lined boxes at the Bibliothèque Nationale de France in Paris. One notebook from 1899-1902 is held by the Wellcome Collection in London.
            Access: To view the physical notebooks, visitors must sign a liability waiver and wear protective clothing due to the radium contamination.
            Online Access: The Wellcome Collection has digitized Marie Curie's notebook from 1899–1902, making it safely available to the public online. 
            Here are images of her notebooks and thesis cover
        </p>
    </div>

<div className='nice'>
    <div>
        <img src="/bookfornice.png" className='booksniceimg' alt="" />
    </div>
    

    <div>
        <img src="/bookfornice2.png" className='booksniceimg' alt="" />
    </div>
</div>

<div className='nices'>
    <div>
        <img src="/bookfornice.png" className='booksniceimg' alt="" />
    </div>

    <div>
        <img src="/bookfornice4.png" className='booksniceimg' alt="" />
    </div>
    </div>

    


    <Footer />
    </div>
  )
}

export default Books;
