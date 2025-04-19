import React from 'react';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const sizeClasses = {
  small: 'text-sm px-3 py-1',
  medium: 'text-base px-4 py-2',
  large: 'text-lg px-5 py-3',
};

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  // Determine background and text color
  const bgColor = backgroundColor || (primary ? colors.primary : colors.bgGray200);
  const textColor = primary ? '#FFFFFF' : colors.textPrimary;
  const hoverColor = primary ? colors.hoverPrimary : colors.bgGray300;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md font-semibold ${sizeClasses[size]}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: spacing.md,
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverColor;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = bgColor;
      }}
    >
      {label}
    </button>
  );
};
