import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10 flex items-center gap-16">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Buttons */}
          {/* Mobile NavLinks */}
        </Container>
      </nav>
    </header>
  );
};

export default Header;
