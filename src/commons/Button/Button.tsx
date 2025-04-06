import { useState } from 'react';

interface IProps {
  className?: string;
  label: string;
  handleOnChange(label: string): void;
}

const Button = ({ className, label, handleOnChange }: IProps) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButtonState = () => {
    setIsActive(!isActive);
    handleOnChange(label);
  };

  return (
    <div className={className}>
      <button
        className={`toggle-button ${isActive ? 'active' : ''}`}
        onClick={toggleButtonState}
        data-testid="button"
        aria-pressed={isActive}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;