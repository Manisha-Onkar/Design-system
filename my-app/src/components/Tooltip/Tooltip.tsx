import React, { useState } from 'react';
import { colors} from '../theme/colors'; // Importing theme tokens
import { typography } from '../theme/typography'; 

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2"
          style={{
            backgroundColor: colors.tooltipBackground, // Tooltip background color
            color: colors.tooltipText, // Tooltip text color
            padding: '8px',
            borderRadius: '4px',
            fontFamily: typography.primary,
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
            zIndex: 1000,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
