
import React,  { FunctionComponent, useEffect } from "react";
import {
  isMobile as libIsMobile,
  isTablet as libIsTablet
} from "react-device-detect";



useEffect(() => {
  let isMobile: boolean;
  if (process.env.NODE_ENV === "development") {
    isMobile = window.innerWidth < 1024;
  } else {
    isMobile = libIsMobile || libIsTablet || window.innerWidth < 1024;
  }
}, []);

interface NavbarProps {
  window?: ()=>Window
}
 
const Navbar: FunctionComponent<NavbarProps> = (props) => {

  return (
    <>
      <header
        id="header"
        className="header-sticky sticky-active"
        data-fullwidth="true"
      >
        <div className="header-inner">
          <div className="container">
            <div id="logo">
              <a
                href="/"
                className="logo vcenter"
                
              >
                Configurator
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
 
export default Navbar;