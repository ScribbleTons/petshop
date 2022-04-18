import "./../asserts/styles/form/form.css";
import React from 'react'

export default function Input({
  type = "text",
  label,
  required ,
  register,
  autoComplete="name"
}) {
  const labelLow = label.toLowerCase();
  return (
    <div className="input-group">
      <label htmlFor={labelLow} className="label">
        {label}
      </label>
      <input
      autoComplete={autoComplete}
        {...register(label, { required })}
        type={type}
        className="input"
        placeholder={"Enter " + labelLow}
        id={labelLow}
        aria-label={labelLow}
      />
    </div>
  );
}
