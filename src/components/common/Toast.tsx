import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: 'success' | 'info';
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  duration = 4000
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-24 right-5 sm:bottom-8 sm:right-8 z-50 max-w-md bg-[#08065B] border border-[#18C8FF] text-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(24,200,255,0.35)] flex items-start gap-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <CheckCircle2 className="w-6 h-6 text-[#18C8FF] shrink-0 mt-0.5" />
      <div className="flex-1 text-sm leading-relaxed text-[#D5DCF8]">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-[#D5DCF8] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
        aria-label="Đóng thông báo"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
