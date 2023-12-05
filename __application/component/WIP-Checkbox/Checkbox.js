import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import styled, { css } from 'styled-components';
import fontColor from '../component/theme/font/fontColorConstnst';
import fontWeight from '../component/theme/font/fontWeightConstnst';

const CheckboxWrapper = styled.div`
  width: auto;
  padding: 0;
  padding-left: 0;
  margin: 0;
  margin-bottom: 0;
  display: inline-block;
`;

const CheckboxLabel = styled.label`
  margin: 0;
  font-size: 14px;
  width: auto;
  padding-left: 30px;
  position: relative;
  cursor: pointer;
  font-weight: 400;
  line-height: 16px;
  display: inline-block;
  outline: none;

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const CheckboxText = styled.span`
  color: ${(props) => fontColor[props.checkboxColor]};
  font-size: 14px;
  line-height: 18px;
  font-weight: ${(props) => fontWeight[props.fontWeight]};
  font-family: 'Open Sans', sans-serif;
  outline: none;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 13px;
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;
const CheckboxCheckmark = styled.span`
  background: ${fontColor.white};
  position: absolute;
  top: 0;
  left: 2px;
  width: 18px;
  height: 18px;
  outline: none;
  border: 1px solid #cfcfcf;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 2px;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CheckboxError = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: ${fontColor.danger};
  margin-top: 6px;
  margin-bottom: 6px;
  padding-left: 4px;
`;

const CheckboxInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #cfcfcf;
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

  &:checked ~ ${CheckboxCheckmark} {
    &::before {
      display: block;
    }

    &::after {
      display: block;
      left: 4px;
      top: 1px;
      width: 5px;
      height: 10px;
    }
  }

  &:checked ~ ${CheckboxCheckmark} {
    background-color: ${fontColor.blackLight};
    border: 1px solid ${fontColor.blackLight};
  }

  ${(props) => [
    props.theme === 'secondary' && css`
        &:checked ~ ${CheckboxCheckmark} {
          background-color: ${fontColor.darkBlue};
          border: 1px solid ${fontColor.darkBlue};
        }
      `,
    props.theme === 'success' && css`
      &:checked ~ ${CheckboxCheckmark} {
        background-color: ${fontColor.green};
        border: 1px solid ${fontColor.green};
      }
    `,
    props.theme === 'primary' && css`
      &:checked ~ ${CheckboxCheckmark} {
        background-color: ${fontColor.red};
        border: 1px solid ${fontColor.red};
      }
    `,
    props.theme === 'primary' && css`
      &:checked ~ ${CheckboxCheckmark} {
        background-color: ${fontColor.red};
        border: 1px solid ${fontColor.red};
      }
    `,
  ]}

  &:disabled ~ ${CheckboxCheckmark} {
    background: ${fontColor.gray3};
    cursor: not-allowed;
  }
`;

function Checkbox({ children,
  id,
  name,
  refCallBack,
  checked,
  theme,
  fontWeight: weight,
  classes: {
    root: rootCls,
    label: labelCls,
    input: inputCls,
    text: textCls,
    checkmark: checkmarkCls,
    error: errorCls,
  },
  isDisabled,
  errorText,
  onChange,
  onClick }) {
  const defaultInputProps = {
    type: 'checkbox',
    ref: refCallBack,
    onChange,
    onClick,
    id,
    name,
    checked,
  };

  return (
    <CheckboxWrapper className={classNames(rootCls)}>
      <CheckboxLabel htmlFor={id} className={classNames(labelCls)}>
        <CheckboxInput
          theme={theme}
          className={classNames(inputCls)}
          {...defaultInputProps}
          disabled={isDisabled}
        />
        <CheckboxText fontWeight={weight} className={classNames(textCls)}>{children}</CheckboxText>
        <CheckboxCheckmark className={classNames(checkmarkCls)} />
      </CheckboxLabel>
      {
        (errorText) ? (
          <CheckboxError className={classNames(errorCls)}>{errorText}</CheckboxError>
        ) : null
      }
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeight)),
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  refCallBack: PropTypes.func,
  classes: PropTypes.object,
  isDisabled: PropTypes.bool,
  errorText: PropTypes.string,
  checkboxColor: PropTypes.string,
  checked: PropTypes.bool,
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'default',
  ]),
};

Checkbox.defaultProps = {
  onClick: () => { },
  onChange: () => { },
  refCallBack: () => { },
  classes: {},
  name: '',
  theme: 'secondary',
  isDisabled: false,
  errorText: '',
  checked: false,
  children: null,
  checkboxColor: 'black',
  fontWeight: 'bold',
};

export default Checkbox;
