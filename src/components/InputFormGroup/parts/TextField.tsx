import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

import { TextFieldProps } from '../types';
import { TextFieldTheme } from '../types';

const StyledTextField = styled.input<{ $theme: TextFieldTheme }>`
  height: 48px;
  outline: none;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;

  ${({ theme, $theme }) => theme.textField.theme[$theme]}

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_200};
  }

  &:read-only {
    color: ${COLORS.GRAY_SCALE_200};
    background: ${COLORS.GRAY_SCALE_100};
    border: none;
  }
`;

const TextField = ({ theme = 'default', ...props }: TextFieldProps) => {
  return <StyledTextField $theme={theme} {...props} />;
};

export default TextField;
