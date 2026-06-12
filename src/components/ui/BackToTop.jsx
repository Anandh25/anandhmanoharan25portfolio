import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed
            bottom-6
            right-6
            z-50
            border-2
            border-[#686000]
            bg-[#E9DD6B]
            p-4
            rounded-xl
            shadow-[2px_2px_0px_#686000]
            hover:translate-x-1
            hover:translate-y-1
            hover:shadow-none
            transition-all
            duration-300
          "
        >
          <FaArrowUp className="text-[#0A0D6D]" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
