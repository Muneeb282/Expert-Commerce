import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Accordion = ({ faq }) => {
  // const { id, text1, title } = faq;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="main_faq_continer">
        <div onClick={handleClick} className="faq_userSide">
          <div>{isOpen ? <FaChevronDown /> : <FaChevronRight />}</div>
          <div className="faq_style">
            {faq.id}. {faq.title}
          </div>
          <div></div>
        </div>
        {isOpen && <div className="faq_text">{faq.text1}</div>}
      </div>
    </div>
  );
};
export default Accordion;
