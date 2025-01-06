import styled from 'styled-components';

import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

import { TextFieldTheme } from '../types';
import { LabelTextFieldProps } from '../types';

const Container = styled(Flex.Horizontal)<{ $theme: TextFieldTheme }>`
  align-items: center;
  height: 48px;
  outline: none;
  padding: 0 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;

  ${({ theme, $theme }) => theme.textField.theme[$theme]}
`;

const Label = styled.label`
  display: block;
  color: ${COLORS.GRAY_SCALE_600};
  width: 92px;
`;

const StyledLabelTextField = styled.input<{ $theme: TextFieldTheme }>`
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

function LabelTextField({ title, theme = 'soft', ...props }: LabelTextFieldProps) {
  return (
    <Container $theme={theme}>
      <Label>{title}</Label>
      <StyledLabelTextField $theme={theme} {...props} />
    </Container>
  );
}

export default LabelTextField;
