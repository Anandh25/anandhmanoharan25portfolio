const ContentContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`
        max-w-6xl
        mx-auto
        px-6
        md:px-8
        lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
