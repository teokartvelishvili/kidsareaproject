import React from "react";
const LabelInputs = (props) => {
  const labelText = props.labelText;
  const type = props.type;
  const name = props.name;
  const id = props.id;
  const placeholder = props.placeholder;
  return (
    <div className="label__input__container">
      <label for={id}>{labelText}</label>
      <input
        type={type}
        name={name}
        id={id}
        onClick={props.onClick}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabelInputs;
