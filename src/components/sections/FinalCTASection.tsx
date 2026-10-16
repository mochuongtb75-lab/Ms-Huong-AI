import React from 'react';
import { ArrowRight, Download, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

interface FinalCTASectionProps {
  onOpenDocumentModal: () => void;
  onOpenRegisterModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenDocumentModal,
  onOpenRegisterModal
}) => {
  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[#08065B]/60 to-[#050447]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#168BFF]/15 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 p-8 sm:p-14 rounded-3xl bg-[#0B0870]/90 border-2 border-[rgba(39,116,255,0.6)] shadow-[0_20px_60px_rgba(5,4,71,0.95)] backdrop-blur-xl relative overflow-hidden">
          {/* Decorative glowing gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#18C8FF] via-[#FFB800] to-[#168BFF]" />

          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="cyan">KHỞI ĐẦU CÙNG CÔNG NGHỆ</Badge>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            HỌC AI – LÀM CHỦ AI –<br className="hidden sm:inline" />{' '}
            <span className="bg-gradient-to-r from-[#18C8FF] via-[#168BFF] to-[#18C8FF] bg-clip-text text-transparent">
              TẠO SẢN PHẨM VỚI AI
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#D5DCF8] leading-relaxed max-w-2xl mx-auto font-normal">
            “Đừng chỉ học về AI. Hãy học cách làm việc cùng AI. Và quan trọng hơn, hãy biến AI thành trợ lý của chính bạn.”
          </p>

          {/* Highlight */}
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#08065B] border border-[#FFB800]/50 shadow-md">
            <p className="text-sm sm:text-base font-extrabold text-[#FFC21C] tracking-wide">
              MS HƯƠNG AI: {siteConfig.tagline}
            </p>
          </div>

          {/* 4 CTA buttons */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-3xl mx-auto">
            {/* CTA 1: KHÁM PHÁ KHÓA HỌC */}
            <Button
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={scrollToPrograms}
              className="w-full"
            >
              KHÁM PHÁ KHÓA HỌC
            </Button>

            {/* CTA 2: NHẬN BỘ PROMPT MIỄN PHÍ */}
            <Button
              variant="gold"
              size="md"
              icon={<Download className="w-4 h-4" />}
              onClick={onOpenDocumentModal}
              className="w-full"
            >
              NHẬN BỘ PROMPT
            </Button>

            {/* CTA 3: ĐĂNG KÝ ĐÀO TẠO AI */}
            <Button
              variant="cyan"
              size="md"
              icon={<Sparkles className="w-4 h-4" />}
              onClick={onOpenRegisterModal}
              className="w-full"
            >
              ĐĂNG KÝ ĐÀO TẠO
            </Button>

            {/* CTA 4: LIÊN HỆ MS HƯƠNG */}
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                size="md"
                icon={<MessageCircle className="w-4 h-4 text-[#18C8FF]" />}
                className="w-full"
              >
                LIÊN HỆ MS HƯƠNG
              </Button>
            </a>
          </div>

          {/* Direct Hotline link */}
          <div className="pt-2 text-xs text-[#D5DCF8]/70 flex items-center justify-center gap-2">
            <span>Tư vấn trực tiếp 24/7 qua Hotline:</span>
            <a
              href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
              className="text-[#FFC21C] font-bold hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
