import styled from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from '@@components/Button/types';

const StyledBasicButton = styled.button<{ $size: ButtonSize; $theme: ButtonTheme }>`
  outline: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
`;

const BasicButton =
  (size: ButtonSize) =>
  ({ theme = 'solid', ...props }: ButtonProps) => {
    return (
      <StyledBasicButton {...props} $size={size} $theme={theme}>
        {props.iconPosition === 'left' && props.icon && <img src={props.icon} alt='icon' />}
        {props.children}
        {props.iconPosition === 'right' && props.icon && <img src={props.icon} alt='icon' />}
      </StyledBasicButton>
    );
  };

export default BasicButton;
