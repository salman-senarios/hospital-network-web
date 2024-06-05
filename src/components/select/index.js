import React from "react";
import style from "./select.module.scss";

const Select = ({
  name,
  value,
  onChange,
  children,
  register,
  label,
  disable,
  className,
  errorMessage,
}) => {
  return (
    <div style={{ position: "relative" }} className={className}>
      {label && (
        <label
          style={{
            color: errorMessage ? "#ff5050" : " #252733",
          }}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        {...(register && register(name))}
        className={style.select}
        style={{
          border: errorMessage ? "1px solid #ff5050" : "1px solid #c4c4c4",
        }}
        disabled={disable || false}
      >
        {children}
      </select>

      {errorMessage && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Select;
