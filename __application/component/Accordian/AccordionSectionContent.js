import React from 'react';
import PropTypes from 'prop-types';

function AccordionSectionContent({ children, isOpen }) {
  return (
    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
}

AccordionSectionContent.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
};
export default AccordionSectionContent;
