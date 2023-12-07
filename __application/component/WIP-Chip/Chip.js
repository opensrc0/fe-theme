import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.kind === 'filled') {
      return props.theme.color.white;
    }
    if (props.kind === 'outlined') {
      return props.theme.color[props.color];
    }
    return '';
  },
  background(props) {
    if (props.kind === 'filled') {
      return props.theme.color[props.color];
    }
    if (props.kind === 'outlined') {
      return props.theme.color[props.background ? props.background : `${props.color}Lighter`];
    }
    return '';
  },
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return props.theme.cornerEdge;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    if (props.shape === 'capsular') {
      return props.theme.px(10);
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    if (props.shape === 'bluntCircular') {
      return '16px';
    }
    return '';
  },
  padding(props) {
    if (props.size === 'xxxs') {
      return props.theme.px([0.25, 1]);
    }
    if (props.size === 'xs') {
      return props.theme.px([0.5, 1.5]);
    }
    return '';
  },
  textTransform(props) {
    if (props.size === 'xxxs') {
      return 'uppercase';
    }
    return 'none';
  },
};

const Chip = styled(
  ({
    color,
    kind,
    shape,
    size,
    ...props
  }) => <div {...props} />,
)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  color: ${styles.color};
  background: ${styles.background};
  border: 1px solid ${(props) => props.bordercolor ? props.theme.color[props.bordercolor] : props.theme.color[props.color]};
  border-radius: ${styles.borderRadius};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  padding: ${styles.padding};
  text-transform: ${styles.textTransform};
`;

Chip.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'bluntCircular']),
  size: PropTypes.string,
  background: PropTypes.string,
  bordercolor: PropTypes.string,
};

Chip.defaultProps = {
  color: 'primary',
  kind: 'filled',
  shape: 'bluntEdged',
  size: 'xxxl',
  background: '',
  bordercolor: '',

};

export default Chip;
