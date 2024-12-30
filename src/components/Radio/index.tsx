import styled from 'styled-components';

import { RadioIcon, RadioCheckedIcon } from './icons';
import { RadioProps } from './types';

const StyledRadio = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    display: none; // 기본 input 숨김
  }

  .radio__icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;

    &.checked {
      svg {
        display: block;
      }
    }

    svg {
      display: none;
    }
  }
`;

const Radio: React.FC<RadioProps> = ({ children, onSelect, checked, ...props }) => {
  return (
    <StyledRadio>
      <input type='radio' onChange={onSelect} checked={checked} {...props} />
      {checked ? <RadioCheckedIcon className='radio__icon' /> : <RadioIcon className='radio__icon' />}
      {children}
    </StyledRadio>
  );
};

export default Radio;
