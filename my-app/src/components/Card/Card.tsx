import React from 'react';
import { colors } from '../theme/colors';  // Importing colors
import { spacing } from '../theme/spacing';  // Importing spacing

export interface CardProps {
  title?: string;
  content: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <div
      style={{
        backgroundColor: colors.background, // Using background color from theme
        padding: spacing.md, // Using spacing from theme
        border: `1px solid ${colors.border}`, // Using border color from theme
      }}
      className="rounded-lg shadow-lg"
    >
      {title && (
        <h3
          className="font-bold"
          style={{
            fontSize: '1.25rem', // You can use typography tokens here if needed
            marginBottom: spacing.sm, // Use spacing for margin between title and content
          }}
        >
          {title}
        </h3>
      )}
      <p
        className="text-base"
        style={{
          color: colors.textPrimary, // Applying text color from the theme
          marginBottom: spacing.md, // Use spacing for margin between content and footer
        }}
      >
        {content}
      </p>
      {footer && <div className="border-t pt-2">{footer}</div>}
    </div>
  );
};
