import { Fragment } from "react";
import "./button.styles.scss";

const BUTTON_CLASSES = {
    'google':"google-sign-in",
    'inverted':"inverted"
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <Fragment>
      <button
        className={`button-container ${BUTTON_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </Fragment>
  );
}
