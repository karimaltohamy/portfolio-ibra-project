import React, { Fragment, useEffect, useRef, useState } from "react";
import "./hero.scss";

const Hero = () => {
  const headerRef = useRef();
  const [opacity, setOpacity] = useState(1);
  const [tanslateY, setTanslateY] = useState(0)

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 100;
    const offset = headerHeight / 2;
    const handleScroll = () => {
        let calc = 1 - (window.scrollY - offset + range) / range;

        if (window.scrollY <= 60) {
            setTanslateY(window.scrollY)
        }
        
        setOpacity(calc)
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="hero_section">
        <div className="container m-auto">
          <div className="content" ref={headerRef} style={{opacity: opacity, transform: `translateY(-${tanslateY}px)` }}>
            <div className="inner">
              <span className="subtitle">
                Creating Digital Products For Creative People.
              </span>
              <h1 className="title">
                Hello, this is Ibra, I'm a <span>Graphic Designer</span> based
                in Czech Republic{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_height"></div>
    </Fragment>
  );
};

export default Hero;
