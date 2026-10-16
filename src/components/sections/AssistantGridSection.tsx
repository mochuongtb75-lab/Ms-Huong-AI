import React from 'react';
import { 
  BookOpen, 
  BookMarked, 
  PenTool, 
  Palette, 
  FileCheck, 
  CalendarDays, 
  Lightbulb, 
  Briefcase 
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';

export const AssistantGridSection: React.FC = () => {
  const getAssistantIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#18C8FF]" />;
      case 'BookMarked': return <BookMarked className="w-5 h-5 text-[#168BFF]" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-[#FFB800]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#FFC21C]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#18C8FF]" />;
      case 'CalendarDays': return <CalendarDays className="w-5 h-5 text-[#168BFF]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#FFB800]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#18C8FF]" />;
      default: return <BookOpen className="w-5 h-5 text-[#18C8FF]" />;
    }
  };

  return (
    <section id="assistants" className="py-20 sm:py-24 bg-[#08065B]/40 relative overflow-hidden border-t border-[rgba(39,116,255,0.25)]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#18C8FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="ĐỘT PHÁ NĂNG SUẤT CÁ NHÂN"
          badgeVariant="gold"
          title="MỘT NGƯỜI – MỘT TRỢ LÝ AI"
          subtitle="AI không chỉ để hỏi và nhận câu trả lời. Khi biết cách sử dụng đúng, bạn có thể biến AI thành:"
        />

        {/* 8 mini cards grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.assistants.map((assistant) => (
            <div
              key={assistant.id}
              className="p-5 rounded-2xl bg-[#0B0870]/80 border border-[rgba(39,116,255,0.4)] hover:border-[#18C8FF] hover:-translate-y-1 transition-all duration-300 shadow-md group"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#08065B] border border-[#2774FF]/60 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#18C8FF] group-hover:shadow-[0_0_12px_rgba(24,200,255,0.3)] transition-all">
                  {getAssistantIcon(assistant.iconName)}
                </div>
                <h3 className="text-base font-extrabold text-white group-hover:text-[#18C8FF] transition-colors leading-tight">
                  {assistant.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#D5DCF8] leading-relaxed">
                {assistant.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
