/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  size: { s: 'xs', m: 's', l: 's' },
  padding: { s: [1, 2], m: [1.5, 2], l: [2, 2] },

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
        return props.theme.color.white;
      }
      if (props.kind === 'outlined') {
        return props.theme.color.white;
      }
      return '';
    },
    backgroundColor(props) {
      if (props.kind === 'filled') {
        return props.theme.color[`${props.color}Dark`];
      }
      if (props.kind === 'outlined') {
        return props.theme.color[props.color];
      }
      return '';
    },
    borderColor(props) {
      if (props.kind === 'filled') {
        return props.theme.color[`${props.color}Dark`];
      }
      if (props.kind === 'outlined') {
        return props.theme.color[props.color];
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
    fluid,
    isLoading,
    ...props
  }) => <button {...props} />,
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${(props) => props.theme.Button[props.variant].color};
  background-color: ${(props) => props.theme.Universal.Color[props.variant]};
  font-size: ${(props) => props.theme.Universal.FontSize[styles.size[props.size]]};
  padding: ${(props) => props.theme.Universal.PXL(styles.padding[props.size])};
  width: ${(props) => props.fluid ? '100%' : ''};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.Button[props.variant].borderColor};
  border-radius: ${(props) => props.theme.Button.borderRadius};
  pointer-events: ${styles.pointerEvents};
  opacity: ${styles.opacity};

  &:hover {
    color: ${styles.hover.color};
    background-color: ${styles.hover.backgroundColor};
    border-color: ${styles.hover.borderColor};
  }
`;

function Button({ label, disabled, className, onClick, spin, ...props }) {
  return (
    <StyledButton
      {...props}
      disabled={disabled}
      className={cx(className)}
      onClick={onClick}
    >
      {
        spin ? (
          <>
            <FontAwesomeIcon
              icon="fa-solid fa-spinner"
              spin
              className="disabled-spiner"
            />
            &nbsp;&nbsp;
          </>
        ) : null
      }
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  spin: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']),
  variant: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

Button.defaultProps = {
  label: 'Button',
  onClick: () => {},
  fluid: false,
  disabled: false,
  spin: false,
  className: '',
  type: 'submit',
  variant: 'primary',
  size: 'm',
};

export default Button;
