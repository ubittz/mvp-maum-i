import styled from 'styled-components';

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
  }
`;

function InputFormGroup({ inputProps, buttonProps, theme = 'default', ...props }: InputFormGroupProps) {
  return (
    <StyledInputFormGroup {...props}>
      <Flex.Horizontal className='input_form_group__input_wrap'>
        <TextField {...inputProps} theme={theme} />
        {buttonProps && <Button.Small {...buttonProps} />}
      </Flex.Horizontal>
    </StyledInputFormGroup>
  );
}

export default InputFormGroup;
