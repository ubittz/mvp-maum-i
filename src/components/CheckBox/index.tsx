import styled from 'styled-components';

import { CheckedIcon, NotCheckedIcon } from './icon';

const StyledCheckBox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  .checkbox__icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: 2px solid blue;
    }

    &:hover {
      /* background-color: #f0f0f0; */
    }
  }
`;

interface CheckBoxProps {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckBox({ isChecked, onChange }: CheckBoxProps) {
  return (
    <StyledCheckBox>
      <input type='checkbox' checked={isChecked} onChange={onChange} aria-checked={isChecked} />
      <div className='checkbox__icon'>{isChecked ? <CheckedIcon /> : <NotCheckedIcon />}</div>
    </StyledCheckBox>
  );
}

export default CheckBox;
