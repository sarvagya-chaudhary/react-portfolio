import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eius
          aliquam consequatur distinctio iusto dolore repellat facere, harum
          explicabo eum architecto molestias minima, tempore eos tenetur quia
          labore accusantium, eligendi ex! Molestiae ipsam praesentium nam
          inventore, alias harum sint veritatis, reiciendis porro facere quidem
          omnis ipsum fugiat doloremque, distinctio ut.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          voluptatum distinctio tempora! Quos porro illum atque voluptatem
          dolorum sint eius voluptatibus minima magni, asperiores sapiente
          repudiandae iure aperiam eum dolores? Voluptatibus nam distinctio,
          dicta sapiente suscipit, aperiam obcaecati fuga, cupiditate minus
          impedit quia rerum laborum assumenda quibusdam laudantium recusandae.
          Voluptatem?
        </p>
      </div>
    </div>
  );
};

export default About;
