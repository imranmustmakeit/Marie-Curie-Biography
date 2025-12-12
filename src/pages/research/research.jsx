import Hero from '/hero.png';
import Polonium from '/polonium.png';
import Experiment from '/experiment.png';
import Noble from '/noble.png';
import './research.css'
import Footer from '../../component/footer';

function Research() {
  return (
    <>
        <div className='container'>
            <div className='research_contain'>
                <div className='research_content'>
                    <h3>Research and Scientific contribution</h3>
                    <p>
                        Solvay Conference (1927), Werner Heisenberg, Charles Eugene, rare, Albert Einstein, Max Planck, brilliant minds, people, 1927, Madame Curie, Erwin Schrodinger, vintage, Brussels Niels Bohr, Auguste Piccard, inventors, Solvay Conference, Geniuses, important, Color, Marie Curie, Scientists, Old graphy, Peter Debye.
                    </p>
                </div>
                <div className='research_image'>
                    <img src={Hero} alt='research'/>
                </div>
            </div>
            <div className='discoveries_container'>
                <h3 className='heading'>Scientific discoveries</h3>
                <div className='discoveries_details'>
                    <h3>Discovery of Radioactivity</h3>
                    <p>        
                        Marie Curies most important scientific discovery was radioactivity, a term she herself created. In 1896, French physicist Henri Becquerel found that uranium salts emitted an invisible energy that could pass through materials. Marie became deeply curious and decided to study this phenomenon scientifically.
                        She performed experiments by:
                        <ul>
                            <li>
                                Measuring how different uranium compounds affected a device called an electrometer, which her husband Pierre invented.
                            </li>
                            <li>
                                Discovering that the amount of radiation depended only on the amount of uranium, not the chemical form. 
                            </li>
                        </ul>
                        This proved that the radiation came from the atom itself, not from chemical reactions. This was revolutionary and opened a completely new branch of physics and chemistry.
                        This work earned Marie Curie, Pierre Curie, and Henri Becquerel the 1903 Nobel Prize in Physics.
                    </p>
                </div>
                <div className='discovery_polonium'>
                    <div className='discovery_polonium_content'>
                        <h3>Discovery of Polonium and Radium</h3>
                        <p>          
                            While studying a mineral called pitchblende (which contains uranium), Marie found that:
                            The mineral produced more radiation than uranium itself. This meant there must be other radioactive elements inside the mineral.
                            Marie and Pierre spent years refining and processing tons of pitchblende:
                            Boiling it
                            Dissolving it
                            Crystallizing it All by hand, in harsh conditions.
                            Their hard work led to two new elements:
                            Polonium
                            Named after Maries home country, Poland. It was a new radioactive metal, extremely powerful but difficult to isolate.
                            Radium
                            A far more radioactive and more stable element. Its bluish glow shocked scientists. Radium was later used in:
                            Early cancer treatments
                            Scientific research
                            Medical X-ray devices
                            Their discovery of these elements changed chemistry forever.
                            For this breakthrough, Marie Curie won the 1911 Nobel Prize in Chemistry for:
                            Discovering polonium and radium
                            Isolating radium as a pure metal
                            Studying their chemical and physical properties
                            She became the first person in history to win two Nobel Prizes in two different sciences.
                        </p>
                    </div>
                    <div className='discovery_image'>
                        <img src={Polonium} alt='research'/>
                    </div>
                </div>
            </div>
            <div className='experiment_container'>
                <h3>Experiments carried out</h3>
                <div className='experiment_contain'>
                    <div className='experiment_content'>
                        <p>
                            Marie and Pierre performed many pioneering experiments, including:
                            Isolation of radioactive isotopes
                            They worked to separate tiny amounts of radioactive substances from tons of raw material, developing new chemical processes. This allowed scientists to study pure samples for the first time.
                            Radiation measurement
                            Pierre helped Marie by inventing and improving instruments to measure radiation with precision. Their methods are still the foundation of modern radiation measurement.
                            Biological experiments
                            They observed how radiation affected living organisms. These experiments later inspired the medical use of radiation to treat cancer.
                            Understanding atomic structure
                            Their work proved that atoms were not indivisible “solid spheres,” as previously believed. This opened the door for:
                            Modern nuclear physics
                            Quantum mechanics
                            Atomic energy research
                            Their discoveries completely reshaped science.
                        </p>
                    </div>
                    <div className="experiment">
                        <img src={Experiment} alt="experiment" />
                    </div>
                </div>
            </div>
            <div className='contribution_container'>
                <h3>Contributions to humanity</h3>
                <div className='world_war_container'>
                    <h4>World War I</h4>
                    <p>           
                        Curie in a mobile X-ray vehicle, c. 1915 During World War I, Curie recognised that wounded soldiers were best served if operated upon as soon as possible.[52] She saw a need for field radiological centres near the front lines to assist battlefield surgeons,[51] including to obviate amputations when in fact limbs could be saved.[53][54] After a quick study of radiology, anatomy, and automotive mechanics, she procured X-ray equipment, vehicles, and auxiliary generators, and she developed mobile radiography units, which came to be popularly known as petites Curies ("Little Curies").[51] She became the director of the Red Cross Radiology Service and set up France's first military radiology centre, operational by late 1914.[51] Assisted at first by a military doctor and her 17-year-old daughter Irène, Curie directed the installation of 20 mobile radiological vehicles and another 200 radiological units at field hospitals in the first year of the war.[43][51] Later, she began training other women as aides.[55]
                        In 1915, Curie produced hollow needles containing "radium emanation", a colourless, radioactive gas given off by radium, later identified as radon, to be used for sterilising infected tissue. She provided the radium from her own one-gram supply.[55] It is estimated that over a million wounded soldiers were treated with her X-ray units.[19][43] Busy with this work, she carried out very little scientific research during that period.[43] In spite of all her humanitarian contributions to the French war effort, Curie never received any formal recognition of it from the French government.[51]
                        Also, promptly after the war started, she attempted to donate her gold Nobel Prize medals to the war effort but the French National Bank refused to accept them.[55] She did buy war bonds, using her Nobel Prize money.[55] She said:
                        I am going to give up the little gold I possess. I shall add to this the scientific medals, which are quite useless to me. There is something else: by sheer laziness I had allowed the money for my second Nobel Prize to remain in Stockholm in Swedish crowns. This is the chief part of what we possess. I should like to bring it back here and invest it in war loans. The state needs it. Only, I have no illusions: this money will probably be lost.[52]
                        She was also an active member in committees of Poles in France dedicated to the Polish cause.[56] After the war, she summarised her wartime experiences in a book, Radiology in War (1919).[55]
                    </p>
                    <h4>Postwar years</h4>
                    <p>
                        In 1920, for the 25th anniversary of the discovery of radium, the French government established a stipend for her; its previous recipient was Louis Pasteur, who had died in 1895.[43] In 1921, Curie toured the United States to raise funds for research on radium. Marie Mattingly Meloney, after interviewing Curie, created a Marie Curie Radium Fund and helped publicise her trip.[43][57][d]
                        In 1921 U.S. President Warren G. Harding received Curie at the White House to present her with the 1 gram of radium collected in the United States.[2][59] Before the meeting, recognising her growing fame abroad, and embarrassed by the fact that she had no French official distinctions to wear in public, the French government had offered her a Legion of Honour award, but she refused it.[59][60] In 1922 she became a fellow of the French Academy of Medicine.[43] She also travelled to other countries, appearing publicly and giving lectures in Belgium, Brazil, Spain, and Czechoslovakia.[61]
                        Marie and daughter Irène, 1925
                        Led by Curie, the Institute produced four more Nobel Prize winners, including her daughter Irène Joliot-Curie and her son-in-law, Frédéric Joliot-Curie.[62] Eventually, it became one of the world's four major radioactivity-research laboratories, the others being the Cavendish Laboratory, with Ernest Rutherford; the Institute for Radium Research, Vienna, with Stefan Meyer; and the Kaiser Wilhelm Institute for Chemistry, with Otto Hahn and Lise Meitner.[62][63]
                        In August 1922, Curie became a member of the League of Nations' newly created International Committee on Intellectual Cooperation.[64][10] She sat on the committee until 1934 and contributed to League of Nations' scientific coordination with other prominent researchers such as Albert Einstein, Hendrik Lorentz, and Henri Bergson.[65] In 1923 she wrote a biography of her late husband, titled Pierre Curie.[66] In 1925 she visited Poland to participate in a ceremony laying the foundations for Warsaw's Radium Institute.[43] Her second American tour, in 1929, succeeded in equipping the Warsaw Radium Institute with radium; the Institute opened in 1932, with her sister Bronisława its director.[43][59] These distractions from her scientific labours, and the attendant publicity, caused her much discomfort but provided resources for her work.[59] In 1930, she was elected to the International Atomic Weights Committee, on which she served until her death.[67] In 1931, Curie was awarded the Cameron Prize for Therapeutics of the University of Edinburgh.[68]
                    </p>
                </div>
            </div>
            <div className='noble_container'>
                <h3>About Nobel Price</h3>
                <div className='noble'>
                    <p>
                        In December 1903 the Royal Swedish Academy of Sciences awarded Pierre Curie, Marie Curie, and Henri Becquerel the Nobel Prize in Physics,[38] "in recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel."[21] At first the committee had intended to honour only Pierre Curie and Henri Becquerel, but a committee member and advocate for women scientists, Swedish mathematician Magnus Gösta Mittag-Leffler, alerted Pierre to the situation, and after his complaint, Marie's name was added to the nomination.[39] Marie Curie was the first woman to be awarded a Nobel Prize.[21]
                        Curie and her husband declined to go to Stockholm to receive the prize in person; they were too busy with their work, and Pierre Curie, who disliked public ceremonies, was feeling increasingly ill.[37][39] As Nobel laureates were required to deliver a lecture, the Curies finally undertook the trip in 1905.[39] The award money allowed the Curies to hire their first laboratory assistant.[39] Following the award of the Nobel Prize, and galvanised by an offer from the University of Geneva, which offered Pierre Curie a position, the University of Paris gave him a professorship and the chair of physics, although the Curies still did not have a proper laboratory.[21][34][35] Upon Pierre Curie's complaint, the University of Paris relented and agreed to furnish a new laboratory, but it would not be ready until 1906.[39] 
                        In December 1904, Curie gave birth to their second daughter, Ève.[39] She hired Polish governesses to teach her daughters her native language, and sent or took them on visits to Poland.[7]   
                        On 19 April 1906, Pierre Curie died in a road accident. Walking across the Rue Dauphine in heavy rain, he was struck by a horse-drawn vehicle and fell under its wheels, which fractured his skull and killed him instantly.[21][40] Curie was devastated by her husband's 
                    </p>
                    <div className='noble_image_container'>
                        <img src={Noble} alt='noble' />
                    </div>
                </div>
                <span>
                        to retain the chair that had been created for her late husband and offer it to Marie. She accepted it, hoping to create a world-class laboratory as a tribute to her husband Pierre.[41][42] She was the first woman to become a professor at the University of Paris.[21]
                        Curie's quest to create a new laboratory did not end with the University of Paris, however. In her later years, she headed the Radium Institute (Institut du radium, now Curie Institute, Institut Curie), a radioactivity laboratory created for her by the Pasteur Institute and the University of Paris.[42] The initiative for creating the Radium Institute had come in 1909 from Pierre Paul Émile Roux, director of the Pasteur Institute, who had been disappointed that the University of Paris was not giving Curie a proper laboratory and had suggested that she move to the Pasteur Institute.[21][43] Only then, with the threat of Curie leaving, did the University of Paris relent, and eventually the Curie Pavilion became a joint initiative of the University of Paris and the Pasteur Institute.[43]
                        At the first Solvay Conference (1911), Curie (seated second from right) confers with Henri Poincaré. Standing nearby are Rutherford (fourth from right), Einstein (second from right), and Paul Langevin (far right).
                        In 1910 Curie succeeded in isolating radium; she also defined an international standard for radioactive emissions that was eventually named for her and Pierre: the curie.[42] Nevertheless, in 1911 the French Academy of Sciences failed, by one[21] or two votes,[44] to elect her to membership in the academy. Elected instead was Édouard Branly, an inventor who had helped Guglielmo Marconi develop the wireless telegraph.[45] It was only over half a century later, in 1962, that a doctoral student of Curie's, Marguerite Perey, became the first woman elected to membership in the academy.
                        Despite Curie's fame as a scientist working for France, the public's attitude tended toward xenophobia—the same that had led to the Dreyfus affair—which also fuelled false speculation that Curie was Jewish.[21][44] During the French Academy of Sciences elections, she was vilified by the right-wing press as a foreigner and atheist.[44] Her daughter later remarked on the French press's hypocrisy in portraying Curie as an unworthy foreigner when she was nominated for a French honour, but portraying her as a French heroine when she received foreign honours such as her Nobel Prizes.[21]
                        In 1911, it was revealed that Curie was involved in a year-long affair with physicist Paul Langevin, a former student of Pierre Curie's,[19]: 44, 90  a married man who was estranged from his wife.[44] This resulted in a press scandal that was exploited by her academic opponents. Curie (then in her mid-40s) was five years older than Langevin and was misrepresented in the tabloids as a foreign Jewish home-wrecker.[46] When the scandal broke, she was away at a conference in Belgium; on her return, she found an angry mob in front of her house and had to seek refuge, with her daughters, in the home of her friend Camille Marbo.[44]
                        1911 Nobel Prize diploma
                        International recognition for her work had been growing to new heights, and the Royal Swedish Academy of Sciences, overcoming opposition prompted by the Langevin scandal, honoured her a second time, with the 1911 Nobel Prize in Chemistry.[15] This award was "in recognition of her services to the advancement of chemistry by the discovery of the elements radium and polonium, by the isolation of radium and the study of the nature and compounds of this remarkable element".[47] Because of the negative publicity due to her affair with Langevin, the chair of the Nobel committee, Svante Arrhenius, attempted to prevent her attendance at the official ceremony for her Nobel Prize in Chemistry, citing her questionable moral standing. Curie replied that she would be present at the ceremony, because "the prize has been given to her for her discovery of polonium and radium" and that "there is no relation between her scientific work and the facts of her private life".[48][49]
                        She was the first person to win or share two Nobel Prizes, and remains alone with Linus Pauling as Nobel laureates in two fields each. A delegation of celebrated Polish men of learning, headed by novelist Henryk Sienkiewicz, encouraged her to return to Poland and continue her research in her native country.[15] Curie's second Nobel Prize enabled her to persuade the French government to support the Radium Institute, built in 1914, where research was conducted in chemistry, physics, and medicine.[43] A month after accepting her 1911 Nobel Prize, she was hospitalised with depression and a kidney ailment. For most of 1912, she avoided public life but did spend time in England with her friend and fellow physicist Hertha Ayrton. She returned to her laboratory only in December, after a break of about 14 months.[47]
                        In 1912 the Warsaw Scientific Society offered her the directorship of a new laboratory in Warsaw but she declined, focusing on the developing Radium Institute to be completed in August 1914, and on a new street named Rue Pierre-Curie (today rue Pierre-et-Marie-Curie).[43][47] She was appointed director of the Curie Laboratory in the Radium Institute of the University of Paris, founded in 1914.[50] She visited Poland in 1913 and was welcomed in Warsaw but the visit was mostly ignored by the Russian authorities. The institute's development was interrupted by the First World War, as most researchers were drafted into the French Army; it fully resumed its activities after the war, in 1919.[43][47][51]
                    </span>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Research
