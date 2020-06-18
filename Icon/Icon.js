import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.color) {
      return props.theme.color[props.color];
    }
    if (props.disabled) {
      return props.theme.color.greyLight;
    }
    return '';
  },
};

const Icon = styled(
  ({
    color,
    right,
    ...props
  }) => <i {...props} />,
)`
  color: ${styles.color};
  margin-left: ${(props) => props.hasChildren && props.right ? props.theme.px(1) : ''};
  margin-right: ${(props) => props.hasChildren ? props.theme.px(1) : ''};
  font-size: ${(props) => props.size ? props.theme.fontSize[props.size] : ''};
  cursor: ${(props) => props.onClick ? 'pointer' : ''};
  pointer-events: ${(props) => props.disabled ? 'none' : ''};
  opacity: ${(props) => props.disabled ? '0.5' : ''};

  &:hover {
    background: ${(props) => props.onClick ? props.theme.color.translucent : ''};
  }
`;

Icon.propTypes = {
  color: PropTypes.string,
  right: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Icon.defaultProps = {
  right: false,
  disabled: false,
};

export default Icon;
