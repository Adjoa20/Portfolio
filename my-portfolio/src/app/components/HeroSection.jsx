import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            {" "}
            Welcome, My Name Is Agatha{" "}
          </h1>
          <p className="text-[#adb7be] text-lg mb-6 lg:text-xl">
            I am a Full Stack Developer who can build you furniture or a website
            and project/product manage with efficiency and success. I have a
            knack for fixing and building anything and have a passion for
            transforming raw data into valuable insights with an enjoyable
            visual experience. I make things that work and fulfill a need and
            function AND I can make it look good!
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-center">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] relative justify-center">
          <Image
            src="/images/profilepic.png"
            alt="profilepic"
            className="rounded-full"
            width={400}
            height={400}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
