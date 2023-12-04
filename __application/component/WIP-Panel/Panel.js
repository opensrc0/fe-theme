import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import fontColor from '../component/theme/font/fontColorConst';

const PanelWrapper = styled.div`
  background-color: ${fontColor.white};
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);

  ${(props) => [
    props.default && css`
      border-color: ${fontColor.gray1};
    `,
  ]};

  @media (max-width: 767px) {
    border: 0;
    margin-bottom: 0;
    box-shadow: none;
    background-color: ${fontColor.white};
  }
`;

const PanelTitle = styled.div`
  color: ${fontColor.black};
  font-size: 18px;
  font-weight: 600;
  padding: 16px;
  border-bottom: 1px solid ${fontColor.gray5};
  @media (max-width: 767px) {
    padding: 12px 16px;
    font-size: 16px;
  }

  ${(props) => [
    props.default && css`
      color: ${fontColor.blackLight};
      background-color: ${fontColor.gray4};
      border-color: ${fontColor.gray1};

      @media (max-width: 767px) {
        background-color: ${fontColor.white};
      }
    `,
  ]};
`;

const PanelBody = styled.div`
  padding: 16px;

  &::before,
  &::after {
    display: table;
    content: " ";
  }

  &::after {
    clear: both;
  }

  @media (max-width: 767px) {
    padding: 0;
  }
`;

function Panel({
  title,
  children,
  ...props
}) {
  return (
    <PanelWrapper {...props}>
      <PanelTitle {...props}>{title}</PanelTitle>
      <PanelBody>
        {children}
      </PanelBody>
    </PanelWrapper>
  );
}

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  default: PropTypes.bool,
};

Panel.defaultProps = {
  title: null,
  children: null,
  default: false,
};

export default Panel;
