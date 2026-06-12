import ContentContainer from "../layout/ContentContainer";

const frontendSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "React",
  "Tailwind CSS",
];

const backendSkills = ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"];

const tools = ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel"];

const SkillBadge = ({ skill }) => {
  return (
    <div
      className="
        bg-[#F7F4D7]
        border-2
        border-[#686000]
        rounded-xl
        px-5
        py-3
        text-[#0A0D6D]
        font-medium
        hover:-translate-y-1
        hover:shadow-[3px_3px_0px_#686000]
        transition-all
        duration-300
      "
    >
      {skill}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32">
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
          Skills
        </p>

        <h2
          className="
            text-[#0A0D6D]
            text-4xl
            font-bold
            mb-16
          "
        >
          Technologies I Work With
        </h2>

        {/* Frontend */}
        <div className="mb-14">
          <h3
            className="
              text-[#0A0D6D]
              text-2xl
              font-bold
              mb-6
            "
          >
            Frontend
          </h3>

          <div className="flex flex-wrap gap-4">
            {frontendSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-14">
          <h3
            className="
              text-[#0A0D6D]
              text-2xl
              font-bold
              mb-6
            "
          >
            Backend
          </h3>

          <div className="flex flex-wrap gap-4">
            {backendSkills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3
            className="
              text-[#0A0D6D]
              text-2xl
              font-bold
              mb-6
            "
          >
            Tools
          </h3>

          <div className="flex flex-wrap gap-4">
            {tools.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Skills;
