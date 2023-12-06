import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './accordion.css';

function AccordionContainer({ children }) {
  const [openSection, setOpenSection] = useState(null);

  const handleSectionToggle = (index) => {
    setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
  };

  return (
    <div className="accordion-container">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: index === openSection,
            toggleAccordion: () => handleSectionToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
}

AccordionContainer.propTypes = {
  children: PropTypes.node,
};
AccordionContainer.defaultProps = {

};

export default AccordionContainer;
