import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { FLEX_DIRECTION } from '@@components/Flex/constants';
import { TEXTFIELD_THEME } from '@@components/InputFormGroup/constants';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';
import { COLORS } from '@@constants/colors';

export const theme: DefaultTheme = {
  flex: {
    direction: {
      [FLEX_DIRECTION.HORIZONTAL]: 'row',
      [FLEX_DIRECTION.VERTICAL]: 'column',
    },
  },
  button: {
    size: {
      [BUTTON_SIZE.XLARGE]: 'height: 48px; font-size: 14px;',
      [BUTTON_SIZE.LARGE]: 'height: 40px; padding: 0 16px; font-size: 14px;',
      [BUTTON_SIZE.MEDIUM]: 'height: 32px; padding: 0 16px; font-size: 14px;',
      [BUTTON_SIZE.SMALL]: 'height: 28px; padding: 0 12px; font-size: 12px;',
    },
    theme: {
      [BUTTON_THEME.SOLID]: `background: ${COLORS.GRAY_SCALE_800}; border: none; color: ${COLORS.GRAY_SCALE_000}`,
      [BUTTON_THEME.GHOST]: `border: 1px solid ${COLORS.GRAY_SCALE_800}; color: ${COLORS.GRAY_SCALE_800}`,
      [BUTTON_THEME.SOFT]: `background: ${COLORS.MAIN_200}; border: none; color: ${COLORS.GRAY_SCALE_800}`,
      [BUTTON_THEME.OUTLINE]: `border: 1px solid ${COLORS.MAIN_200}; color: ${COLORS.GRAY_SCALE_700}`,
      [BUTTON_THEME.INACTIVE]: `background: ${COLORS.GRAY_SCALE_100}; border: none; color: ${COLORS.GRAY_SCALE_200}`,
    },
  },
  textField: {
    theme: {
      [TEXTFIELD_THEME.DEFAULT]: `color: ${COLORS.GRAY_SCALE_900}; border: 1px solid ${COLORS.MAIN_300}; &:focus { border-color: ${COLORS.MUSTARD_500}; } background-color: transparent; placeholder-color: ${COLORS.GRAY_SCALE_300};`,
      [TEXTFIELD_THEME.SOFT]: `color: ${COLORS.GRAY_SCALE_900}; border: none; background: ${COLORS.MAIN_300};`,
      [TEXTFIELD_THEME.GHOST]: `color: ${COLORS.GRAY_SCALE_900}; border: 1px solid ${COLORS.MAIN_500}; background: transparent;`,
      [TEXTFIELD_THEME.DISABLED]: `color: ${COLORS.GRAY_SCALE_300}; background: ${COLORS.MAIN_200}; border: ${COLORS.MAIN_200}; pointer-events: none;`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.TITLE_1]: 'font-size: 36px; font-weight: 800; line-height: 54px;',
    [TYPOGRAPHY_THEME.TITLE_2]: 'font-size: 32px; font-weight: 800; line-height: 48px;',
    [TYPOGRAPHY_THEME.TITLE_3]: 'font-size: 24px; font-weight: 800; line-height: 36px;',
    [TYPOGRAPHY_THEME.TITLE_4]: 'font-size: 20px; font-weight: 800; line-height: 28px;',
    [TYPOGRAPHY_THEME.TITLE_5]: 'font-size: 18px; font-weight: 800; line-height: 28px;',
    [TYPOGRAPHY_THEME.SUBTITLE_1]: 'font-size: 20px; font-weight: 700; line-height: 24px;',
    [TYPOGRAPHY_THEME.SUBTITLE_2]: 'font-size: 16px; font-weight: 700; line-height: 20px;',
    [TYPOGRAPHY_THEME.SUBTITLE_3]: 'font-size: 14px; font-weight: 700; line-height: 20px;',
    [TYPOGRAPHY_THEME.BODY_1]: 'font-size: 20px; font-weight: 400; line-height: 24px;',
    [TYPOGRAPHY_THEME.BODY_2]: 'font-size: 16px; font-weight: 400; line-height: 20px;',
    [TYPOGRAPHY_THEME.BODY_3]: 'font-size: 14px; font-weight: 400; line-height: 14px;',
    [TYPOGRAPHY_THEME.CAPTION_1]: 'font-size: 12px; font-weight: 400; line-height: 20px;',
    [TYPOGRAPHY_THEME.CAPTION_2]: 'font-size: 10px; font-weight: 400; line-height: 11.34px;',
    [TYPOGRAPHY_THEME.BUTTON_1]: 'font-size: 16px; font-weight: 700; line-height: 20px;',
    [TYPOGRAPHY_THEME.BUTTON_2]: 'font-size: 14px; font-weight: 700; line-height: 18px;',
    [TYPOGRAPHY_THEME.BUTTON_3]: 'font-size: 12px; font-weight: 700; line-height: 16px;',
  },
  color: {
    defualtFontColor: COLORS.GRAY_SCALE_900,
    main_100: COLORS.MAIN_100,
    main_200: COLORS.MAIN_200,
    main_300: COLORS.MAIN_300,
    main_500: COLORS.MAIN_500,
  },
};
