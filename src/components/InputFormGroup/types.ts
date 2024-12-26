import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

import { FormGroupProps } from '@@components/FormGroup/types';
import { TEXTFIELD_THEME } from './constants';
import { asType } from '@@types/common';

export type TextFieldTheme = asType<typeof TEXTFIELD_THEME>;

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: TextFieldTheme;
}

export interface InputFormGroupProps extends FormGroupProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  theme?: TextFieldTheme;
}
