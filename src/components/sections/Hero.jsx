import ContentContainer from "../layout/ContentContainer";
import profile from "../../assets/images/profil.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Hero = () => {
  return (
    <section
      id="home"
      className="pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24"
    >
      <ContentContainer>
        <div className="grid lg:grid-cols-[80px_45%_55%] items-start gap-16">
          {/* Social Icons */}
          <div className="hidden lg:flex flex-col items-start -ml-16">
            <div className="h-40 w-[2px] bg-[#686000] mb-14"></div>
            <a
              href="https://github.com/Anandh25"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#0A0D6D] font-medium hover:translate-x-1 transition-all duration-300 mb-6 "
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anandh-manoharan-3b3633343/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#0A0D6D] font-medium hover:translate-x-1 transition-all duration-300 mb-6 "
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:anandhmanoharan25@gmail.com"
              className=" text-[#0A0D6D] font-medium hover:translate-x-1 transition-all duration-300 mb-6 "
            >
              <MdEmail />
            </a>
            <a
              href="https://www.instagram.com/anandh_mano/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-[#0A0D6D] font-medium hover:translate-x-1 transition-all duration-300 mb-6 "
            >
              <FaInstagram />
            </a>
          </div>
          {/* Content */}
          <div className="pt-12">
            <p className=" text-[#0A0D6D] font-medium text-lg mb-3 ">
              Hello, I'm Anandh
            </p>
            <h1 className=" text-[#0A0D6D] text-5xl lg:text-6xl font-bold leading-tight mb-6 ">
              Frontend <br /> Developer
            </h1>
            <p className=" text-[#444444] text-lg leading-9 max-w-xl mb-8 font-normal pt-4 ">
              Software Engineer with 5 years of experience building responsive
              web applications using React, JavaScript, Tailwind CSS, and the
              MERN stack.
            </p>
            <div className="flex gap-5 mt-8 pt-10">
              <button className="border-2 border-[#686000] bg-[#E9DD6B] px-6 py-3 text-[#0A0D6D] font-medium rounded-xl shadow-[2px_2px_0px_#686000] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer">
                <a href="#projects">View Projects</a>
              </button>
              <button className="border-2 border-[#686000] bg-[#E9DD6B] px-5 py-2 text-[#0A0D6D] font-medium rounded-xl shadow-[2px_2px_0px_#686000] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </button>
            </div>
          </div>
          {/* Portrait */}
          <div className="relative flex justify-center">
            <img
              src={profile}
              alt="Anandh Manoharan"
              className=" w-full max-w-[500px] mx-auto relative z-10 "
            />
            {/* <span className=" absolute top-16 right-24 text-[#686000] text-4xl font-bold " > + </span> <span className=" absolute top-36 right-10 text-[#686000] text-3xl font-bold " > * </span> <span className=" absolute top-36 right-10 text-[#686000] text-3xl font-bold rotate-45 " > / </span> */}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};
export default Hero;
