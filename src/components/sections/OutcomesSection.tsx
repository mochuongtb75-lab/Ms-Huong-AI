import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';

interface OutcomesSectionProps {
  onOpenDocumentModal: () => void;
}

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ onOpenDocumentModal }) => {
  return (
    <section id="outcomes" className="py-20 sm:py-28 bg-[#08065B]/50 relative overflow-hidden border-t border-[rgba(39,116,255,0.25)]">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#18C8FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="CAM KẾT ĐẦU RA THỰC TẾ"
          badgeVariant="gold"
          title="BẠN SẼ LÀM ĐƯỢC GÌ?"
          subtitle="Sau khi đồng hành cùng Ms Hương AI, bạn hoàn toàn tự tin làm chủ những kỹ năng số sau:"
        />

        {/* 12 Outcomes in 3 columns desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {siteConfig.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#0B0870]/85 border border-[rgba(39,116,255,0.4)] hover:border-[#18C8FF] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3.5 shadow-md group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#18C8FF]/15 border border-[#18C8FF]/50 flex items-center justify-center shrink-0 group-hover:bg-[#18C8FF] group-hover:text-[#050447] text-[#18C8FF] transition-all">
                <CheckCircle2 className="w-4 h-4 text-current" />
              </div>

              <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#18C8FF] transition-colors leading-snug">
                {outcome}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom banner card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B0870] via-[#08065B] to-[#0B0870] border border-[#2774FF]/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/15 border border-[#FFB800]/50 flex items-center justify-center shrink-0 text-[#FFC21C]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                Sẵn sàng nâng cấp phương pháp giảng dạy &amp; quản trị số?
              </h4>
              <p className="text-xs sm:text-sm text-[#D5DCF8]">
                Đăng ký ngay để nhận tư vấn lộ trình phù hợp với đơn vị công tác của bạn.
              </p>
            </div>
          </div>

          <Button
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={onOpenDocumentModal}
          >
            NHẬN LỘ TRÌNH MIỄN PHÍ
          </Button>
        </div>
      </Container>
    </section>
  );
};
