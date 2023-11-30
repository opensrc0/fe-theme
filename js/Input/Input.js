import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  text-align: center;
`;

const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
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

const InputBox = styled.input`
  padding: 12px 48px;
  width: 100%;
  ${({ state }) => state === 'error' && css`
    border-color: red;
  `}
`;

function Input(props) {
  const {
    reference,
    iconName,
    placeholder,
    type,
    suffixIconName,
    suffixIconSize,
    onClickSuffixIcon,
    state,
  } = props;
  return (
    <InputWrapper>
      {iconName && <InputIcon icon={`fa-solid ${iconName}`} size="xl" />}
      <InputBox type={type} placeholder={placeholder} ref={reference} state={state} />
      {suffixIconName && <SuffixInputIcon icon={`fa-solid ${suffixIconName}`} size={suffixIconSize} onClick={onClickSuffixIcon} />}
    </InputWrapper>
  );
}

Input.propTypes = {
  reference: PropTypes.object,
  iconName: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  suffixIconName: PropTypes.string,
  suffixIconSize: PropTypes.string,
  onClickSuffixIcon: PropTypes.func,
  state: PropTypes.string,
};

Input.dafaultProps = {
  type: 'text',
};

export default Input;
