import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../theme';
import { HTML_TAG_REGEX } from '../utils/constants';
import fontColor from '../theme/font/fontColorConst';
import Image from '../WIP-Image/Image';

const InputWrapper = styled.div`
  width: 100%;
`;
const InputLabel = styled.div`
  background-color: transparent;
  top: ${(props) => props.small ? '11px' : '14px'};
  box-sizing: border-box;
  color: ${fontColor.gray10};
  font-size: ${(props) => props.small ? '13px' : '15px'};
  font-family: roboto, arial, sans-serif;
  font-weight: 400;
  line-height: 16px;
  left: 10px;
  max-width: calc(100% - (2 * 8px));
  overflow: hidden;
  padding: 0 8px;
  text-overflow: ellipsis;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  width: auto;
  z-index: 1;
  pointer-events: none;
  position: absolute;
  ${(props) => [props.placeholder && css`
      transform: ${props.small ? 'translateY(-140%)' : 'translateY(-155%)'};
      font-size: 12px;
      line-height: 12px;
      color: ${fontColor.link};
      background-color: ${props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};

      @media (max-width: 767px) {
        background-color: ${props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
      }
  `]}

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: ${(props) => props.small ? '13px' : '14px'};
  }

  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  border: 1px solid ${fontColor.gray9};
  background-color: transparent;
  display: block;
  font-family: 'Open Sans', sans-serif;
  line-height: 26px;
  outline: none;
  border-radius: 3px;
  color: ${fontColor.black1};
  font-size: ${(props) => props.small ? '14px' : '15px'};
  height: ${(props) => props.small ? '36px' : '42px'};
  padding: 8px 16px;
  z-index: 1;

  @media (max-width: 767px) {
    font-size: 13px;
  }

  &:disabled {
    color: ${fontColor.gray11};
    border: 1px solid ${fontColor.gray18};
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:read-only {
    color: ${fontColor.gray11};
    cursor: not-allowed;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    background-color: transparent;
    font-size: ${(props) => props.small ? '14px' : '15px'};
    transition: background-color 5000s ease-in-out 0s;

    @media (max-width: 767px) {
      font-size: 13px;
    }
  }

  &:not([disabled]):focus {
    border: 1px solid ${fontColor.link};
  }

  &:not([disabled]):focus ~ ${InputLabel} {
    transform: ${(props) => props.small ? 'translateY(-140%)' : 'translateY(-155%)'};
    font-size: 12px;
    line-height: 12px;
    color: ${fontColor.link};
    background-color: ${(props) => props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};

    @media (max-width: 767px) {
      background-color: ${(props) => props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
    }
  }

  &:-webkit-autofill ~ ${InputLabel} {
    transform: ${(props) => props.small ? 'translateY(-140%)' : 'translateY(-155%)'};
    font-size: 12px;
    line-height: 12px;
    color: ${fontColor.link};
    background-color: ${(props) => props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};

    @media (max-width: 767px) {
      background-color: ${(props) => props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
    }
  }

  &:disabled ~ ${InputLabel} {
    background-color: transparent;
    color: ${fontColor.gray11};
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin-top: ${(props) => `${props.theme.px(props.marginTop)}`};
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  ${(props) => [
    props.isValue && css`
    ${InputLabel} {
      transform: ${(props.small) ? 'translateY(-140%)' : 'translateY(-155%)'};
      font-size: 12px;
      line-height: 12px;
      color: ${fontColor.link};
      background-color: ${props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};

      @media (max-width: 767px) {
        background-color: ${props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
      }
    }
    ${InputField} {
      border: 1px solid ${fontColor.link};
    }

    ${InputField}:disabled {
      border: 1px solid ${fontColor.gray9};
    }

    & ${InputField}:disabled ~ ${InputLabel} {
      background-color: ${props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};
      color: ${fontColor.gray10};

      @media (max-width: 767px) {
        background-color: ${props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
      }
    }
  `,
  ]}

  &.errorBox {
    ${InputField} {
      border: 1px solid ${fontColor.danger};

      &:disabled ~ ${InputLabel} {
        transform: ${(props) => props.small ? 'translateY(-140%)' : 'translateY(-155%)'};
        font-size: 12px;
        line-height: 12px;
        color: ${fontColor.danger};
        background-color: ${(props) => props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};

        @media (max-width: 767px) {
          background-color: ${(props) => props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
        }
      }

      &:not([disabled]):focus ~ ${InputLabel} {
        transform: ${(props) => props.small ? 'translateY(-140%)' : 'translateY(-155%)'};
        font-size: 12px;
        line-height: 12px;
        background-color: ${(props) => props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};
        color: ${fontColor.danger};

        @media (max-width: 767px) {
          background-color: ${(props) => props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
        }
      }
    }

    ${InputLabel} {
      transform: ${(props) => props.small ? 'translateY(-140%)' : 'translateY(-155%)'};
      font-size: 12px;
      line-height: 12px;
      background-color: ${(props) => props.backgroundColor ? props.theme.color[props.backgroundColor] : fontColor.white};
      color: ${fontColor.danger};

      @media (max-width: 767px) {
        background-color: ${(props) => props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : fontColor.white};
      }
    }
  }
`;

const InputIconWrapper = styled.span`
  position: absolute;
  right: 0;
  cursor: pointer;
  display: flex;
  height: 100%;
  align-items: center;
  z-index: 11;
`;
export const InputIcon = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;

  & i {
    font-size: 16px;
    color: ${fontColor.blackLight};
    vertical-align: middle;
  }

  & img {
    height: 25px;
    vertical-align: middle;
  }

  &.disabled,
  &[disabled] {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    box-shadow: none;
    opacity: 0.65;
  }
`;

const Error = styled.div`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: ${fontColor.danger};
  margin-top: 6px;
  margin-bottom: 0;
  padding-left: 4px;
`;

function Input({ id,
  classes: {
    root: rootCls,
    input: inputCls,
    icon: iconCls,
    label: labelCls,
    error: errorCls,
  },
  type,
  label,
  name,
  size,
  placeholder,
  refCallBack,
  value,
  key,
  readOnly,
  autoFocus,
  ariaRequired,
  required,
  disableAutoComplete,
  onCopy,
  onPaste,
  onCut,
  errorText,
  inputIcon,
  inputImage,
  onChange,
  onKeyPress,
  onFocus,
  onBlur,
  onIconClick,
  onKeyUp,
  isDisabled,
  backgroundColor,
  backgroundColorXS,
  marginTop,
  small,
  ccNumber,
  maxLength }) {
  const handleChange = (event) => {
    if (event && event.target) {
      const val = event.target.value;
      if (val && HTML_TAG_REGEX.test(val)) {
        alert('HTML Tag are not allowed');
      } else {
        onChange(event);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event) {
      onKeyPress(event);
    }
  };

  const handleFocus = (event) => {
    if (typeof (onFocus) === 'function') {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    if (typeof (onBlur) === 'function') {
      const val = event.target.value;
      if (val && HTML_TAG_REGEX.test(val)) {
        alert('HTML Tag are not allowed');
      } else {
        onBlur(event);
      }
    }
  };

  const handleIconClick = () => {
    if (typeof (onIconClick) === 'function') {
      onIconClick();
    }
  };

  const handleKeyUp = (event) => {
    if (event) {
      onKeyUp(event);
    }
  };

  const opts = {};
  opts.readOnly = readOnly;
  /* istanbul ignore next */
  if (autoFocus) {
    opts.autofocus = autoFocus;
  }
  opts['aria-required'] = ariaRequired;
  opts['area-lable'] = label || '';
  opts.required = required;
  opts.value = value;
  opts.maxLength = maxLength || '';
  opts['cc-number'] = ccNumber || '';

  if (disableAutoComplete) {
    opts.autoComplete = 'off';
    opts.autoCorrect = 'off';
    opts.autoCapitalize = 'off';
    opts.spellCheck = 'off';
  }
  return (
    <InputWrapper small={small} className={rootCls}>
      <InputBox
        isValue={!!value}
        className={classNames({ errorBox: !!errorText })}
        backgroundColor={backgroundColor}
        backgroundColorXS={backgroundColorXS}
        marginTop={marginTop}
        small={small}
      >
        <InputField
          id={id}
          className={classNames(inputCls)}
          type={type}
          name={name}
          key={key}
          size={size}
          value={value}
          onChange={handleChange}
          onCopy={onCopy}
          onPaste={onPaste}
          onCut={onCut}
          onKeyPress={handleKeyPress}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={refCallBack}
          disabled={isDisabled}
          backgroundColor={backgroundColor}
          backgroundColorXS={backgroundColorXS}
          small={small}
          placeholder={placeholder}
          {...opts}
        />
        <InputLabel
          className={classNames(labelCls)}
          backgroundColor={backgroundColor}
          backgroundColorXS={backgroundColorXS}
          small={small}
          placeholder={placeholder}
        >
          {label}

        </InputLabel>
        {
          (inputIcon || inputImage) ? (
            <InputIconWrapper>
              <InputIcon
                type="button"
                disabled={isDisabled}
                className={classNames(iconCls)}
                onClick={() => handleIconClick()}
              >
                {(inputImage) ? (
                  <Image
                    id="image-input-info"
                    visibleByDefault
                    src={inputImage}
                    alt=""
                  />
                )
                  : (<i className={`fa fa-${inputIcon}`} />)}
              </InputIcon>
            </InputIconWrapper>
          ) : null
        }
      </InputBox>
      {
        (errorText) ? (
          <Error small={small} className={classNames(errorCls)}>{errorText}</Error>
        ) : null
      }
    </InputWrapper>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onPaste: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onIconClick: PropTypes.func,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  ariaRequired: PropTypes.bool,
  refCallBack: PropTypes.func,
  classes: PropTypes.object,
  accepts: PropTypes.string,
  errorStatus: PropTypes.func,
  key: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dataCsMask: PropTypes.bool,
  datatlPrivate: PropTypes.bool,
  disableAutoComplete: PropTypes.bool,
  isDisabled: PropTypes.bool,
  inputIcon: PropTypes.string,
  inputImage: PropTypes.string,
  maxLength: PropTypes.string,
  marginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  small: PropTypes.bool,
  ccNumber: PropTypes.bool,
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColorXS: PropTypes.oneOf(Object.keys(theme.color)),
};

Input.defaultProps = {
  type: 'text',
  size: 20,
  label: '',
  placeholder: '',
  small: false,
  ariaRequired: false,
  required: false,
  readOnly: false,
  autoFocus: false,
  id: '',
  name: '',
  errorText: '',
  onFocus: null,
  onBlur: null,
  onChange: () => { },
  onCopy: () => { },
  onCut: () => { },
  onPaste: () => { },
  onKeyPress: () => { },
  onKeyUp: () => { },
  refCallBack: () => { },
  onIconClick: null,
  classes: {},
  accepts: '',
  errorStatus: () => { },
  key: '',
  value: null,
  datatlPrivate: false,
  dataCsMask: false,
  disableAutoComplete: false,
  isDisabled: false,
  inputIcon: '',
  inputImage: '',
  maxLength: '',
  ccNumber: false,
  backgroundColor: 'white',
  backgroundColorXS: 'white',
  marginTop: '20px',
};

export default Input;
