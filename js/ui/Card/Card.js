import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import View from '../View/View';
import theme from '../theme';

const Card = styled(
  ({
    borderStyle,
    bordercolor,
    background,
    shape,
    elevated,
    ...props
  }) => <View {...props} />,
)`
  border-width: 1px;
  border-style: ${(props) => props.borderStyle};
  border-radius: ${(props) => props.borderRadius};
  border-color: ${(props) => props.bordercolor ? props.theme.color[props.bordercolor] : props.theme.color[props.background]};
  background: ${(props) => props.theme.color[props.background]};
  box-shadow: ${(props) => props.elevated ? '0 6px 16px 0 rgba(0, 0, 0, 0.16)' : ''};
`;

Card.propTypes = {
  borderStyle: PropTypes.string,
  bordercolor: PropTypes.oneOf(Object.keys(theme.color)),
  background: PropTypes.oneOf(Object.keys(theme.color)),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged']),
  elevated: PropTypes.bool,
};

Card.defaultProps = {
  borderStyle: 'solid',
  background: 'white',
  shape: 'bluntEdged',
};

export default Card;
