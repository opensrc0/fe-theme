import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import fontColor from '../theme/font/fontColorConst';

const Partition = styled(
  ({
    partitionXS,
    children,
    ...props
  }) => React.cloneElement(children, props),
)`
  &&& {
    @media (max-width: 767px) {
      ${(props) => [
    props.partitionXS && css`
          border-bottom: 8px solid #e9ebee;
          background-color: ${fontColor.white};
          `,
  ]}
    }
  }
`;

Partition.propTypes = {
  partitionXS: PropTypes.bool,
};

export default Partition;
