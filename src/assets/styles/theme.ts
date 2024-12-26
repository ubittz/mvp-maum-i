import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { FLEX_DIRECTION } from '@@components/Flex/constants';
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
      [BUTTON_SIZE.XLARGE]: 'height: 48px;',
      [BUTTON_SIZE.LARGE]: 'height: 40px;',
      [BUTTON_SIZE.MEDIUM]: 'height: 32px;',
      [BUTTON_SIZE.SMALL]: 'height: 28px;',
    },
    theme: {
      [BUTTON_THEME.SOLID]: `background: ${COLORS.GRAY_SCALE_800}; border: none; color: ${COLORS.GRAY_SCALE_000}`,
      [BUTTON_THEME.GHOST]: `background: ${COLORS.GRAY_SCALE_000}; border: 1px solid ${COLORS.GRAY_SCALE_800}; color: ${COLORS.GRAY_SCALE_800}`,
      [BUTTON_THEME.SOFT]: `background: ${COLORS.GRAY_SCALE_000}; border: none; color: ${COLORS.GRAY_SCALE_800}`,
      [BUTTON_THEME.OUTLINE]: `background: ${COLORS.GRAY_SCALE_000}; border: 1px solid ${COLORS.GRAY_SCALE_050}; color: ${COLORS.GRAY_SCALE_700}`,
      [BUTTON_THEME.INACTIVE]: `background: ${COLORS.GRAY_SCALE_100}; border: none; color: ${COLORS.GRAY_SCALE_200}`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.TITLE_1]: 'font-size: 24px; font-weight: 800;',
    [TYPOGRAPHY_THEME.TITLE_2]: 'font-size: 20px; font-weight: 800;',
    [TYPOGRAPHY_THEME.SUBTITLE_1]: 'font-size: 18px; font-weight: 800;',
    [TYPOGRAPHY_THEME.SUBTITLE_2]: 'font-size: 16px; font-weight: 800;',
    [TYPOGRAPHY_THEME.SUBTITLE_3]: 'font-size: 14px; font-weight: 700;',
    [TYPOGRAPHY_THEME.BODY_1]: 'font-size: 20px; font-weight: 400;',
    [TYPOGRAPHY_THEME.BODY_2]: 'font-size: 16px; font-weight: 400;',
    [TYPOGRAPHY_THEME.BODY_3]: 'font-size: 14px; font-weight: 400;',
    [TYPOGRAPHY_THEME.CAPTION]: 'font-size: 12px; font-weight: 400;',
    [TYPOGRAPHY_THEME.BUTTON_1]: 'font-size: 16px; font-weight: 700;',
    [TYPOGRAPHY_THEME.BUTTON_2]: 'font-size: 14px; font-weight: 700;',
    [TYPOGRAPHY_THEME.BUTTON_3]: 'font-size: 12px; font-weight: 700;',
  },
  color: {
    defualtFontColor: COLORS.GRAY_SCALE_900,
    main_050: COLORS.GRAY_SCALE_050,
    main_400: COLORS.GRAY_SCALE_800,
    main_700: COLORS.GRAY_SCALE_700,
  },
};
