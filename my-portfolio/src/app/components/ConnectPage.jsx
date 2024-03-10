import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope} from "react-icons/fa";
import Link from "next/link";

const ConnectPage = () => {
  return (
    <section id="contact" className="md:flex md:justify-center md:items-center md:gap-8">
      <div className="md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 mt-28">
        <h2 className="text-4xl flex justify-center items-center font-bold text-black mt-4">Lets Connect!</h2>
        <p className="text-base md:text-lg text-center mt-2">
          I am enthusiastic about connecting with you! Whether you are seeking
          collaboration on a project or considering building a website from
          scratch, I invite you to reach out and explore my portfolio. I look
          forward to hearing from you!
        </p>
        <div className="flex justify-center items-center mt-2 gap-4 md:gap-8">
        <Link
          className="text-black/90 hover:text-stone-500 text-2xl mr-2"
          href={"https://www.linkedin.com/in/agathaamoako2"}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="text-black/90 hover:text-stone-500 text-2xl mr-2"
          href={"https://github.com/Adjoa20?tab=repositories"}
        >
          <FaGithub />
        </Link>
        <FaEnvelope className="text-black/90 hover:text-stone-500 text-2xl"/>
        <p className="mr-10">agatha.a.amoako@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;
