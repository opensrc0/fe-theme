import React from 'react';
import PropTypes from 'prop-types';

function AccordionSection({
  children,
  isOpen,
  toggleAccordion,
}) {
  return (
    <div className="accordion-section">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen,
            toggleAccordion,
          });
        }
        return child;
      })}
    </div>
  );
}

AccordionSection.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  toggleAccordion: PropTypes.func,
};

export default AccordionSection;
