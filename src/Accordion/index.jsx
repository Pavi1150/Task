import React, { useEffect, useState } from 'react';
import './Accordion.css';
import upArrow from "../Icons/arrowUp.png";
import downArrow from "../Icons/downArrow.png";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (e) => {
    e.preventDefault()
    e.stopPropagation()
      setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div>
          {title} <span className='ms-2'>{isOpen ? <img src={downArrow} className='arrow-height' alt="Down Arrow" /> : <img src={upArrow} className='arrow-height' alt="Up Arrow" />}</span>
          <div><span className='add-delivery'>Add Deliverable</span> <span className='added-text'>(4 added)</span></div>
        </div>
        <div className="status-dropdown">
          <label>Status:</label>
          <div>
            <select>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
