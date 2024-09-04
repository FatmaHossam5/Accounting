import React, { useState } from 'react';
import Egypt from '../../../assets/images/Flag_of_Egypt.svg.png';

export default function SelectWithFlag({ label, options, value, onChange, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options?.find((option) => option.value === value) || {
    label: '+20',
    flag: Egypt,
  };

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <>
      <div className="custom-select  pe-2">
        {label && <label htmlFor={rest.id}>{label}</label>}
        <div
          className="custom-select-input d-flex px-login-input  pe-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.flag && (
            <img
              src={selectedOption.flag}
              alt={`${selectedOption.label} flag`}
              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
            />
          )}
          {selectedOption.label}
        </div>
        {isOpen && (
          <div className="custom-select-dropdown">
            {options.map((option, index) => (
              <div
                key={index}
                className="custom-select-option"
                onClick={() => handleSelect(option)}
              >
                {option.flag && (
                  <img
                    src={option.flag}
                    alt={`${option.label} flag`}
                    style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                  />
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
