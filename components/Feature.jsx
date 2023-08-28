import React from "react";
import Container from "./Container";
import Title from "./Title";
import DesktopFeature from "./DesktopFeature";

const Feature = () => {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-[#111826] py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
          <Title
            title=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
            className="text-white text-2xl"
          />
          <p className="mt-2 text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsam
            consequatur quisquam nulla autem architecto aliquid reiciendis cum
            commodi omnis in error et hic porro, dolorem nobis libero suscipit
            totam.
          </p>
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden"></div>
    </section>
  );
};

export default Feature;
