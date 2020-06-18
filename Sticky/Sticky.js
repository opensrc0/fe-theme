import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../Text/TextWeb';
import fontColor from '../theme/font/fontColorConst';

const Sticky = styled(({ stickyXS, children, ...rest }) => <Text {...rest}>{children}</Text>)`
  @media (max-width: 767px) {
    ${(props) => [
    props.stickyXS && css`
      background: ${fontColor.white};
      position: fixed;
      bottom: 0;
      box-shadow: 0 0 4px 0 hsla(0,0%,56.5%,.38824);
      width: 100%;
      z-index: 205;
      right: 0;
    `]}
  }
`;

const StickyBox = ({
  children,
  stickyXS,
}) => (
  <Sticky stickyXS={stickyXS}>
    {children}
  </Sticky>
);

StickyBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  stickyXS: PropTypes.bool,
};

StickyBox.defaultProps = {
  children: null,
  stickyXS: false,
};

export default StickyBox;
