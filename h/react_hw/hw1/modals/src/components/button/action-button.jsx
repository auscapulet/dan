import React from "react";

import "./button.scss";

const actionButton = props => {
  const { className, text, action } = props;

  return (
    <div>
      <button className={`${className} btn`} onClick={action}>
        {text}
      </button>
    </div>
  );
};

export default actionButton;
