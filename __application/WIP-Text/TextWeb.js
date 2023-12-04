/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../theme';

const Text = styled(
  ({
    component,
    color,
    backgroundColor,
    backgroundColorXS,
    size,
    sizeMD,
    sizeSM,
    sizeXS,
    weight,
    weightXS,
    family,
    align,
    alignXS,
    truncate,
    children,
    display,
    displayXS,
    lineHeight,
    lineHeightXS,
    verticalAlign,
    position,
    overflow,
    float,
    opacity,
    textTransform,
    border,
    hiddenLG,
    hiddenMD,
    hiddenSM,
    hiddenXS,
    visibleLG,
    visibleMD,
    visibleSM,
    visibleXS,
    ...props
  }) => React.createElement(component, props, children),
)`
  color: ${(props) => props.color ? props.theme.color[props.color] : ''};
  background-color: ${(props) => props.backgroundColor ? props.theme.color[props.backgroundColor] : ''};
  font-size: ${(props) => props.size ? props.theme.fontSize[props.size] : ''};
  font-weight: ${(props) => props.weight ? props.theme.fontWeight[props.weight] : ''};
  font-family: ${(props) => props.family ? props.theme.fontFamily[props.family] : ''};
  line-height: ${(props) => props.lineHeight ? props.lineHeight : props.component === 'p' ? '1.5' : ''};
  text-align: ${(props) => props.align || ''};
  vertical-align: ${(props) => props.verticalAlign || ''};
  overflow: ${(props) => props.truncate ? 'hidden' : props.overflow ? props.overflow : ''};
  white-space: ${(props) => props.truncate ? 'nowrap' : ''};
  text-overflow: ${(props) => props.truncate ? 'ellipsis' : ''};
  position: ${(props) => props.position || ''};
  float: ${(props) => props.float ? `${props.float}` : ''};
  opacity: ${(props) => props.opacity ? `${props.opacity}` : ''};
  text-transform: ${(props) => props.textTransform ? props.textTransform : ''};
  border: ${(props) => props.border ? props.border : ''};
  ${(props) => [
    (props.display) && css`
      display: ${props.theme.display[props.display]};
    `,

    (props.visibleLG || props.visibleMD
      || props.visibleSM || props.visibleXS) && css`
      display: none;
    `,
  ]};

  @media (max-width: 767px) {
    ${(props) => [
    props.hiddenXS && css`
      display: none;
    `,
    props.visibleXS && css`
      display: ${(props.component) === 'span' ? 'inline-block' : 'block'};
    `,
    props.sizeXS && css`
    font-size: ${props.theme.fontSize[props.sizeXS]};
    `,
    props.displayXS && css`
      display: ${props.theme.display[props.displayXS]};
    `,
    props.weightXS && css`
    font-weight: ${props.theme.fontWeight[props.weightXS]};
    `,
    props.lineHeightXS && css`
    line-height: ${props.lineHeightXS};
    `,
    props.backgroundColorXS && css`
    background-color: ${props.backgroundColorXS ? props.theme.color[props.backgroundColorXS] : ''};
    `,
    props.alignXS && css`
    text-align: ${props.alignXS};
    `,
  ]}
  }

  @media (min-width: 768px) and (max-width: 991px) {
    ${(props) => [
    props.hiddenSM && css`
        display: none;
      `,
    props.visibleSM && css`
        display: ${(props.component) === 'span' ? 'inline-block' : 'block'};
      `,
    props.sizeSM && css`
      font-size: ${props.theme.fontSize[props.sizeSM]};
      `,
  ]}
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    ${(props) => [
    props.hiddenMD && css`
        display: none;
      `,
    props.visibleMD && css`
        display: ${(props.component) === 'span' ? 'inline-block' : 'block'};
      `,
    props.sizeMD && css`
      font-size: ${props.theme.fontSize[props.sizeMD]};
      `,
  ]}
  }

  @media (min-width: 1200px) {
    ${(props) => [
    props.hiddenLG && css`
      display: none;
    `,
    props.visibleLG && css`
      display: ${(props.component) === 'span' ? 'inline-block' : 'block'};
    `,
  ]}
  }
`;

Text.propTypes = {
  component: PropTypes.node,
  ref: PropTypes.object,
  color: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColor: PropTypes.oneOf(Object.keys(theme.color)),
  backgroundColorXS: PropTypes.oneOf(Object.keys(theme.color)),
  size: PropTypes.oneOf(Object.keys(theme.fontSize)),
  sizeXS: PropTypes.oneOf(Object.keys(theme.fontSize)),
  sizeSM: PropTypes.oneOf(Object.keys(theme.fontSize)),
  sizeMD: PropTypes.oneOf(Object.keys(theme.fontSize)),
  weight: PropTypes.oneOf(Object.keys(theme.fontWeight)),
  weigthXS: PropTypes.oneOf(Object.keys(theme.fontWeight)),
  family: PropTypes.oneOf(Object.keys(theme.fontFamily)),
  display: PropTypes.oneOf(Object.keys(theme.display)),
  displayXS: PropTypes.oneOf(Object.keys(theme.display)),
  position: PropTypes.oneOf(['fixed', 'absolute', 'static', 'relative', 'sticky', 'inherit']),
  overflow: PropTypes.oneOf(['hidden', 'scroll', 'auto', 'inherit', 'visible']),
  lineHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  lineHeightXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom', 'inherit']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  alignXS: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  float: PropTypes.oneOfType([
    'left',
    'right',
    'none',
  ]),
  opacity: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  textTransform: PropTypes.oneOfType([
    'uppercase',
    'lowercase',
    'none',
    'inherit',
    'initial',
  ]),
  border: PropTypes.string,
  truncate: PropTypes.bool,
  visibleXS: PropTypes.bool,
  visibleSM: PropTypes.bool,
  visibleMD: PropTypes.bool,
  visibleLG: PropTypes.bool,
  hiddenXS: PropTypes.bool,
  hiddenSM: PropTypes.bool,
  hiddenMD: PropTypes.bool,
  hiddenLG: PropTypes.bool,
};

Text.defaultProps = {
  component: 'div',
  visibleXS: false,
  visibleSM: false,
  visibleMD: false,
  visibleLG: false,
  hiddenXS: false,
  hiddenSM: false,
  hiddenMD: false,
  hiddenLG: false,
};

export default Text;
