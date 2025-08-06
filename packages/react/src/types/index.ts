import { ReactNode } from 'react';

export type ComponentProps = {
  children?: ReactNode;
  className?: string;
};

export type Variant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';

export type Size = 'small' | 'medium' | 'large';

export type Color = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'error' 
  | 'warning' 
  | 'success' 
  | 'info';

export interface ButtonProps extends ComponentProps {
  variant?: Variant;
  size?: Size;
  color?: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
}

export interface CardProps extends ComponentProps {
  variant?: 'elevated' | 'filled' | 'outlined';
  padding?: Size;
}

export interface TextFieldProps extends ComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
}