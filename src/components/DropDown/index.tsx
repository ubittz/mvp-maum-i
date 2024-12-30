import { useState } from 'react';

import styled from 'styled-components';

import { downChevronIcon } from '@@assets/icons';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledDropDown = styled(Flex.Vertical)<{ isOpen: boolean }>`
  width: 320px;
  height: 50px;
  border: 1px solid ${COLORS.MAIN_200};
  border-radius: ${({ isOpen }) => (isOpen ? '12px 12px 0 0' : '12px')};
  padding: 14px 16px;
  position: relative;
  display: flex;
  align-items: left;
  justify-content: space-between;
  cursor: pointer;

  .dropdown-content {
    display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
    z-index: 1;
    border-radius: 0 0 12px 12px;
    border: 1px solid ${COLORS.MAIN_200};
    background-color: ${COLORS.MAIN_000};
  }

  .dropdown-item {
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.MAIN_200};
    }
  }
`;

interface DropDownProps {
  options: string[];
  placeholder: string;
  onSelect: (option: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <StyledDropDown isOpen={isOpen} onClick={toggleDropdown}>
      <Flex.Horizontal className='tw-flex tw-items-center tw-justify-between tw-w-full'>
        <Typography.Body3>{selectedOption || placeholder}</Typography.Body3>
        <img src={downChevronIcon} alt='down-chevron' />
      </Flex.Horizontal>
      <Flex.Vertical className='dropdown-content'>
        {options.map((option) => (
          <div key={option} className='dropdown-item' onClick={() => handleSelect(option)}>
            <Typography.Body3>{option}</Typography.Body3>
          </div>
        ))}
      </Flex.Vertical>
    </StyledDropDown>
  );
};

export default DropDown;
