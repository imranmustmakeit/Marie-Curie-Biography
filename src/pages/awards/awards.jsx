import React from "react";
import "./awards.css";
import AwardsBg from "/awards.png";      
import Awards2 from "/awards2.png"
import Awards3 from "/awards3.png"
import Award4 from "/award4.png"
import Footer from "../../component/footer";

export default function Awards() {
  return (
    <div className="education-page">
      <header
        className="edu-hero"
        style={{ backgroundImage: `url(${AwardsBg})` }}
        aria-label="Marie Curie portrait background"
      >
        <div className="edu-hero-overlay">
          <h1 className="hero-title">Marie Curie</h1>
          <a className="hero-subtitle" href="#education">
            Awards &amp; Honour
          </a>
        </div>
      </header>

      <main id="education" className="edu-main">
        <h2 className="section-title">Award and Honours</h2>

        <div className="edu-grid">
          <section className="edu-left">
            <article className="edu-block">
              <p className="block-text">
                Marie Curie was awarded the 1903 Nobel Prize in Physics for her research into the phenomenon of radioactivity. She shared the prize with her husband, Pierre Curie, and French physicist Henri Becquerel. This made her the first woman ever to win a Nobel Prize. 
                The prize recognized their joint research on radiation phenomena, with Henri Becquerel receiving one half and Marie and Pierre Curie the other half. Their work focused on spontaneous radiation, which Marie Curie named "radioactivity". This award established Marie Curie as a leading scientist. 
              </p>
              <div  className="chart_container">
                <img className="chart" src={Awards2} alt="awrd" />
              </div>
            </article>

            <article className="edu-block">
              <p className="block-text">
                She broke new ground for women in science: she was, for example, the first woman to receive a doctor of science degree in France, the first woman to win Nobel Prize, the first woman to lecture at the Sorbonne, the first person to win two Nobel Prizes, and the first Nobel Laureate whose child also won a Nobel Prize.
              </p>
              <div className="chart_container">
                  <img className="chart" src={Awards3} alt="awrd" />
              </div>
            </article>

            <article className="edu-block">
              <ul className="block-list">
                <li>
                  Education: Earned her doctorate in France, overcoming initial denial of higher education in Poland.
                </li>
                <li>
                  Academia: Became the first woman professor at the University of Paris (Sorbonne).
                </li>
                <li>
                  Discoveries: Coined the term "radioactivity," discovered Polonium and Radium, and developed portable X-ray units (Petites Curies) for WWI.
                </li>
                <li>
                  Inspiration: Her groundbreaking work and perseverance inspired countless women to pursue scientific careers, proving women could excel in male-dominated fields. 
                </li>
              </ul>
            </article>

            <aside>
              <div className="chart_container">
                <img className="chart" src={Award4} alt="Historic school building" />
              </div>
            </aside>

            <article className="edu-block">
              <p className="block-text">
                Impact on Women in Science:Curie's life demonstrated that women possessed the intellect and capability for top-tier scientific work, challenging societal norms and opening doors for women in STEM fields. She became a powerful symbol, showing that barriers could be overcome through dedication and brilliance, making her one of history's most influential figures for women in science
              </p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
