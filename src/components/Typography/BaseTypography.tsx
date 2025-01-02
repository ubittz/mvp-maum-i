import styled from 'styled-components';

import { TypographyProps, TypographyTheme } from '@@components/Typography/types';

const StyledBaseTypography = styled.p<{ $theme: TypographyTheme; $color?: string; $fontWeight?: number }>`
  letter-spacing: -0.04em;
  ${({ theme, $theme }) => theme.typography[$theme]}
  color: ${({ theme, $color }) => $color ?? theme.color.defualtFontColor};
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 800};
`;

const BaseTypography =
  (theme: TypographyTheme) =>
  ({ color, fontWeight, ...props }: TypographyProps) => {
    return <StyledBaseTypography {...props} $theme={theme} $color={color} $fontWeight={fontWeight} />;
  };

export default BaseTypography;
