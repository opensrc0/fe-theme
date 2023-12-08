import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import theme from '../theme';

const styles = {
  borderRadius(props) {
    if (props.shape === 'bluntEdged') {
      return theme.cornerEdge;
    }
    if (props.shape === 'sharpEdged') {
      return '2px';
    }
    if (props.shape === 'capsular') {
      return theme.px(10);
    }
    return '';
  },
};

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  ${({ fluid }) => fluid && css`
    text-align: center;
  `}
`;

const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 15px;
  margin-left: 12px;
  color: #03567b;
`;

const SuffixInputIcon = styled(InputIcon)`
  margin: 0;
  top: 50%;
  padding-right: 12px;
  transform: translate(-100%, -50%);
  ${({ onClick }) => onClick && css`
    cursor: pointer;
  `}
`;

const InputBox = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'fluid' && prop !== 'spin',
})`
  padding: 12px 48px 12px 36px;
  border-width: 1px;
  border-radius: ${styles.borderRadius};
  ${({ fluid }) => fluid && css`
    width: 100%;
  `}
  ${({ state }) => state === 'error' && css`
    border-color: red;
  `}
`;

function Input({
  reference,
  prefixIcon,
  placeholder,
  suffixIcon,
  onClickOnSuffixIcon,
  state,
  ...props
}) {
  return (
    <InputWrapper>
      {prefixIcon && <InputIcon icon={`fa-solid ${prefixIcon}`} size="sm" />}
      <InputBox type="text" placeholder={placeholder} ref={reference} state={state} {...props} />
      {suffixIcon && <SuffixInputIcon icon={`fa-solid ${suffixIcon}`} size="sm" onClick={onClickOnSuffixIcon} />}
    </InputWrapper>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(['bluntEdged', 'sharpEdged', 'capsular']),
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,

  spin: PropTypes.bool,

  className: PropTypes.string,
  prefixIcon: PropTypes.string,
  suffixIcon: PropTypes.string,
  onClickOnSuffixIcon: PropTypes.func,
  state: PropTypes.string,
  reference: PropTypes.object,
};

Input.defaultProps = {
  placeholder: 'Type here',
  shape: 'sharpEdged',
  fluid: true,
  disabled: false,

  spin: false,

  className: '',
  prefixIcon: '',
  suffixIcon: '',
  onClickOnSuffixIcon: () => {},
};

export default Input;

// Left Icon
// Right Button
// input design
// Validation
