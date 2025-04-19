import React from 'react';
import { colors } from '../theme/colors'; // Import color tokens

export interface BadgeProps {
  label: string;
  color?: 'default' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

// Define the badge color classes based on the colors theme
const badgeColorClasses = {
  default: `bg-[${colors.badge.default.bg}] text-[${colors.badge.default.text}]`,
  success: `bg-[${colors.badge.success.bg}] text-[${colors.badge.success.text}]`,
  warning: `bg-[${colors.badge.warning.bg}] text-[${colors.badge.warning.text}]`,
  error: `bg-[${colors.badge.error.bg}] text-[${colors.badge.error.text}]`,
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'default',
  icon,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full ${badgeColorClasses[color]}`} // Use the badge color classes
      role="status" // Assistive tech reads this as status info
      aria-label={label} // Reads label for screen readers
    >
      {icon && <span className="text-base">{icon}</span>}
      {label}
    </span>
  );
};
