/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import cx from 'classnames';

const StyledButton = styled(
  ({
    children,
    ...props
  }) => React.createElement('button', { ...props }, children),
)`
  text-align: center;
  padding: 12px 36px;
  background: #03567b;
  color: white;
  width: 100%;

  :disabled {
    opacity: 0.6;
    cursor: auto;
  }
`;

export default function Button({
  label,
  className,
  clickCbk,
  disabled,
  type,
}) {
  const buttonClicked = () => {
    if (!disabled) {
      clickCbk();
    }
  };

  return (
    <StyledButton
      type={type}
      disabled={disabled ? 'disabled' : ''}
      onClick={() => buttonClicked()}
      className={cx(className)}
    >
      {
        disabled ? (
          <FontAwesomeIcon
            icon="fa-solid fa-spinner"
            spin
            className="mr__8"
          />
        ) : null
      }
      {label}

    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    'submit',
    'button',
  ]),
  label: PropTypes.string,
  className: PropTypes.string,
  clickCbk: () => {},
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'submit',
};
