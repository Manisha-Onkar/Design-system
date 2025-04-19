import React, { ReactNode } from 'react';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, title, content, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
      style={{ zIndex: 1000 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full"
        style={{ zIndex: 1001 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="modal-title"
          className="text-xl font-semibold mb-4"
          style={{
            color: colors.textPrimary,
            fontFamily: typography.primary,
          }}
        >
          {title}
        </h3>
        <p
          id="modal-description"
          className="text-base mb-4"
          style={{ color: colors.textSecondary }}
        >
          {content}
        </p>

        {/* ✅ Render any extra content */}
        {children && <div className="mb-4">{children}</div>}

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
