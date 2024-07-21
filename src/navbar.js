import React, {useRef, useState, useEffect} from 'react';
import Hamburger from './hamburger';
import { gsap } from 'gsap';

function Navbar(){

    const magnetRef = useRef(null);

    const handleMouseMove = (event) => {
      const magnet = magnetRef.current;
      const x = event.nativeEvent.offsetX;
      const y = event.nativeEvent.offsetY;
      const magWidth = magnet.clientWidth;
      const magHeight = magnet.clientHeight;
      const moveX = x - magWidth / 2;
      const moveY = y - magHeight / 2;
      magnet.style.transform = `translate(${moveX * 0.8}px, ${moveY * 0.8}px)`;
    };
  
    const handleMouseOut = () => {
      const magnet = magnetRef.current;
      magnet.style.transform = '';
    };

    ////// navmenu

  //   const [activeIndex, setActiveIndex] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // // Function to handle menu toggle
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // // Function to update active index
  // const changeActive = (index) => {
  //   setActiveIndex(index);
  // };

  // // Function to reset active index on mouseleave
  // const backToDefault = () => {
  //   setActiveIndex(0); // Assuming the first item is the default active one
  // };

  // // Function to show target on hover
  // const showTarget = (index) => {
  //   // Implement logic to show target based on index
  //   console.log(`Showing target for index ${index}`);
  // };

  // // Use effect to initialize animations
  // useEffect(() => {
  //   const tl = gsap.timeline();
  
  //   // Animate body padding from its current state to the target state
  //   tl.fromTo(
  //     document.body,
  //     { padding: '0 80px 80px' },
  //     { padding: '0 80px 80px', delay:.5 }
  //   )
  //   // Animate nav-header opacity from its current state to the target state
  //  .fromTo(
  //     '.nav-header',
  //     { opacity: 0 },
  //     { opacity: 1, delay:.5 }
  //  , '-=.25'
  //   )
  //   // Animate content paragraph opacity from its current state to the target state
  //  .fromTo(
  //     '.content p',
  //     { opacity: 0 },
  //     { opacity: 1 }
  //  , '-=.25'
  //   )
  //   // Call toggleMenu after certain time
  //  .call(toggleMenu, [], null, 3)
  //   // Call toggleMenu again after another interval
  //  .call(toggleMenu, [], null, 4.5);
  
  //   return () => {
  //     tl.kill(); // Clean up timeline on unmount
  //   };
  // }, []);
  


    return(

        <div>
        <div className='navbar'>
            <ul className='navbar-list'>
                <li><span><Hamburger /></span></li>
                <li className='my-name magnet' ref={magnetRef}
                    onMouseMove={handleMouseMove}
                    onMouseOut={handleMouseOut}><a href='#.'>  Mihir Pratap Singh</a>
                </li> 
                
            </ul>

            {/* navbar menu  */}

            
        </div>
        {/* <div className="nav-header">
      <div className="nav">
        <div className="toggle" onClick={toggleMenu}>
          <div className="bar"></div>
        </div>
        <nav>
          <div className="showcase">
            <div className="showcase-container">
              <ul className="showcase-menu">
                <li>Hi!</li>
                <li>Hover over the list items or click them!</li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/124740/ice-final-white.svg" alt="" /></li>
                <li className="overlay" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1537949721120-e8f21f6698e6?ixlib=rb-0.3.5&s=96527c5eff0b3bd24946f77f4dc5a789&auto=format&fit=crop&w=634&q=80)" }}>
                  Lorem ipsum
                </li>
                <li style={{ backgroundImage: "url(https://d2kbkpwf98wmwo.cloudfront.net/images/menu/motion.png)" }}></li>
                <li>ABC</li>
                <li style={{ backgroundImage: "url(https://images.unsplash.com/photo-1537914675540-ec9f82fbd752?ixlib=rb-0.3.5&s=7d427165e9b4e7aa8d80b19c9d0b3128&auto=format&fit=crop&w=1316&q=80)" }}></li>
                <li style={{ backgroundImage: "url(https://d2kbkpwf98wmwo.cloudfront.net/images/menu/color.png)" }}></li>
              </ul>
            </div>
          </div>
          <div className="menu">
            <ul className="main-menu">
              <li className={activeIndex === 0? 'active' : ''} onMouseOver={() => showTarget(0)} onMouseLeave={backToDefault} onClick={() => changeActive(0)}>
                <a href="#.">Introduction</a>
              </li>
              <li className={activeIndex === 1? 'active' : ''} onMouseOver={() => showTarget(1)} onMouseLeave={backToDefault} onClick={() => changeActive(1)}>
                <a href="#.">The System</a>
              </li>
              <li className={activeIndex === 2? 'active' : ''} onMouseOver={() => showTarget(2)} onMouseLeave={backToDefault} onClick={() => changeActive(2)}>
                <a href="#.">Logo</a>
              </li>
              <li className={activeIndex === 3? 'active' : ''} onMouseOver={() => showTarget(3)} onMouseLeave={backToDefault} onClick={() => changeActive(3)}>
                <a href="#.">Composition</a>
              </li>
              <li className={activeIndex === 4? 'active' : ''} onMouseOver={() => showTarget(4)} onMouseLeave={backToDefault} onClick={() => changeActive(4)}>
                <a href="#.">Motion</a>
              </li>
              <li className={activeIndex === 5? 'active' : ''} onMouseOver={() => showTarget(5)} onMouseLeave={backToDefault} onClick={() => changeActive(5)}>
                <a href="#.">Typography</a>
              </li>
              <li className={activeIndex === 6? 'active' : ''} onMouseOver={() => showTarget(6)} onMouseLeave={backToDefault} onClick={() => changeActive(6)}>
                <a href="#.">Photography</a>
              </li>
              <li className={activeIndex === 7? 'active' : ''} onMouseOver={() => showTarget(7)} onMouseLeave={backToDefault} onClick={() => changeActive(7)}>
                <a href="#.">Color</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div> */}
    </div>

    );
}

export default Navbar;