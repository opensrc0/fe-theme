/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import theme from '../theme';

const styles = {
  color(props) {
    if (props.kind === 'filled') {
      return theme.color.white;
    }
    if (props.kind === 'outlined') {
      return theme.color[props.color];
    }
    return '';
  },
  backgroundColor(props) {
    if (props.kind === 'filled') {
      return theme.color[props.color || 'secondary'];
    }
    if (props.kind === 'outlined') {
      return theme.color.white;
    }
    return '';
  },
  fontSize(props) {
    if (props.size === 'small') {
      return theme.fontSize.xs;
    }
    if (props.size === 'medium') {
      return theme.fontSize.s;
    }
    if (props.size === 'large') {
      return theme.fontSize.s;
    }
    return '';
  },
  padding(props) {
    if (props.size === 'small') {
      return theme.px([1, 2]);
    }
    if (props.size === 'medium') {
      return theme.px([1.5, 2]);
    }
    if (props.size === 'large') {
      return theme.px([2]);
    }
    return '';
  },
  borderColor(props) {
    if (props.kind === 'filled') {
      return theme.color[props.color];
    }
    if (props.kind === 'outlined') {
      return theme.color[props.color];
    }
    return '';
  },
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return theme.borderRadius;
    }
    if (props.shape === 'sharpEdged') {
      return '0';
    }
    if (props.shape === 'capsular') {
      return theme.px(10);
    }
    if (props.shape === 'circular') {
      return '100%';
    }
    return '';
  },
  pointerEvents(props) {
    if (props.disabled) {
      return 'none';
    }
    return '';
  },
  opacity(props) {
    if (props.disabled) {
      return '0.5';
    }
    return '';
  },
  hover: {
    color(props) {
      if (props.kind === 'filled') {
        return theme.color.white;
      }
      if (props.kind === 'outlined') {
        return theme.color.white;
      }
      return '';
    },
    backgroundColor(props) {
      if (props.kind === 'filled') {
        return theme.color[`${props.color}Dark`];
      }
      if (props.kind === 'outlined') {
        return theme.color[props.color];
      }
      return '';
    },
    borderColor(props) {
      if (props.kind === 'filled') {
        return theme.color[`${props.color}Dark`];
      }
      if (props.kind === 'outlined') {
        return theme.color[props.color];
      }
      return '';
    },
  },
};

const StyledButton = styled(
  ({
    color,
    kind,
    size,
    shape,
    block,
    isLoading,
    ...props
  }) => <button {...props} />,
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${styles.color};
  font-size: ${styles.fontSize};
  background-color: ${styles.backgroundColor};
  padding: ${styles.padding};
  width: ${(props) => props.block ? '100%' : ''};
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: ${styles.borderRadius};
  pointer-events: ${styles.pointerEvents};
  opacity: ${styles.opacity};

  &:hover {
    color: ${styles.hover.color};
    background-color: ${styles.hover.backgroundColor};
    border-color: ${styles.hover.borderColor};
  }
`;

function Button({ label, disabled, className, clickCbk, ...props }) {
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      className={cx(className)}
      onClick={clickCbk}
    >

      {label}
    </StyledButton>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf([
    'submit',
    'button',
  ]),
  label: PropTypes.string,
  className: PropTypes.string,
  clickCbk: () => {},
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  kind: PropTypes.oneOf(['filled', 'outlined']),
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fluid: PropTypes.bool,
};

Button.defaultProps = {
  type: 'submit',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
};
