import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function AccordionSectionTitle({
  children,
  toggleAccordion,
  isOpen,
  sectionIndex,
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="accordion-title"
      onClick={() => toggleAccordion(sectionIndex)}
      role="button"
      tabIndex="0"
      style={{ color: isOpen ? '  #00364e' : 'unset' }}
    >
      {children}
      <FontAwesomeIcon
        icon={isOpen ? faAngleUp : faAngleDown}
        size="lg"
        style={{ color: isOpen ? '  #00364e' : 'unset' }}
      />
    </div>
  );
}

AccordionSectionTitle.propTypes = {
  children: PropTypes.node,
  toggleAccordion: PropTypes.func,
  isOpen: PropTypes.bool,
  sectionIndex: PropTypes.number,
};
export default AccordionSectionTitle;
