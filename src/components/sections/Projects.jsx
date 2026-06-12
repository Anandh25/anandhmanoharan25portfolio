import ContentContainer from "../layout/ContentContainer";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-32">
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
          Projects
        </p>

        <h2
          className="
            text-[#0A0D6D]
            text-4xl
            font-bold
            mb-16
          "
        >
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-[#F7F4D7]
                border-2
                border-[#686000]
                rounded-2xl
                overflow-hidden
                shadow-[3px_3px_0px_#686000]
                hover:-translate-y-2
                hover:shadow-[6px_6px_0px_#686000]
                transition-all
                duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="
                    text-[#0A0D6D]
                    text-2xl
                    font-bold
                    mb-3
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-[#444444]
                    leading-7
                    mb-5
                  "
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        text-sm
                        rounded-lg
                        border
                        border-[#686000]
                        text-[#0A0D6D]
                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      border-2
                      border-[#686000]
                      bg-[#E9DD6B]
                      px-4
                      py-2
                      rounded-xl
                      text-[#0A0D6D]
                      font-medium
                      shadow-[2px_2px_0px_#686000]
                      hover:translate-x-1
                      hover:translate-y-1
                      hover:shadow-none
                      transition-all
                      duration-300
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      border-2
                      border-[#686000]
                      px-4
                      py-2
                      rounded-xl
                      text-[#0A0D6D]
                      font-medium
                      hover:bg-[#F0ECC3]
                      transition-all
                      duration-300
                    "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Projects;
