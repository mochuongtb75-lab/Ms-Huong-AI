import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Download, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FloatingActionsProps {
  onOpenDocumentModal: () => void;
  onOpenRegisterModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenDocumentModal,
  onOpenRegisterModal
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Actions (Right Side) */}
      <div className="hidden sm:flex fixed bottom-8 right-6 z-40 flex-col gap-3 items-end">
        {/* Zalo Button */}
        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 p-3 rounded-2xl bg-[#08065B] border border-[#18C8FF] text-white shadow-[0_4px_20px_rgba(24,200,255,0.3)] hover:scale-105 transition-all"
          title="Chat Zalo ngay"
        >
          <span className="hidden group-hover:inline-block text-xs font-bold px-1 text-[#18C8FF]">
            Zalo: {siteConfig.zalo}
          </span>
          <div className="w-6 h-6 rounded-lg bg-[#18C8FF] text-[#050447] flex items-center justify-center font-black text-xs">
            Z
          </div>
        </a>

        {/* Hotline Button */}
        <a
          href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
          className="group flex items-center gap-2.5 p-3 rounded-2xl bg-[#FFB800] text-[#050447] font-extrabold shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:scale-105 transition-all"
          title="Gọi Hotline tư vấn"
        >
          <Phone className="w-5 h-5 text-[#050447] animate-bounce" />
          <span className="hidden group-hover:inline-block text-xs font-black tracking-wide pr-1">
            {siteConfig.phoneDisplay}
          </span>
        </a>

        {/* Back to top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-[#0B0870]/90 border border-[rgba(39,116,255,0.6)] text-white hover:text-[#18C8FF] hover:border-[#18C8FF] shadow-lg hover:scale-105 transition-all cursor-pointer backdrop-blur-md"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050447]/95 backdrop-blur-xl border-t border-[rgba(39,116,255,0.5)] px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#08065B] border border-[#2774FF]/60 text-white text-[11px] font-bold active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#18C8FF] mb-0.5" />
            <span>GỌI NGAY</span>
          </a>

          {/* Download Document button */}
          <button
            onClick={onOpenDocumentModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#168BFF]/25 border border-[#18C8FF]/70 text-[#18C8FF] text-[11px] font-bold active:scale-95 transition-transform cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#18C8FF] mb-0.5" />
            <span>TÀI LIỆU</span>
          </button>

          {/* Register button */}
          <button
            onClick={onOpenRegisterModal}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FFC21C] text-[#050447] text-[11px] font-extrabold shadow-md active:scale-95 transition-transform cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#050447] mb-0.5" />
            <span>ĐĂNG KÝ</span>
          </button>
        </div>
      </div>
    </>
  );
};
