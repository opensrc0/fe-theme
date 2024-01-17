/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function.
The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

const ToggleWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  width: ${(props) => props.small ? '40px' : '75px'};
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  text-align: left;

  ${(props) => props.small && css`
    
      & .toggle-switch-inner:after {
        content: "";
        height: 20px;
        line-height: 20px;
      }
  
      & .toggle-switch-inner:before {
        content: "";
        height: 20px;
        line-height: 20px;
      }

      & .toggle-switch-switch {
          width: 16px;
          right: 20px;
          margin: 2px;
      }
  `}

  // @media screen and (max-width: 991px) {
  //   .toggle-switch {
  //     transform: scale(0.9);
  //  }
  // }
  // @media screen and (max-width: 767px) {
  //   .toggle-switch {
  //     transform: scale(0.825);
  //  }
  // }
  // @media screen and (max-width: 575px) {
  //   .toggle-switch {
  //     transform: scale(0.75);
  //  }
  // }
`;

const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked {
  + {
    .toggle-switch-label {
      .toggle-switch-inner {
        margin-left: 0;
      }
      .toggle-switch-switch {
        right: 0px;
      }
    }
  }
  }
`;

const StyledLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
  margin: 0;

  &:focus {
    outline: none;
    > span {
      box-shadow: 0 0 2px 5px red;
    }
  }
  > span {
    &:focus {
      outline: none;
    }
  }
`;

const StyledSwitchInner = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;

  &:before {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 12px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
    content: attr(data-yes);
    text-transform: uppercase;
    padding-left: 10px;
    background-color: #2f855a;
    color: #fff;
  }

  &:after {
    display: block;
    float: left;
    width: 50%;
    height: 34px;
    padding: 0;
    line-height: 34px;
    font-size: 12px;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
    content: attr(data-no);
    text-transform: uppercase;
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
  ${(props) => props.disabled && css`
    background-color: #ddd;
    cursor: not-allowed;
    &:before {
      background-color: #ddd;
      cursor: not-allowed;
    }
  `}
`;

const StyledSwitchOuter = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
  ${(props) => props.disabled && css`
    background-color: #ddd;
    cursor: not-allowed;
    &:before {
      background-color: #ddd;
      cursor: not-allowed;
    }
  `}
`;

function ToggleSwitch({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}) {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <>
      <ToggleWrapper small={small}>
        <StyledCheckBox
          name={name}
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id ? (
          <StyledLabel
            tabIndex={disabled ? -1 : 1}
            onKeyDown={(e) => handleKeyPress(e)}
            htmlFor={id}
            className="toggle-switch-label"
          >
            <StyledSwitchInner
              disabled={disabled}
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex={-1}
              className="toggle-switch-inner"
            />
            <StyledSwitchOuter
              tabIndex={-1}
              disabled={disabled}
              className="toggle-switch-switch"
            />
          </StyledLabel>
        ) : null}
      </ToggleWrapper>

      {/* <div className={`toggle-switch${small ? ' small-switch' : ''}`}>
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id ? (
          <label
            className="toggle-switch-label"
            tabIndex={disabled ? -1 : 1}
            onKeyDown={(e) => handleKeyPress(e)}
            htmlFor={id}
          >
            <span
              className={
              disabled
                ? 'toggle-switch-inner toggle-switch-disabled'
                : 'toggle-switch-inner'
            }
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex={-1}
            />
            <span
              className={
              disabled
                ? 'toggle-switch-switch toggle-switch-disabled'
                : 'toggle-switch-switch'
            }
              tabIndex={-1}
            />
          </label>
        ) : null}
      </div> */}
    </>
  );
}

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
  optionLabels: ['Yes', 'No'],
  name: 'switch',
  small: false,
  disabled: false,
};

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ToggleSwitch;
