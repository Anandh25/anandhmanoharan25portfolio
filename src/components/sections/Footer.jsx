import ContentContainer from "../layout/ContentContainer";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-[#686000]/20">
      <ContentContainer>
        <div className="text-center">
          <h3
            className="
              text-[#0A0D6D]
              text-xl
              font-bold
              mb-3
            "
          >
            Anandh Manoharan
          </h3>

          <p className="text-[#444444]">
            Frontend Developer • MERN Stack Developer
          </p>

          <p
            className="
              text-[#686000]
              mt-6
              text-sm
            "
          >
            © 2026 Anandh Manoharan. All rights reserved.
          </p>
        </div>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
