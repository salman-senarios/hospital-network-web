import React from "react";

import style from "./textarea.module.scss";

const TextArea = ({
  errorMessage,
  label,
  name,
  placeholder,
  register,
  disabled,
  className,
}) => {
  return (
    <>
      <div className={`${style.note} ${className}`}>
        {label && (
          <label
            style={{
              color: errorMessage ? "#ff5050" : " #252733",
            }}
          >
            {label}
          </label>
        )}
        <textarea
          style={{
            border: errorMessage ? "1px solid #ff5050" : "1px solid #C4C4C4",
          }}
          placeholder={placeholder}
          name={name}
          rows={6}
          {...(register && register(name))}
          disabled={disabled || false}
        ></textarea>
        {errorMessage ? (
          <span className={style.errorMessage}>{errorMessage}</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default TextArea;
