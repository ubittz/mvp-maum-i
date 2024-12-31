import { ButtonSize, ButtonTheme } from '@@components/Button/types';
import { FlexDirection } from '@@components/Flex/types';
import { TypographyTheme } from '@@components/Typography/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: {
      direction: Record<FlexDirection, string>;
    };
    button: {
      size: Record<ButtonSize, string>;
      theme: Record<ButtonTheme, string>;
    };
    textField: {
      theme: Record<TextFieldTheme, string>;
    };
    typography: Record<TypographyTheme, string>;
    color: {
      defualtFontColor: string;
      main_100: string;
      main_200: string;
      main_300: string;
      main_500: string;
    };
  }
}
