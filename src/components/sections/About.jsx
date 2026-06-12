import ContentContainer from "../layout/ContentContainer";

const About = () => {
  return (
    <section id="about" className="py-32">
      <ContentContainer>
        <div>
          <p
            className="
              text-[#686000]
              uppercase
              tracking-[4px]
              font-semibold
              mb-4
            "
          >
            About
          </p>

          <h2
            className="
              text-[#0A0D6D]
              text-4xl
              font-bold
              mb-8
            "
          >
            Who I Am
          </h2>

          <p
            className="
              text-[#444444]
              text-lg
              leading-9
              max-w-3xl
            "
          >
            I'm Anandh Manoharan, a Software Engineer with 5 years of
            professional experience. Over the years, I developed a strong
            interest in web development and focused on building modern,
            responsive applications using React, JavaScript, Tailwind CSS, and
            the MERN stack. I enjoy creating clean user experiences and solving
            real-world problems through code.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div
              className="bg-[#F7F4D7]
border-2
border-[#686000]
rounded-2xl
p-6
shadow-[3px_3px_0px_#686000] hover:-translate-y-2
hover:shadow-[5px_5px_0px_#686000]
transition-all
duration-300"
            >
              <h3 className="text-[#0A0D6D] text-3xl font-bold mb-2">5+</h3>
              <p className="text-[#444444]">Years Experience</p>
            </div>

            <div
              className="bg-[#F7F4D7]
border-2
border-[#686000]
rounded-2xl
p-6
shadow-[3px_3px_0px_#686000] hover:-translate-y-2
hover:shadow-[5px_5px_0px_#686000]
transition-all
duration-300"
            >
              <h3 className="text-[#0A0D6D] text-3xl font-bold mb-2">10+</h3>
              <p className="text-[#444444]">Projects Built</p>
            </div>

            <div
              className="bg-[#F7F4D7]
border-2
border-[#686000]
rounded-2xl
p-6
shadow-[3px_3px_0px_#686000] hover:-translate-y-2
hover:shadow-[5px_5px_0px_#686000]
transition-all
duration-300"
            >
              <h3 className="text-[#0A0D6D] text-3xl font-bold mb-2">MERN</h3>
              <p className="text-[#444444]">Tech Stack</p>
            </div>

            <div
              className="bg-[#F7F4D7]
border-2
border-[#686000]
rounded-2xl
p-6
shadow-[3px_3px_0px_#686000] hover:-translate-y-2
hover:shadow-[5px_5px_0px_#686000]
transition-all
duration-300"
            >
              <h3 className="text-[#0A0D6D] text-3xl font-bold mb-2">
                Available
              </h3>
              <p className="text-[#444444]">Immediate Joiner</p>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default About;
