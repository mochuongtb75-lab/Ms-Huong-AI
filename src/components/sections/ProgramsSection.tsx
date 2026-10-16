import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Sparkles, 
  AppWindow, 
  Layers, 
  FileSpreadsheet, 
  Bot, 
  SearchCode, 
  Gamepad2,
  ArrowRight,
  Check
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Card } from '../common/Card';
import { Course } from '../../types';

interface ProgramsSectionProps {
  onSelectCourse: (course: Course) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectCourse }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#18C8FF]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#FFB800]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#18C8FF]" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6 text-[#168BFF]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#FFC21C]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#18C8FF]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#FFB800]" />;
      case 'SearchCode': return <SearchCode className="w-6 h-6 text-[#168BFF]" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-[#18C8FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#18C8FF]" />;
    }
  };

  return (
    <section id="programs" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#168BFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="CHƯƠNG TRÌNH ĐÀO TẠO THỰC CHIẾN"
          badgeVariant="cyan"
          title="KHÓA HỌC AI THỰC CHIẾN NỔI BẬT"
          subtitle="Hệ thống bài giảng được thiết kế thực tế, bám sát chuyên môn giảng dạy và quản trị công việc thông minh."
        />

        {/* 3x3 Grid on Desktop, 2 cols on Tablet, 1 col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {siteConfig.courses.map((course) => (
            <Card
              key={course.id}
              hoverEffect
              className="flex flex-col justify-between group cursor-pointer relative"
              onClick={() => onSelectCourse(course)}
            >
              <div>
                {/* Header row: Course Number & Icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-widest text-[#FFC21C] uppercase px-2.5 py-1 rounded-md bg-[#FFB800]/10 border border-[#FFB800]/30">
                      {course.number}
                    </span>
                    {course.tag && (
                      <span className="text-[10px] font-bold text-[#D5DCF8]/70 px-2 py-0.5 rounded bg-white/5">
                        {course.tag}
                      </span>
                    )}
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#08065B] border border-[#2774FF]/50 flex items-center justify-center group-hover:scale-110 group-hover:border-[#18C8FF] group-hover:shadow-[0_0_15px_rgba(24,200,255,0.3)] transition-all">
                    {getIcon(course.iconName)}
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#18C8FF] transition-colors leading-tight mb-2.5 uppercase">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#D5DCF8] leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Highlights chips if present */}
                {course.highlights && (
                  <div className="space-y-1.5 pt-2 border-t border-white/10 mb-4">
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#D5DCF8]/80">
                        <Check className="w-3.5 h-3.5 text-[#18C8FF] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Trigger */}
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#18C8FF] group-hover:text-[#FFC21C] transition-colors border-t border-white/5">
                <span>Xem chi tiết &amp; Đăng ký</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
