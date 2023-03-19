import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 md:pt-0 pt-24 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As an avid explorer of the tech world, I have discovered a true
          passion for coding, specifically in the exciting fields of full stack
          development and data science. <br /> <br />
          My insatiable curiosity and natural creativity are fueled by my
          hobbies in art, craft, paintings, and music, which have given me a
          unique perspective on visual design and problem-solving. What sets me
          apart is my unwavering dedication to creating impactful projects in
          collaboration with a team of like-minded individuals. <br />
          <br />
          With my diverse skill set and boundless enthusiasm, I strive to
          combine technical expertise with a fresh and innovative approach to
          deliver solutions that are both efficient and aesthetically pleasing.
          I am excited to embark on a career that will allow me to continue
          exploring the endless possibilities of the tech industry, while
          contributing to meaningful projects that make a real difference.
        </p>
        {/* <br /> */}
        {/* <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          voluptatum distinctio tempora! Quos porro illum atque voluptatem
          dolorum sint eius voluptatibus minima magni, asperiores sapiente
          repudiandae iure aperiam eum dolores? Voluptatibus nam distinctio,
          dicta sapiente suscipit, aperiam obcaecati fuga, cupiditate minus
          impedit quia rerum laborum assumenda quibusdam laudantium recusandae.
          Voluptatem?
        </p> */}
      </div>
    </div>
  );
};

export default About;
