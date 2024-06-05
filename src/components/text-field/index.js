import React from "react";

import style from "./textfield.module.scss";

const TextField = ({
  label,
  icon,
  value,
  name,
  type,
  placeholder,
  className,
  iconStyle,
  handleChange,
  errorMessage,
  register,
  readyOnly,
  disabled,
  handleIconClick,
}) => {
  const handleKeyPress = (e) => {
    if ((e.which !== 8 && e.which !== 0 && e.which < 48) || e.which > 57) {
      e.preventDefault();
    }
  };

  return (
    <div className={`${style.textFieldWrapper} ${className}`}>
      {label && (
        <label
          style={{
            color: errorMessage ? "#ff5050" : " #464646",
          }}
        >
          {label}
        </label>
      )}
      <div
        className={style.inputDiv}
        style={{
          border: errorMessage ? "1px solid #ff5050" : "1px solid #C4C4C4",
        }}
      >
        <input
          type={type || "text"}
          placeholder={placeholder || ""}
          name={name || ""}
          value={value && value}
          onChange={handleChange && handleChange}
          style={{
            paddingRight: icon && "45px",
            background: disabled && "#E5E7E8",
          }}
          {...(register && register(name))}
          disabled={disabled || false}
          readOnly={readyOnly || false}
          onKeyPress={type === "number" ? handleKeyPress : undefined}
        />
        {icon && (
          <div className={iconStyle}>
            <img
              src={icon}
              alt=""
              className={style.icon}
              onClick={handleIconClick && handleIconClick}
            />
          </div>
        )}
      </div>
      {errorMessage && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default TextField;
