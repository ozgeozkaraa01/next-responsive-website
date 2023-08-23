import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";

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
          <div className="flex items-center gap-6">
            <Button href="#" variant="outline" className="hidden lg:block">
              Get Advice
            </Button>
            <Button href="#" className="hidden lg:block">
              Hire Me
            </Button>
          </div>
          {/* Mobile NavLinks */}
        </Container>
      </nav>
    </header>
  );
};

export default Header;
