import React from "react";
import "./education.css";
import EducationBg from "/education.png";      
import School1 from "/school.png";  
import School2 from "/school2.png"; 
import Chart from "/chart.png" ;
import Footer from "../../component/footer";

export default function Education() {
  return (
    <div className="education-page">
      <header
        className="edu-hero"
        style={{ backgroundImage: `url(${EducationBg})` }}
        aria-label="Marie Curie portrait background"
      >
        <div className="edu-hero-overlay">
          <h1 className="hero-title">Marie Curie</h1>
          <a className="hero-subtitle" href="#education">
            Education &amp; Career
          </a>
        </div>
      </header>

      <main id="education" className="edu-main">
        <h2 className="section-title">School attended</h2>

        <div className="edu-grid">
          <section className="edu-left">
            <article className="edu-block">
              <h3 className="block-title">Early Childhood Education (1870–1878)</h3>
              <ul className="block-list">
                <li>1870–1873: Attended Bronisława Skłodowska Primary School in Warsaw.</li>
                <li>
                  1874–1878: Continued her early schooling under her father's supervision; he was a respected teacher of mathematics and physics.
                </li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Secondary School (1878–1883)</h3>
              <ul className="block-list">
                <li>1878–1883: Attended a Russian-controlled Girls' Gymnasium in Warsaw.</li>
                <li>She graduated in 1883, at age 15, with top honors.</li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Flying University (1885–1890)</h3>
              <ul className="block-list">
                <li>
                  1885–1890: Attended the Flying University (Uniwersytet Latający), an underground institution for Polish students—especially women.
                </li>
                <li>
                  She studied subjects like physics, chemistry, mathematics, and Polish culture, which were banned under Russian rule.
                </li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Move to Paris &amp; University Education (1891–1894)</h3>
              <p className="block-text">
                Marie moved to France in October 1891 to start university studies at the Sorbonne, University of Paris (Sorbonne).
              </p>
              <ul className="block-list">
                <li>1891: Enrolled in the Faculty of Sciences for higher education.</li>
                <li><strong>First Degree</strong> — 1893: Earned her Bachelor's Degree in Physics. She graduated first in her class.</li>
                <li><strong>Second Degree</strong> — 1894: Earned her Bachelor's Degree in Mathematics. She graduated second in her class.</li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Early Research Career (1894–1897)</h3>
              <ul className="block-list">
                <li>1894: Began research in magnetism and met Pierre Curie.</li>
                <li>1897: Enrolled for her doctoral research, becoming the first woman in France to pursue a PhD in physics.</li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Doctorate Degree (1903)</h3>
              <ul className="block-list">
                <li>1903: Awarded her Doctorate in Physics for her groundbreaking thesis on radioactive substances.</li>
                <li>That same year, she shared the Nobel Prize in Physics.</li>
              </ul>
            </article>
          </section>

          <aside className="edu-right">
            <div className="photo-card top">
              <img src={School1} alt="Historic school building" />
            </div>
          </aside>
        </div>

        <h2 className="section-title">Marie Curie Early Career</h2>

        <div className="edu-grid">
          <section className="edu-left">
            <article className="edu-block">
              <h3 className="block-title">Governess and Tutor (1886–1889)</h3>
              <p className="block-list">After finishing secondary school, Marie Curie wanted to study abroad, but her family lacked money. To support herself and to help pay for her sister Bronisława’s medical studies, she worked as a governess (private teacher) for wealthy families.</p>
              <ul className="block-list">
                <li>1886–1889: Worked for the Żorawski family in Szczuki, Poland.</li>
                <li>She taught their children mathematics, reading, and science.</li>
                <li>During this time, she also conducted small scientific experiments using simple household materials.</li>
                <li>She fell in love with Kazimierz Żorawski, the son of the family, but his family rejected the relationship because Marie was poor.</li>
                <li>This period strengthened her resilience and determination to pursue science.</li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Return to Warsaw and Laboratory Assistant (1889–1891)</h3>
              <p className="block-list">After leaving the governess job, Marie returned to Warsaw.</p>
              <ul className="block-list">
                <li>1889–1891: Worked as a laboratory assistant at the Museum of Industry and Agriculture in Warsaw.</li>
                <li>Her supervisor was Professor Józef Boguski, a former assistant of Dmitri Mendeleev (creator of the periodic table).</li>
                <li>She performed experiments in physics, chemistry, and materials science, gaining her first real professional research experience.</li>
                <li>During this time, she dreamed of continuing scientifically rigorous research that was unavailable to women in Poland.</li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Move to Paris to Begin Scientific Career (1891)</h3>
              <p className="block-text">
                Determined to advance her scientific life, she saved all the money she earned and moved to Paris in October 1891. She entered:
              </p>
              <ul className="block-list">
                <li>The Sorbonne (University of Paris)</li>
                <li>She studied physics, mathematics, and chemistry with intense dedication.</li>
                <li>Lived in near-poverty, often skipping meals and studying late into the night.</li>
                <li>This marked the true beginning of her professional scientific career</li>
              </ul>
            </article>

            <article className="edu-block">
              <h3 className="block-title">First Scientific Research Job (1894–1897)</h3>
              <p>After earning her degrees:</p>
              <ul className="block-list">
                <p>After earning her degrees:</p>
                <li>1894: Hired to conduct research on magnetic steel for the Society for the Encouragement of National Industry.</li>
                <li>This was her first paid scientific research position.</li>
                <li>During this project, she met Pierre Curie, who later became her husband and research partner.</li>
                <li>Her early work in magnetism led her toward the deeper study of atomic properties, setting the foundation for her later discoveries.</li>
              </ul>
            </article>
          </section>
        </div>

        <h2 className="section-title">Major Positions Held by Marie Curie</h2>

        <div className="edu-grid">
          <section className="edu-left">
            <article className="edu-block">
              <h3 className="block-title">Laboratory Chief / Researcher at the Sorbonne (1894–1897)</h3>
              <p className="block-list">After her university studies, Marie began her scientific career as a researcher in Paris, working mainly on magnetism before turning to radioactivity.</p>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Head of Radioactivity Research — École Municipale de Physique et de Chimie Industrielles (1898–1904)</h3>
              <p className="block-list">
                Marie and Pierre conducted their landmark research here.<br/>
                She supervised laboratory work, conducted experiments, and co-discovered polonium and radium.
              </p>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Professor at the University of Paris (Sorbonne) (1906–1934)</h3>
              <p className="block-text">
               After Pierre Curie’s death, Marie Curie became:
              </p>
              <ul className="block-list">
                <li>The first woman to teach at the Sorbonne</li>
                <li>The first woman to hold a professorship there</li>
              </ul>
              <p className="block-text">She taught physics and continued advanced research on radioactivity.</p>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Founder and Director of the Radium Institute (Institut du Radium) in Paris (1914–1934)</h3>
              <p className="block-text">She oversaw:</p>
              <ul className="block-list">
                <li>Research divisions in physics, chemistry, and medicine</li>
                <li>Training of scientists</li>
                <li>Development of radium-based cancer therapies</li>
              </ul>
              <p className="block-text">This institute later became the modern Curie Institute, a world-leading cancer research center.</p>
            </article>

            <article className="edu-block">
              <h3 className="block-title">Director of Mobile X-ray Units (World War I) (1914–1918)</h3>
              <p className="block-text">During the First World War, Marie Curie:</p>
              <ul className="block-list">
                <li>Designed and operated mobile X-ray cars (“Little Curies”)</li>
                <li>Trained over 100 women in radiology</li>
                <li>Managed X-ray stations for military hospitals</li>
              </ul>
              <p className="block-text">This institute later became the modern Curie Institute, a world-leading cancer research center.</p>
            </article>

             <article className="edu-block">
              <h3 className="block-title">Member of the League of Nations Committee on Intellectual Cooperation (1922–1934)</h3>
              <p className="block-text">She was appointed to this international committee (the early version of UNESCO).</p>
              <p className="block-text">Marie helped shape global policies on:</p>
              <ul className="block-list">
                <li>Peaceful scientific cooperation</li>
                <li>Education</li>
                <li>Research development</li>
              </ul>
            </article>
          </section>
        </div>

        <h2 className="section-title">Career Guide</h2>
        <div className="chart_container">
            <img className="chart" src={Chart} alt="chart" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
