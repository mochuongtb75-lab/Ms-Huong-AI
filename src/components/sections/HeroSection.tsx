import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Download, Clock, Award, ShieldCheck, Quote } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { LeadForm } from './LeadForm';

interface HeroSectionProps {
  onOpenDocumentModal: () => void;
  onOpenToast: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenDocumentModal,
  onOpenToast
}) => {
  const [counts, setCounts] = useState({ stat1: 0, stat2: 0, stat3: 0 });

  useEffect(() => {
    // Light count-up animation
    const duration = 1200;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        stat1: Math.min(80, Math.floor(progress * 80)),
        stat2: Math.min(100, Math.floor(progress * 100)),
        stat3: 0
      });
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleExploreCourses = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#168BFF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#18C8FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FFB800]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,116,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,116,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* LEFT COLUMN: ~60% (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Small Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="cyan">
                MS HƯƠNG AI • AI THỰC CHIẾN
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6.5xl font-black uppercase tracking-tight text-white leading-none">
              MS HƯƠNG{' '}
              <span className="bg-gradient-to-r from-[#18C8FF] via-[#168BFF] to-[#18C8FF] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(24,200,255,0.4)]">
                AI
              </span>
            </h1>

            {/* Subheading lớn màu vàng */}
            <h2 className="text-lg sm:text-2xl md:text-2.5xl font-extrabold uppercase tracking-tight text-[#FFC21C] leading-snug drop-shadow-sm">
              ỨNG DỤNG AI &amp; CÔNG NGHỆ THỰC CHIẾN CHO GIÁO DỤC, HÀNH CHÍNH VÀ CÔNG VIỆC HẰNG NGÀY
            </h2>

            {/* Quote Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#08065B]/90 border border-[#2774FF]/60 shadow-[0_4px_25px_rgba(5,4,71,0.6)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-2 right-3 text-[#18C8FF]/20">
                <Quote className="w-10 h-10" />
              </div>
              <p className="text-base sm:text-lg font-bold text-white italic tracking-wide">
                “{siteConfig.tagline}”
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#D5DCF8] leading-relaxed font-normal">
              Tôi giúp giáo viên, giảng viên và người đi làm ứng dụng AI một cách đơn giản, thực tế và hiệu quả để tiết kiệm thời gian – nâng cao năng suất – sáng tạo trong công việc.
            </p>

            {/* IX. STATISTICS: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {/* Stat 1: 60–80% */}
              <div className="p-4 rounded-2xl bg-[#0B0870]/90 border border-[rgba(39,116,255,0.45)] hover:border-[#18C8FF] transition-all shadow-md group">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#18C8FF]" />
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#18C8FF] transition-colors">
                    60–{counts.stat1}%
                  </span>
                </div>
                <p className="text-xs font-bold text-[#D5DCF8]">Tiết kiệm thời gian</p>
                <p className="text-[11px] text-[#D5DCF8]/60 mt-0.5">Giảm thiểu việc sự vụ</p>
              </div>

              {/* Stat 2: 100% */}
              <div className="p-4 rounded-2xl bg-[#0B0870]/90 border border-[rgba(39,116,255,0.45)] hover:border-[#18C8FF] transition-all shadow-md group">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#FFB800]" />
                  <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FFC21C] transition-colors">
                    {counts.stat2}%
                  </span>
                </div>
                <p className="text-xs font-bold text-[#D5DCF8]">Thực hành thực tế</p>
                <p className="text-[11px] text-[#D5DCF8]/60 mt-0.5">Tạo sản phẩm ngay</p>
              </div>

              {/* Stat 3: 0 CẦN */}
              <div className="p-4 rounded-2xl bg-[#0B0870]/90 border border-[#FFB800]/50 hover:border-[#FFC21C] transition-all shadow-md group">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#FFC21C]" />
                  <span className="text-2xl sm:text-3xl font-black text-[#FFC21C]">
                    0 CẦN
                  </span>
                </div>
                <p className="text-xs font-bold text-white">Biết lập trình</p>
                <p className="text-[11px] text-[#D5DCF8]/70 mt-0.5">Không cần giỏi IT</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Button
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                onClick={handleExploreCourses}
              >
                KHÁM PHÁ NGAY
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={<Download className="w-5 h-5 text-[#18C8FF]" />}
                onClick={onOpenDocumentModal}
              >
                NHẬN TÀI LIỆU AI
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: ~40% (5 cols on lg) - Lead Form Card */}
          <div className="lg:col-span-5">
            <LeadForm
              id="hero-lead-form"
              source="Hero Right Section Form"
              onSuccessCallback={() => onOpenToast('Đăng ký thành công! MS HƯƠNG AI sẽ gửi tài liệu sớm nhất.')}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
