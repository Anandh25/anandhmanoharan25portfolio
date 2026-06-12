import { useState } from "react";
import NavbarContainer from "../layout/NavbarContainer";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-6 md:pt-8">
      <NavbarContainer>
        <nav className="grid grid-cols-[auto_1fr_auto] items-center">
          {/* Logo */}
          <a
            href="#home"
            className="
              text-[#0A0D6D]
              font-semibold
              text-xl
              lg:text-2xl
              tracking-tight
            "
          >
            Anandh
          </a>

          {/* Desktop Navigation */}
          <div
            className="
              hidden
              md:flex
              justify-center
              gap-8
              lg:gap-10
            "
          >
            <a
              href="#about"
              className="text-[#0A0D6D] font-medium text-sm lg:text-base hover:-translate-y-0.5 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-[#0A0D6D] font-medium text-sm lg:text-base hover:-translate-y-0.5 transition-all duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-[#0A0D6D] font-medium text-sm lg:text-base hover:-translate-y-0.5 transition-all duration-300"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="text-[#0A0D6D] font-medium text-sm lg:text-base hover:-translate-y-0.5 transition-all duration-300"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="text-[#0A0D6D] font-medium text-sm lg:text-base hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:block
              border-2
              border-[#686000]
              bg-[#E9DD6B]
              px-5
              py-2
              text-[#0A0D6D]
              font-medium
              rounded-xl
              shadow-[2px_2px_0px_#686000]
              transition-all
              duration-300
              hover:translate-x-1
              hover:translate-y-1
              hover:shadow-none
            "
          >
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              md:hidden
              justify-self-end
              text-3xl
              text-[#0A0D6D]
            "
          >
            <HiOutlineMenuAlt3 />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              fixed
              inset-0
              bg-[#F1EFC4]
              z-50
              flex
              flex-col
              items-center
              justify-center
              gap-8
            "
          >
            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute
                top-6
                right-6
                text-4xl
                text-[#0A0D6D]
              "
            >
              <IoClose />
            </button>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-[#0A0D6D] text-xl font-medium"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-[#0A0D6D] text-xl font-medium"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-[#0A0D6D] text-xl font-medium"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="text-[#0A0D6D] text-xl font-medium"
            >
              Experience
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-[#0A0D6D] text-xl font-medium"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="
                border-2
                border-[#686000]
                bg-[#E9DD6B]
                px-5
                py-2
                text-[#0A0D6D]
                font-medium
                rounded-xl
                shadow-[2px_2px_0px_#686000]
              "
            >
              Resume
            </a>
          </div>
        )}
      </NavbarContainer>
    </header>
  );
};

export default Navbar;
