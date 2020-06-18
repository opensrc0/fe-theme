import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled(
  ({ component,
    children,
    ...props }) => React.createElement(component, props, children),
)`
  &&& {
    margin-right: auto;
    margin-left: auto;

    &::before,
    &::after {
      content: " ";
      display: table;
    }

    &::after {
      clear: both;
    }

    @media (max-width: 767px) {
      padding: 0;
    }

    @media (min-width: 768px) {
      width: 750px;
    }

    @media (min-width: 870px) {
      width: 830px;
    }

    @media (min-width: 930px) {
      width: 890px;
    }

    @media (min-width: 992px) {
      width: 970px;
    }

    @media (min-width: 1050px) {
      width: 1020px;
    }

    @media (min-width: 1100px) {
      width: 1070px;
    }

    @media (min-width: 1200px) {
      width: 1170px;
    }

    @media (min-width: 1300px) {
      width: 1250px;
    }

    @media (min-width: 1400px) {
      width: 1330px;
    }
  }
`;

Box.propTypes = {
  component: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
Box.defaultProps = {
  children: null,
  component: 'div',
};

export default Box;
