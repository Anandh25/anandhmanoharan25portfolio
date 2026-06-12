const NavbarContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-[1400px]
        mx-auto
        px-6
        md:px-10
        lg:px-16
        xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default NavbarContainer;
