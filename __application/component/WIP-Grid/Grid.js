import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../component/themeeme';

const StyledGrid = styled(({ overflow, xs, sm, md, lg, pushXS, pushSM, pushMD, pushLG, pullXS, pullSM, pullMD, pullLG, paddingXS, paddingSM, paddingMD, paddingLG, children, ...rest }) => <div {...rest}>{children}</div>)`
  ${(props) => [
    props.container && css`
      margin-left: -16px;
      margin-right: -16px;
      &::after, 
      &::before {
        content: " ";
        display: table;
      }
      &::after {
        clear: both;
      }
    `,
    (props.visibleLG || props.visibleMD
        || props.visibleSM || props.visibleXS) && css`
        display: none;
      `,
    props.item && css`
      position: relative;
      min-height: 1px;
      padding-left: 16px;
      padding-right: 16px;
      overflow: ${props.overflow ? props.overflow : ''};
      @media (max-width: 767px) {
        ${(props.paddingXS || props.paddingXS === 0 || props.paddingXS === '0') && css`
          padding-left: ${props.theme.px(props.paddingXS)}px !important;
          padding-right: ${props.theme.px(props.paddingXS)}px !important;
        `} 
        ${(props.hiddenXS) && css`
          display: none;
        `}
        ${(props.visibleXS) && css`
          display: block;
        `}
      }
      @media (min-width: 768px) and (max-width: 991px) {
        ${(props.paddingSM || props.paddingSM === 0 || props.paddingSM === '0') && css`
          padding-left: ${props.theme.px(props.paddingSM)}px !important;
          padding-right: ${props.theme.px(props.paddingSM)}px !important;
        `}
        ${(props.hiddenSM) && css`
          display: none;
        `}
        ${(props.visibleSM) && css`
          display: block;
        `}
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        ${(props.paddingMD || props.paddingMD === 0 || props.paddingMD === '0') && css`
          padding-left: ${props.theme.px(props.paddingMD)}px !important;
          padding-right: ${props.theme.px(props.paddingMD)}px !important;
        `}

        ${(props.hiddenMD) && css`
          display: none;
        `}
        ${(props.visibleMD) && css`
          display: block;
        `}
      }
      @media (min-width: 1200px) {
      ${(props.paddingLG || props.paddingLG === 0 || props.paddingLG === '0') && css`
        padding-left: ${props.theme.px(props.paddingLG)}px !important;
        padding-right: ${props.theme.px(props.paddingLG)}px !important;
        `}
        ${(props.hiddenLG) && css`
          display: none;
        `}
        ${(props.visibleLG) && css`
          display: block;
        `}
      }
    `,
    props.flush && css`
      padding: 0;
    `,
    props.flushLeft && css`
      padding-left: 0;
    `,
    props.flushRight && css`
      padding-right: 0;
    `,
    props.xs && css`
      float: left;
      width: ${(props.xs === '12') ? '100%'
    : props.xs === '11' ? '91.66666667%'
      : props.xs === '10' ? '83.33333333%'
        : props.xs === '9' ? '75%'
          : props.xs === '8' ? '66.66666667%'
            : props.xs === '7' ? '58.33333333%'
              : props.xs === '6' ? '50%'
                : props.xs === '5' ? '41.66666667%'
                  : props.xs === '4' ? '33.33333333%'
                    : props.xs === '3' ? '25%'
                      : props.xs === '2' ? '16.66666667%'
                        : props.xs === '1' ? '8.33333333%'
                          : ''};
                            `,
    props.pushXS && css`
      margin-left: ${props.pushXS === '12' ? '100%'
    : props.pushXS === '11' ? '91.66666667%'
      : props.pushXS === '10' ? '83.33333333%'
        : props.pushXS === '9' ? '75%'
          : props.pushXS === '8' ? '66.66666667%'
            : props.pushXS === '7' ? '58.33333333%'
              : props.pushXS === '6' ? '50%'
                : props.pushXS === '5' ? '41.66666667%'
                  : props.pushXS === '4' ? '33.33333333%'
                    : props.pushXS === '3' ? '25%'
                      : props.pushXS === '2' ? '16.66666667%'
                        : props.pushXS === '1' ? '8.33333333%'
                          : props.pushXS === '0' ? '0%'
                            : ''};
                              `,
    props.pullXS && css`
      right: ${props.pullXS === '12' ? '100%'
    : props.pullXS === '11' ? '91.66666667%'
      : props.pullXS === '10' ? '83.33333333%'
        : props.pullXS === '9' ? '75%'
          : props.pullXS === '8' ? '66.66666667%'
            : props.pullXS === '7' ? '58.33333333%'
              : props.pullXS === '6' ? '50%'
                : props.pullXS === '5' ? '41.66666667%'
                  : props.pullXS === '4' ? '33.33333333%'
                    : props.pullXS === '3' ? '25%'
                      : props.pullXS === '2' ? '16.66666667%'
                        : props.pullXS === '1' ? '8.33333333%'
                          : props.pullXS === '0' ? '0%'
                            : ''};
                              `,
  ]};

  @media (min-width: 768px) {
    ${(props) => [
    props.sm && css`
      float: left;
      width: ${props.sm === '12' ? '100%'
    : props.sm === '11' ? '91.66666667%'
      : props.sm === '10' ? '83.33333333%'
        : props.sm === '9' ? '75%'
          : props.sm === '8' ? '66.66666667%'
            : props.sm === '7' ? '58.33333333%'
              : props.sm === '6' ? '50%'
                : props.sm === '5' ? '41.66666667%'
                  : props.sm === '4' ? '33.33333333%'
                    : props.sm === '3' ? '25%'
                      : props.sm === '2' ? '16.66666667%'
                        : props.sm === '1' ? '8.33333333%'
                          : ''};
    `]}
  }

  @media (min-width: 768px) and (max-width: 991px) {
    ${(props) => [
    props.pushSM && css`
      margin-left: ${props.pushSM === '12' ? '100%'
    : props.pushSM === '11' ? '91.66666667%'
      : props.pushSM === '10' ? '83.33333333%'
        : props.pushSM === '9' ? '75%'
          : props.pushSM === '8' ? '66.66666667%'
            : props.pushSM === '7' ? '58.33333333%'
              : props.pushSM === '6' ? '50%'
                : props.pushSM === '5' ? '41.66666667%'
                  : props.pushSM === '4' ? '33.33333333%'
                    : props.pushSM === '3' ? '25%'
                      : props.pushSM === '2' ? '16.66666667%'
                        : props.pushSM === '1' ? '8.33333333%'
                          : props.pushSM === '0' ? '0%'
                            : ''};
                               `,
    props.pullSM && css`
      right: ${props.pullSM === '12' ? '100%'
    : props.pullSM === '11' ? '91.66666667%'
      : props.pullSM === '10' ? '83.33333333%'
        : props.pullSM === '9' ? '75%'
          : props.pullSM === '8' ? '66.66666667%'
            : props.pullSM === '7' ? '58.33333333%'
              : props.pullSM === '6' ? '50%'
                : props.pullSM === '5' ? '41.66666667%'
                  : props.pullSM === '4' ? '33.33333333%'
                    : props.pullSM === '3' ? '25%'
                      : props.pullSM === '2' ? '16.66666667%'
                        : props.pullSM === '1' ? '8.33333333%'
                          : props.pullSM === '0' ? '0%'
                            : ''};
    `]}
  }

  @media (min-width: 992px) {
    ${(props) => [
    props.md && css`
      float: left;
      width: ${props.md === '12' ? '100%'
    : props.md === '11' ? '91.66666667%'
      : props.md === '10' ? '83.33333333%'
        : props.md === '9' ? '75%'
          : props.md === '8' ? '66.66666667%'
            : props.md === '7' ? '58.33333333%'
              : props.md === '6' ? '50%'
                : props.md === '5' ? '41.66666667%'
                  : props.md === '4' ? '33.33333333%'
                    : props.md === '3' ? '25%'
                      : props.md === '2' ? '16.66666667%'
                        : props.md === '1' ? '8.33333333%'
                          : ''};
    `]}
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    ${(props) => [
    props.pushMD && css`
      margin-left: ${props.pushMD === '12' ? '100%'
    : props.pushMD === '11' ? '91.66666667%'
      : props.pushMD === '10' ? '83.33333333%'
        : props.pushMD === '9' ? '75%'
          : props.pushMD === '8' ? '66.66666667%'
            : props.pushMD === '7' ? '58.33333333%'
              : props.pushMD === '6' ? '50%'
                : props.pushMD === '5' ? '41.66666667%'
                  : props.pushMD === '4' ? '33.33333333%'
                    : props.pushMD === '3' ? '25%'
                      : props.pushMD === '2' ? '16.66666667%'
                        : props.pushMD === '1' ? '8.33333333%'
                          : props.pushMD === '0' ? '0%'
                            : ''};
    `,
    props.pullMD && css`
      right: ${props.pullMD === '12' ? '100%'
    : props.pullMD === '11' ? '91.66666667%'
      : props.pullMD === '10' ? '83.33333333%'
        : props.pullMD === '9' ? '75%'
          : props.pullMD === '8' ? '66.66666667%'
            : props.pullMD === '7' ? '58.33333333%'
              : props.pullMD === '6' ? '50%'
                : props.pullMD === '5' ? '41.66666667%'
                  : props.pullMD === '4' ? '33.33333333%'
                    : props.pullMD === '3' ? '25%'
                      : props.pullMD === '2' ? '16.66666667%'
                        : props.pullMD === '1' ? '8.33333333%'
                          : props.pullMD === '0' ? '0%'
                            : ''};
    `]}
  }

  @media (min-width: 1200px) {
    ${(props) => [
    props.lg && css`
      float: left;
      width: ${props.lg === '12' ? '100%'
    : props.lg === '11' ? '91.66666667%'
      : props.lg === '10' ? '83.33333333%'
        : props.lg === '9' ? '75%'
          : props.lg === '8' ? '66.66666667%'
            : props.lg === '7' ? '58.33333333%'
              : props.lg === '6' ? '50%'
                : props.lg === '5' ? '41.66666667%'
                  : props.lg === '4' ? '33.33333333%'
                    : props.lg === '3' ? '25%'
                      : props.lg === '2' ? '16.66666667%'
                        : props.lg === '1' ? '8.33333333%'
                          : ''};
      `,
    props.pushLG && css`
      margin-left: ${props.pushLG === '12' ? '100%'
    : props.pushLG === '11' ? '91.66666667%'
      : props.pushLG === '10' ? '83.33333333%'
        : props.pushLG === '9' ? '75%'
          : props.pushLG === '8' ? '66.66666667%'
            : props.pushLG === '7' ? '58.33333333%'
              : props.pushLG === '6' ? '50%'
                : props.pushLG === '5' ? '41.66666667%'
                  : props.pushLG === '4' ? '33.33333333%'
                    : props.pushLG === '3' ? '25%'
                      : props.pushLG === '2' ? '16.66666667%'
                        : props.pushLG === '1' ? '8.33333333%'
                          : props.pushLG === '0' ? '0%'
                            : ''};
    `,
    props.pullLG && css`
      right: ${props.pullLG === '12' ? '100%'
    : props.pullLG === '11' ? '91.66666667%'
      : props.pullLG === '10' ? '83.33333333%'
        : props.pullLG === '9' ? '75%'
          : props.pullLG === '8' ? '66.66666667%'
            : props.pullLG === '7' ? '58.33333333%'
              : props.pullLG === '6' ? '50%'
                : props.pullLG === '5' ? '41.66666667%'
                  : props.pullLG === '4' ? '33.33333333%'
                    : props.pullLG === '3' ? '25%'
                      : props.pullLG === '2' ? '16.66666667%'
                        : props.pullLG === '1' ? '8.33333333%'
                          : props.pullLG === '0' ? '0%'
                            : ''};
    `]}
  }
`;

function Grid({ children, xs: XS, sm: SM, md: MD, lg: LG, ...props }) {
  const xs = theme.toString(XS);
  const sm = theme.toString(SM);
  const md = theme.toString(MD);
  const lg = theme.toString(LG);
  return <StyledGrid xs={xs} sm={sm} md={md} lg={lg} {...props}>{children}</StyledGrid>;
}

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
  container: PropTypes.bool,
  item: PropTypes.bool,
  flush: PropTypes.bool,
  flushLeft: PropTypes.bool,
  flushRight: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pushXS: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pushSM: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pushMD: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pushLG: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pullXS: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pullSM: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pullMD: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pullLG: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingXS: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingSM: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingMD: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLG: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overflow: PropTypes.oneOfType(['hidden', 'scroll', 'auto', 'inherit', 'visible']),
  visibleXS: PropTypes.bool,
  visibleSM: PropTypes.bool,
  visibleMD: PropTypes.bool,
  visibleLG: PropTypes.bool,
  hiddenXS: PropTypes.bool,
  hiddenSM: PropTypes.bool,
  hiddenMD: PropTypes.bool,
  hiddenLG: PropTypes.bool,
};

Grid.defaultProps = {
  children: null,
  container: false,
  item: false,
  flush: false,
  overflow: '',
  flushLeft: false,
  flushRight: false,
  xs: '',
  sm: '',
  md: '',
  lg: '',
  pushXS: '',
  pushSM: '',
  pushMD: '',
  pushLG: '',
  pullXS: '',
  pullSM: '',
  pullMD: '',
  pullLG: '',
  paddingXS: '',
  paddingSM: '',
  paddingMD: '',
  paddingLG: '',
  visibleXS: false,
  visibleSM: false,
  visibleMD: false,
  visibleLG: false,
  hiddenXS: false,
  hiddenSM: false,
  hiddenMD: false,
  hiddenLG: false,
};

export default Grid;
