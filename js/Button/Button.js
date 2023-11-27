import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import cx from 'classnames';
import fontColor from '../theme/font/fontColorConst';
import fontWeight from '../theme/font/fontWeightConst';
import fontSize from '../theme/font/fontSizeConst';
import theme from '../theme';
import Text from '../Text/TextWeb';

/* eslint-disable react/button-has-type */
export const StyledButton = styled(
  ({
    children,
    buttonType,
    lineHeight,
    lineHeightXS,
    textTransform,
    fontWeight: weight,
    fontSize: size,
    fontSizeXS,
    borderRadius,
    borderRadiusXS,
    linkColor,
    borderXS,
    float,
    small,
    opacity,
    isMobile,
    visibleXS,
    visibleSM,
    visibleMD,
    visibleLG,
    hiddenXS,
    hiddenSM,
    hiddenMD,
    hiddenLG,
    ...props
  }) => React.createElement('button', { ...props, type: buttonType }, children),
)`
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  line-height: ${(props) => props.lineHeight ? props.lineHeight : props.small ? '34px' : '40px'};
  text-transform: ${(props) => props.textTransform ? props.textTransform : 'uppercase'};
  font-weight: ${(props) => theme.fontWeight[props.fontWeight]};
  font-size: ${(props) => props.small ? fontSize.sm : theme.fontSize[props.fontSize]};
  border-radius: ${(props) => theme.px(props.borderRadius)};
  float: ${(props) => props.float ? `${props.float}` : ''};
  opacity: ${(props) => props.opacity};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  &.disabled,
  &[disabled] {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    box-shadow: none;
    opacity: 0.65;
  }

  ${(props) => [
    props.theme === 'primary' && css`
      color: ${fontColor.white};
      background-color: ${fontColor.red};
      border: 1px solid  ${fontColor.red};
      &:hover {
        background-color: ${fontColor.danger};
      }
      &:disabled {
        background-color: ${fontColor.lightred};
      }
  `,
    props.theme === 'secondary' && css`
      color:  ${fontColor.red};
      border: 1px solid  ${fontColor.red};
      background-color: transparent;
      &:hover {
        border-color: ${fontColor.lightred};
        color: ${fontColor.lightred};
      }
      &:disabled {
        border-color: ${fontColor.lightred};
        color: ${fontColor.lightred};
      }
  `,
    props.theme === 'tertiary' && css`
        background: transparent;
        color: ${fontColor.darkBlue};
        border: 1px solid ${fontColor.darkBlue};
        &:hover {
          opacity: 0.8;
          border-color: ${fontColor.darkBlue};
          color: ${fontColor.darkBlue};
        }
        &:disabled {
          color: ${fontColor.darkBlue};
          border: 1px solid ${fontColor.darkBlue};
        }
    `,
    props.theme === 'link' && css`
        color:  ${fontColor.red};
        border: 0;
        border-radius: 0;
        background: transparent;
        padding: 0;
        font-weight: ${props.fontWeight ? theme.fontWeight[props.fontWeight] : fontWeight.bold};
        line-height: ${props.lineHeight ? `${theme.px(props.lineHeight)}` : 'initial'};
        text-transform: ${props.textTransform ? props.textTransform : 'none'};
        text-align: ${props.textAlign ? props.textAlign : 'center'};;
        &:hover {
          color: ${fontColor.lightred};
        }
    `,
    props.theme === 'link' && props.linkColor && css`
        color: ${fontColor[props.linkColor]};
        &:hover {
          color: ${props.linkColor === 'darkBlue' ? fontColor.link : fontColor[props.linkColor]};
        }
    `,
  ]}
  ${(props) => [
    (props.visibleLG || props.visibleMD || props.visibleSM || props.visibleXS) && css`
      display: none;
    `,
    props.isMobile && css`
    cursor: default;
  `,
  ]};

  @media (max-width: 767px) {
    ${(props) => [
    props.hiddenXS && css`
      display: none;
    `,
    props.visibleXS && css`
      display: block;
    `,
  ]}
  }

  @media (min-width: 768px) and (max-width: 991px) {
    ${(props) => [
    props.hiddenSM && css`
        display: none;
      `,
    props.visibleSM && css`
        display: block;
      `,
  ]}
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    ${(props) => [
    props.hiddenMD && css`
        display: none;
      `,
    props.visibleMD && css`
        display: block;
      `,
  ]}
  }

  @media (min-width: 1200px) {
    ${(props) => [
    props.hiddenLG && css`
      display: none;
    `,
    props.visibleLG && css`
      display: block;
    `,
  ]}
  }

  @media (max-width: 767px) {
    ${(props) => [
    props.fontSizeXS && css`
      font-size: ${theme.fontSize[props.fontSizeXS]};
      `,
    props.lineHeightXS && css`
      line-height: ${props.lineHeightXS};
      `,
    props.borderRadiusXS && css`
      border-radius: ${theme.px(props.borderRadiusXS)};
      `,
    props.borderXS && css`
      border: ${props.borderRadiusXS};
      `,
  ]}
  }
`;

const Button = ({ type, onBlur, id, className, isDisabled, isDisableOnClick,
  isSpinOnClick, spinnerText, isLockOnClick, children, onClick, $isMobile, ...props }) => {
  const [isBtnDisabled, setBtnDisabled] = useState(false);

  const handleClick = () => {
    if (isDisableOnClick) {
      setBtnDisabled(true);
    }

    onClick(setBtnDisabled);
  };

  const defaultProps = {
    onBlur,
    id,
  };

  return (
      <StyledButton
        buttonType={type}
        disabled={isBtnDisabled || isDisabled}
        onClick={(ev) => handleClick(ev)}
        className={cx(className)}
        isMobile={$isMobile}
        {...defaultProps}
        {...props}
      >
        {
          (isSpinOnClick && isBtnDisabled) ? (
            <Text component="span">
              <Text component="i" className="fa fa-spinner" />
              &nbsp;
              {spinnerText}
            </Text>
          )
            : (
              <Text component="span">{children}</Text>
            )
        }
      </StyledButton>
  );
};

/**
 * Supported React properties
 * @type {Object}
 */
Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  spinnerText: PropTypes.string, // text to show along with spinner on disable
  className: PropTypes.string,
  isSpinOnClick: PropTypes.bool, // flag to show spinner on button on disable
  isLockOnClick: PropTypes.bool, // flag to show backdrop screen on click
  isDisableOnClick: PropTypes.bool, // disable button component on click
  isDisabled: PropTypes.bool, // disable from parent component
  small: PropTypes.bool,
  type: PropTypes.oneOf([
    'submit',
    'button',
  ]),
  theme: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'tertiary',
    'text',
    'link',
  ]),
  linkColor: PropTypes.oneOfType([
    'red',
    'blue',
    'white',
    'darkBlue',
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  lineHeightXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  textTransform: PropTypes.oneOfType([
    'uppercase',
    'lowercase',
    'none',
    'inherit',
    'initial',
    '',
  ]),
  float: PropTypes.oneOfType([
    'left',
    'right',
    'none',
  ]),
  fontSize: PropTypes.oneOfType([
    Object.keys(theme.fontSize),
    PropTypes.string,
  ]),
  fontSizeXS: PropTypes.oneOfType([
    Object.keys(theme.fontSize),
    PropTypes.string,
  ]),
  fontWeight: PropTypes.oneOf(Object.keys(theme.fontWeight)),
  borderRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  borderRadiusXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  borderXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  opacity: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  visibleXS: PropTypes.bool,
  visibleSM: PropTypes.bool,
  visibleMD: PropTypes.bool,
  visibleLG: PropTypes.bool,
  hiddenXS: PropTypes.bool,
  hiddenSM: PropTypes.bool,
  hiddenMD: PropTypes.bool,
  hiddenLG: PropTypes.bool,
};

/** @properties {Default set up} */
Button.defaultProps = {
  id: '',
  children: '',
  spinnerText: 'Processing...',
  className: '',
  type: 'button',
  theme: 'default',
  onClick: () => { },
  onBlur: () => { },
  isDisabled: false,
  isDisableOnClick: false,
  isSpinOnClick: false,
  isLockOnClick: false,
  linkColor: 'red',
  small: false,
  lineHeight: '',
  lineHeightXS: '',
  float: 'none',
  textTransform: '',
  fontSize: 'm',
  fontSizeXS: '',
  fontWeight: 'semibold',
  borderRadius: '3px',
  borderRadiusXS: '',
  borderXS: '',
  opacity: '',
  visibleXS: false,
  visibleSM: false,
  visibleMD: false,
  visibleLG: false,
  hiddenXS: false,
  hiddenSM: false,
  hiddenMD: false,
  hiddenLG: false,
};

export default Button;
