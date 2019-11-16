import React from "react";
import PropTypes from "prop-types";

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

actionButton.propTypes = {
  text: PropTypes.string
};

export default actionButton;
