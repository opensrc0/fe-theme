import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classNames from 'classnames/bind';
import fontColor from '../component/theme/font/fontColorConst';

export const RadioWrapper = styled.div`
  font-size: 12px;
  width: auto;
  padding: 0;
  padding-right: 16px;
  margin: 0;
  margin-top: 8px;
  margin-bottom: 16px;
  display: inline-block;
`;

export const RadioLabel = styled.label`
  margin: 0;
  font-size: 14px;
  width: auto;
  padding-left: 30px;
  position: relative;
  cursor: pointer;
  font-weight: 400;
  line-height: 16px;
  display: inline-block;
`;

export const RadioCheckmark = styled.span`
  background: ${fontColor.white};
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  outline: none;
  border-radius: 50%;
  border: 1px solid ${fontColor.gray12};

  &::before {
    content: '';
    background: ${fontColor.blackLight};
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    outline: none;
    border-radius: 50%;
    border: none;
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 2px;
    width: 5px;
    height: 8px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    background: none;
    border: none;
  }

  ${(props) => [
    props.theme === 'secondary' && css`

    &:before {
      background: ${fontColor.link};
    }
  `,
    props.theme === 'primary' && css`
      &:before {
        background: ${fontColor.red};
      }
    `,
  ]}
`;

export const RadioText = styled.div`
  color: ${fontColor.blackLight};
  font-size: 14px;
  line-height: 20px;
  font-family: 'Open Sans', sans-serif;
  outline: none;
`;

export const RadioInput = styled.input`
  color: ${fontColor.gray13};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${fontColor.gray6};
  background-color: transparent;
  padding-left: 20px;
  outline: none;
  box-shadow: none;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  left: 0;
  height: 100%;
  margin: 0;
  line-height: normal;

  &:checked ~ ${RadioCheckmark} {
    &::after,
    &::before {
      display: block;
    }
  }

  &:hover ~ ${RadioText} {
    color: ${fontColor.black};
  }

  &:checked ~ ${RadioText} {
    color: ${fontColor.blackLight};
    font-weight: 500;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${(props) => [
    props.theme === 'secondary' && css`
    &:checked ~ ${RadioCheckmark} {
      background: none;
      border: 1px solid ${fontColor.link};
    }
    &:checked ~ ${RadioText} {
      font-weight: 500;
    }
  `,
    props.theme === 'primary' && css`
    &:checked ~ ${RadioCheckmark} {
      background: none;
      border: 1px solid ${fontColor.red};
    }
    &:checked ~ ${RadioText} {
      font-weight: 500;
    }
  `,
  ]}
  &:disabled ~ ${RadioCheckmark} {
    background: ${fontColor.gray3};
    border: 1px solid ${fontColor.gray1};
    cursor: not-allowed;

    &::before {
      background: ${fontColor.gray11};
    }
  }

  &:disabled ~ ${RadioText} {
    opacity: 0.65;
    color: ${fontColor.gray13};
    cursor: not-allowed;
  }
`;

function RadioButton({ id,
  name,
  value,
  refCallback,
  isChecked,
  checked,
  isDisabled,
  children,
  onClick,
  onChange,
  theme,
  classes: {
    root: rootCls,
    label: labelCls,
    input: inputCls,
    checkmark: checkmarkCls,
    text: textCls,
  } }) {
  const handleClick = (event) => {
    onClick(event);
  };

  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <RadioWrapper className={classNames(rootCls)}>
      <RadioLabel
        htmlFor={id}
        className={classNames(labelCls, {
          // radioBox__label__checked: isChecked || checked,
          // radioLabelDisabled: isDisabled,
        })}
      >
        <RadioInput
          type="radio"
          id={id}
          theme={theme}
          name={name}
          value={value}
          ref={refCallback}
          disabled={isDisabled}
          checked={checked || isChecked}
          onClick={handleClick}
          onChange={handleChange}
          className={classNames(inputCls)}
        />
        <RadioCheckmark className={classNames(checkmarkCls)} theme={theme} />
        <RadioText className={classNames(textCls)}>{children || value}</RadioText>
      </RadioLabel>
    </RadioWrapper>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isDisabled: PropTypes.bool,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
  ]),
  refCallback: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  classes: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

RadioButton.defaultProps = {
  name: '',
  value: '',
  isChecked: false,
  checked: undefined,
  isDisabled: false,
  theme: 'secondary',
  refCallback: null,
  onClick: () => { },
  onChange: () => { },
  classes: {},
  children: null,
};

export default RadioButton;
