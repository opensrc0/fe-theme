import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Spacer = styled(
  ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
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
    padding: ${(props) => props.padding ? `${props.theme.px(props.padding)}` : ''};
    padding-top: ${(props) => props.paddingTop ? `${props.theme.px(props.paddingTop)}` : ''};
    padding-bottom: ${(props) => props.paddingBottom ? `${props.theme.px(props.paddingBottom)}` : ''};
    padding-left: ${(props) => props.paddingLeft ? `${props.theme.px(props.paddingLeft)}` : ''};
    padding-right: ${(props) => props.paddingRight ? `${props.theme.px(props.paddingRight)}` : ''};

    @media (max-width: 767px) {
      ${(props) => [
    props.marginXS && css`
          margin: ${props.theme.px(props.marginXS)};
          `,
    props.paddingXS && css`
            padding: ${props.theme.px(props.paddingXS)};
          `,
  ]}
    }

    @media (min-width: 768px) and (max-width: 991px) {
      ${(props) => [
    props.marginSM && css`
    margin: ${props.theme.px(props.marginSM)};
        `,
    props.paddingSM && css`
    padding: ${props.theme.px(props.paddingSM)};
        `,
  ]}
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      ${(props) => [
    props.marginMD && css`
    margin: ${props.theme.px(props.marginMD)};
        `,
    props.paddingMD && css`
    padding: ${props.theme.px(props.paddingMD)};
        `,
  ]}
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
  marginTop: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginBottom: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginLeft: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  marginRight: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  padding: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingTop: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingBottom: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingLeft: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
  paddingRight: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ),
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
};

export default Spacer;
