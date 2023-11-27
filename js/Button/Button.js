import React from 'react';

export default function Button({
  label,
  classNames,
  clickCbk,
  disabled,
}) {
  const buttonClicked = () => {
    if (!disabled) {
      clickCbk();
    }
  };

  return (
    <button
      type="submit"
      disabled={disabled ? 'disabled' : ''}
      className={`button ${classNames ? `${classNames}` : ''}`}
      onClick={() => buttonClicked()}
    >
     
      {label}
    </button>
  );
}
