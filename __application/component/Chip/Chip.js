import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledChip = styled.div`
  padding: ${({ styleProps, theme: { component: { Chip: { padding } } } }) => styleProps?.padding ? styleProps?.padding : padding};
  background-color: ${({ styleProps, theme: { component: { Chip: { primary: { backgroundColor } } } } }) => styleProps?.backgroundColor ? styleProps?.backgroundColor : backgroundColor};
  color: ${({ styleProps, theme: { component: { Chip: { primary: { color } } } } }) => styleProps?.color ? styleProps?.color : color};
  border-radius: ${({ styleProps, theme: { component: { Chip: { borderRadius } } } }) => styleProps?.borderRadius ? styleProps?.borderRadius : borderRadius};
  border: ${({ styleProps, theme: { component: { Chip: { primary: { border } } } } }) => styleProps?.border ? styleProps?.border : border};
`;

function Chip({ children, styleProps }) {
  return (
    <StyledChip styleProps={styleProps}>{children}</StyledChip>
  );
}

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  styleProps: PropTypes.object,
};

Chip.defaultProps = {
  styleProps: {},
};

export default Chip;
