import ContentContainer from "../layout/ContentContainer";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <ContentContainer>
        <p
          className="
            text-[#686000]
            uppercase
            tracking-[4px]
            font-semibold
            mb-4
          "
        >
          Contact
        </p>

        <h2
          className="
            text-[#0A0D6D]
            text-4xl
            font-bold
            mb-6
          "
        >
          Let's Work Together
        </h2>

        <p
          className="
            text-[#444444]
            text-lg
            leading-8
            max-w-2xl
            mb-12
          "
        >
          I'm actively looking for Frontend and MERN Stack opportunities. Feel
          free to reach out if you'd like to discuss a project, collaboration,
          or job opportunity.
        </p>

        <div
          className="
            bg-[#F7F4D7]
            border-2
            border-[#686000]
            rounded-2xl
            p-8
            shadow-[3px_3px_0px_#686000]
          "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <div
              className="
  border-2
  border-[#686000]
  rounded-xl
  p-5
  hover:-translate-y-1
  transition-all
"
            >
              <a
                href="mailto:anandhmanoharan25@gmail.com"
                className="flex items-center gap-2 text-[#0A0D6D] font-semibold mb-2"
              >
                Email
                <FiExternalLink />
              </a>

              <p className="text-[#444444]">Send Email</p>
            </div>

            {/* LinkedIn */}
            <div
              className="
  border-2
  border-[#686000]
  rounded-xl
  p-5
  hover:-translate-y-1
  transition-all
"
            >
              <a
                href="https://www.linkedin.com/in/anandh-manoharan-3b3633343/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0A0D6D] font-semibold mb-2"
              >
                LinkedIn
                <FiExternalLink />
              </a>

              <p className="text-[#444444]">Connect With Me</p>
            </div>

            {/* GitHub */}
            <div
              className="
  border-2
  border-[#686000]
  rounded-xl
  p-5
  hover:-translate-y-1
  transition-all
"
            >
              <a
                href="https://github.com/Anandh25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0A0D6D] font-semibold mb-2"
              >
                GitHub
                <FiExternalLink />
              </a>

              <p className="text-[#444444]">View Projects</p>
            </div>

            {/* Mobile Contact */}
            <div
              className="
  border-2
  border-[#686000]
  rounded-xl
  p-5
  hover:-translate-y-1
  transition-all
"
            >
              <h3 className="text-[#0A0D6D] font-semibold mb-2">Phone</h3>

              <a
                href="tel:+919942820853"
                className="
    text-[#444444]
    hover:text-[#0A0D6D]
    transition-all
  "
              >
                +91 9942820853
              </a>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Contact;
