import { useState, useRef } from 'react';

import styled from 'styled-components';

import { xCircleIcon } from '@@assets/icons';
import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import TextField from '@@components/InputFormGroup/parts/TextField';
import { InputFormGroupProps } from '@@components/InputFormGroup/types';

const StyledInputFormGroup = styled(FormGroup)`
  .input_form_group__input_wrap {
    position: relative;

    & > input {
      flex: 1;
      width: 100%;
    }

    & > button {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }

    & > img {
      position: absolute;
      width: 24px;
      height: 24px;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
      cursor: pointer;
    }
  }
`;

function InputFormGroup({ inputProps, buttonProps, theme = 'default', showDeleteIcon = false, ...props }: InputFormGroupProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <StyledInputFormGroup {...props}>
      <Flex.Horizontal className='input_form_group__input_wrap'>
        <TextField
          {...inputProps}
          theme={theme}
          ref={inputRef}
          onFocus={(e) => {
            setIsFocused(true);
            if (inputProps.onFocus) inputProps.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (inputProps.onBlur) inputProps.onBlur(e);
          }}
        />
        {buttonProps && <Button.Small {...buttonProps} />}
        {showDeleteIcon && isFocused && <img src={xCircleIcon} alt='delete' onClick={handleClear} onMouseDown={(e) => e.preventDefault()} />}
      </Flex.Horizontal>
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
