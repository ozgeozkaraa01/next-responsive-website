import React from "react";
import CircleBackground from "./CircleBackground";
import Container from "./Container";
import Title from "./Title";

const CallToAction = () => {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-[#111826] py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#e11d48" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Title
            title=" Lorem ipsum dolor sit amet"
            className="text-3xl text-white sm:text-4xl"
          />
          <p className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            deleniti iste ab! Sit maxime provident excepturi ullam, ratione,
            quas ipsum a maiores nisi perferendis ab iure ad blanditiis ipsam
            fugiat.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
