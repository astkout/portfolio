// import { useEffect, useRef } from "react";
// import gsap from "gsap-trial";
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import programming from "../../../assets/images/programming.png";
import "./index.scss";

const Logo = () => {
  // const bgRef = useRef();
  // const outlineLogoRef = useRef();
  // const solidLogoRef = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 15,
  //     });

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 8,
  //     }
  //   );
  // }, []);

  return (
    <div className="logo-container" > 
      <img
        className="solid-logo"
        
        src={programming}
        alt="Developer"
      />

    </div>
  );
};

// ref={bgRef} this goes into logo-container
// ref={solidLogoRef} this goes into img

export default Logo;