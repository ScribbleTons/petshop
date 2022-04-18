import "./../asserts/styles/form/form.css";
 import React from "react"
export default function TextArea({
  child,
  label="",
  rows = 4,
  cols = 30,
  placeholder,
 required,
 register,
 autoComplete="message"
}) {
    
  return (
    <div className="input-group">
      <label htmlFor={label.toLowerCase()} className="label">
        {label}
      </label>
      <textarea
        {...register(label, { required })}
        placeholder={placeholder}
        className="input"
     autoComplete={autoComplete}
        id={label.toLowerCase()}
        cols={cols}
        rows={rows}
      >
        {child}
      </textarea>
    </div>
  );
}
