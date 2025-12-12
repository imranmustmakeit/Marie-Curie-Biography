import React, { useEffect, useRef } from "react";
import "./home.css";
import Navbar from "../component/navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const timeRunningRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 10000;

  // Auto slideshow reference
  const autoNextRef = useRef(null);
  const timeoutRef = useRef(null);

  const showSlider = (type) => {
    const carousel = carouselRef.current;
    const list = listRef.current;
    const items = list.querySelectorAll(".item");

    if (type === "next") {
      list.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      list.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    autoNextRef.current = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeAnimation();
  };

  const resetTimeAnimation = () => {
    const timeBar = timeRunningRef.current;
    timeBar.style.animation = "none";
    timeBar.offsetHeight; // reflow
    timeBar.style.animation = "runningTime 7s linear 1 forwards";
  };

  // Start first auto slide and animation
  useEffect(() => {
    resetTimeAnimation();
    autoNextRef.current = setTimeout(() => showSlider("next"), timeAutoNext);
  }, []);

  function WebNav(nav){
    const navi = useNavigate()
    if(nav === "caro-1"){
      navi('/biography')
    }
    if(nav === "caro-2"){
      navi('/research')
    }
  }

  return (
    <>
    <div className="carousel" ref={carouselRef}>
      
      <div className="navBackground">
        <Navbar />
      </div>

      {/* IMAGE LIST */}
      <div className="list" ref={listRef}>
        {[
          { img: "/media/h1.png",
            description: "Marie Curie was a pioneering physicist and chemist, the first woman to win two Nobel Prizes, renowned for discovering radioactivity, polonium, and radium.",
            buttonClass: "caro-1" 
          },
          { img: "/media/h2.png",
            description: "Solvay Conference (1927), Werner Heisenberg, Charles Eugene, rare, Albert Einstein, Max Planck, brilliant minds, people, 1927, Madame Curie, Erwin Schrodinger, vintage, Brussels Niels Bohr, Auguste Piccard, inventors, Solvay Conference, Geniuses, important, Color, Marie Curie, Scientists, Old graphy, Peter Debye", 
            buttonClass: "caro-2" 
          },
          { img: "/media/h3.png",
            description: "Marie Curie and her husband, Pierre, working together in their laboratory, surrounded by scientific equipment. It shows their dedication, curiosity, and partnership as they conducted groundbreaking research on radioactivity, highlighting the collaborative spirit that led to their discovery of polonium and radium.", 
            buttonClass: "caro-2" 
          },
          { img: "/media/h4.png",
            description: "Marie Curie immersed in her laboratory work, surrounded by beakers, test tubes, and scientific instruments. It reflects her focus, determination, and pioneering spirit, capturing the essence of her groundbreaking research on radioactivity and her remarkable contribution to science as a leading female scientist.", 
            buttonClass: "caro-2"
          },
        ].map((item, i) => (
          <div
            key={i}
            className="item"
            style={{
              backgroundImage: `
                url(${item.img})
              `
            }}

          >
            <div className="content">
              <div className="title">Marie Curie</div>
              <div className="des">{item.description}</div>
              <div className="btn">
                <button className={item.buttonClass} onClick={(e) => WebNav(e.target.className)}>Read more</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="arrows">
        <button className="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button className="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>

      {/* time bar */}
      <div className="timeRunning" ref={timeRunningRef}></div>
    </div>
    </>
  );
}
