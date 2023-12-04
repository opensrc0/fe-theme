import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Spacer = styled(
  ({
    margin,
    marginXS,
    marginSM,
    marginMD,
    marginLG,
    marginTop,
    marginTopXS,
    marginBottom,
    marginLeft,
    marginLeftXS,
    marginRight,
    marginRightXS,
    padding,
    paddingXS,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    top,
    left,
    right,
    bottom,
    width,
    widthXS,
    minWidth,
    minWidthXS,
    maxWidth,
    maxWidthXS,
    minHeight,
    maxHeight,
    height,
    heightXS,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  &&& {
    margin: ${(props) => props.margin ? `${props.theme.px(props.margin)}` : ''};
    margin-top: ${(props) => props.marginTop ? `${props.theme.px(props.marginTop)}` : ''};
    margin-bottom: ${(props) => props.marginBottom ? `${props.theme.px(props.marginBottom)}` : ''};
    margin-left: ${(props) => props.marginLeft ? `${props.theme.px(props.marginLeft)}` : ''};
    margin-right: ${(props) => props.marginRight ? `${props.theme.px(props.marginRight)}` : ''};
    top: ${(props) => props.top ? `${props.theme.px(props.top)}` : ''};
    bottom: ${(props) => props.bottom ? `${props.theme.px(props.bottom)}` : ''};
    left: ${(props) => props.left ? `${props.theme.px(props.left)}` : ''};
    right: ${(props) => props.right ? `${props.theme.px(props.right)}` : ''};
    padding: ${(props) => props.padding ? `${props.theme.px(props.padding)}` : ''};
    padding-top: ${(props) => props.paddingTop ? `${props.theme.px(props.paddingTop)}` : ''};
    padding-bottom: ${(props) => props.paddingBottom ? `${props.theme.px(props.paddingBottom)}` : ''};
    padding-left: ${(props) => props.paddingLeft ? `${props.theme.px(props.paddingLeft)}` : ''};
    padding-right: ${(props) => props.paddingRight ? `${props.theme.px(props.paddingRight)}` : ''};
    min-width: ${(props) => props.minWidth != null ? `${props.theme.px(props.minWidth)}` : ''};
    width: ${(props) => props.width != null ? `${props.theme.px(props.width)}` : ''};
    max-width: ${(props) => props.maxWidth != null ? `${props.theme.px(props.maxWidth)}` : ''};
    min-height: ${(props) => props.minHeight != null ? `${props.theme.px(props.minHeight)}` : ''};
    height: ${(props) => props.height != null ? `${props.theme.px(props.height)}` : ''};
    max-height: ${(props) => props.maxHeight != null ? `${props.theme.px(props.maxHeight)}` : ''};

    @media (max-width: 767px) {
      ${(props) => [
    props.marginXS && css`
          margin: ${props.theme.px(props.marginXS)};
          `,
    props.marginTopXS && css`
          margin-top: ${props.theme.px(props.marginTopXS)};
          `,
    props.marginLeftXS && css`
          margin-left: ${props.theme.px(props.marginLeftXS)};
          `,
    props.marginRightXS && css`
          margin-right: ${props.theme.px(props.marginRightXS)};
          `,
    props.paddingXS && css`
            padding: ${props.theme.px(props.paddingXS)};
          `,
    props.widthXS && css`
          width: ${props.theme.px(props.widthXS)};
        `,
    props.minWidthXS && css`
          min-width: ${props.theme.px(props.minWidthXS)};
          `,
    props.maxWidthXS && css`
          max-width: ${props.theme.px(props.maxWidthXS)};
          `,
    props.heightXS && css`
          height: ${props.theme.px(props.heightXS)};
        `]}
    }

    @media (min-width: 768px) and (max-width: 991px) {
      ${(props) => [
    props.marginSM && css`
    margin: ${props.theme.px(props.marginSM)};
        `,
    props.paddingSM && css`
    padding: ${props.theme.px(props.paddingSM)};
        `]}
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      ${(props) => [
    props.marginMD && css`
    margin: ${props.theme.px(props.marginMD)};
        `,
    props.paddingMD && css`
    padding: ${props.theme.px(props.paddingMD)};
        `]}
    }

    @media (min-width: 1200px) {
      ${(props) => [
    props.marginLG && css`
    margin: ${props.theme.px(props.marginLG)};
      `,
    props.paddingLG && css`
    padding: ${props.theme.px(props.paddingLG)};
      `,
  ]}
    }
  }
`;

Spacer.propTypes = {
  margin: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginLG: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginMD: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginSM: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginXS: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  marginTopXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  marginBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  marginLeft: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  marginLeftXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  marginRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  marginRightXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  padding: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingTop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  paddingLeft: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  paddingRight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  paddingLG: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingMD: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingSM: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingXS: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  widthXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  minWidthXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxWidthXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  minHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  heightXS: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  top: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  bottom: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  left: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  right: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
};

export default Spacer;
