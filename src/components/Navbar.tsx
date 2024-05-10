import React, { FunctionComponent } from "react";
import {
  isMobile as libIsMobile,
  isTablet as libIsTablet
} from "react-device-detect";
let isMobile:Boolean;

isMobile = libIsMobile || libIsTablet || window.innerWidth < 1024;

interface NavbarProps {
  window?: ()=>Window
}
import logo from './../assets/img-logo.png';
 
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
                <img
                  src='./../assets/img-logo'
                  style={
                    isMobile
                      ? { marginTop: "7px", display: "inline-block" }
                      : { display: "inline-block" }
                  }
                  className={isMobile ? "p-l-20 p-r-15" : "p-r-20"}
                />
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