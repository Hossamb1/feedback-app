import React from "react";

const Button = ({
  children,
  version,
  type,
  isDisabled,
  onClick,
  onMouseLeaving,
}) => {
  return (
    <div onMouseEnter={onClick} onMouseLeave={onMouseLeaving}>
      <button
        type={type}
        disabled={isDisabled}
        className={`btn btn-${version}`}
      >
        {children}
      </button>
    </div>
  );
};
Button.defaultProps = {
  version: "primary",
  type: "primary",
  isDisabled: false,
};

export default Button;
