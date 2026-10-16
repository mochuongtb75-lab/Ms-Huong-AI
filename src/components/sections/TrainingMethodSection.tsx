import React from 'react';
import { Eye, MousePointerClick, Rocket, Workflow, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

export const TrainingMethodSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Eye className="w-6 h-6 text-[#18C8FF]" />;
      case 1: return <MousePointerClick className="w-6 h-6 text-[#168BFF]" />;
      case 2: return <Rocket className="w-6 h-6 text-[#FFB800]" />;
      case 3: return <Workflow className="w-6 h-6 text-[#FFC21C]" />;
      default: return <Rocket className="w-6 h-6 text-[#18C8FF]" />;
    }
  };

  return (
    <section id="method" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="MÔ HÌNH ĐÀO TẠO THỰC CHIẾN"
          badgeVariant="cyan"
          title="HỌC AI THEO CÁCH THỰC TẾ"
          subtitle="Tôi không hướng đến việc giúp người học biết thật nhiều công cụ. Tôi hướng đến việc giúp bạn làm được việc bằng AI. Mỗi nội dung đều gắn với một tình huống thực tế và hướng đến một sản phẩm cụ thể để người học có thể áp dụng ngay vào công việc."
        />

        {/* 4 Cards Grid with step connector arrows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.methodSteps.map((step, idx) => (
            <div
              key={step.step}
              className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#0B0870]/90 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative group ${
                step.isGold
                  ? 'border-2 border-[#FFB800]/70 shadow-[0_4px_25px_rgba(255,184,0,0.18)] hover:border-[#FFC21C] hover:shadow-[0_8px_35px_rgba(255,194,28,0.3)]'
                  : 'border border-[rgba(39,116,255,0.45)] hover:border-[#18C8FF] hover:shadow-[0_8px_30px_rgba(24,200,255,0.22)]'
              }`}
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className={`text-2xl sm:text-3xl font-black tracking-wider ${
                      step.isGold ? 'text-[#FFC21C]' : 'text-[#18C8FF]'
                    }`}
                  >
                    {step.step}
                  </span>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      step.isGold
                        ? 'bg-[#FFB800]/15 border border-[#FFB800]/60 text-[#FFC21C]'
                        : 'bg-[#08065B] border border-[#2774FF]/60 text-[#18C8FF]'
                    }`}
                  >
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#D5DCF8] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Status indicator tag */}
              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                <span className={step.isGold ? 'text-[#FFC21C]' : 'text-[#18C8FF]'}>
                  {idx < 2 ? 'Giai đoạn nền tảng' : 'Giai đoạn bứt phá'}
                </span>
                {idx < 3 && (
                  <ArrowRight className="w-4 h-4 text-white/30 hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
