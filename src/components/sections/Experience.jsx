import ContentContainer from "../layout/ContentContainer";

const Experience = () => {
  return (
    <section id="experience" className="py-32">
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
          Experience
        </p>

        <h2
          className="
            text-[#0A0D6D]
            text-4xl
            font-bold
            mb-16
          "
        >
          Professional Journey
        </h2>

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
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-[#0A0D6D] text-2xl font-bold">Amazon</h3>

              <p className="text-[#444444] font-medium">Operations Associate</p>
            </div>

            <p className="text-[#686000] font-semibold">2020 - 2025</p>
          </div>

          <p
            className="
              text-[#444444]
              leading-8
              text-lg
            "
          >
            Worked in a fast-paced operational environment, collaborating with
            cross-functional teams, solving process-related issues, and
            maintaining high-quality standards. During this period, developed a
            strong interest in software development and transitioned into
            frontend engineering by building real-world React and MERN stack
            projects.
          </p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Experience;
