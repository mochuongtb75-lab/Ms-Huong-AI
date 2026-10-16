import React from 'react';
import { Sparkles, HeartHandshake, Check, Quote } from 'lucide-react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="cyan" className="mb-3">
            TƯ DUY &amp; ĐỊNH HƯỚNG
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-black uppercase tracking-tight text-white leading-tight">
            AI DÀNH CHO TẤT CẢ MỌI NGƯỜI
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#D5DCF8]">
            Đơn giản hóa công nghệ để ai cũng có thể làm chủ và ứng dụng hiệu quả.
          </p>
        </div>

        {/* 2 Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card Left: AI KHÔNG KHÓ NHƯ BẠN NGHĨ */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0870]/90 border border-[rgba(39,116,255,0.45)] hover:border-[#18C8FF] shadow-2xl transition-all duration-300 relative flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#18C8FF]/15 border border-[#18C8FF]/50 flex items-center justify-center text-[#18C8FF] mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                AI KHÔNG KHÓ NHƯ BẠN NGHĨ
              </h3>

              <div className="space-y-3 mb-6 text-base sm:text-lg text-[#D5DCF8] leading-relaxed">
                <p className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#18C8FF] shrink-0" />
                  <span>Bạn <strong className="text-white">không cần biết lập trình</strong> để bắt đầu.</span>
                </p>
                <p className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#18C8FF] shrink-0" />
                  <span>Bạn <strong className="text-white">không cần giỏi công nghệ</strong> để ứng dụng AI.</span>
                </p>
              </div>

              {/* Highlight box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#08065B] border border-[#18C8FF]/50 shadow-inner">
                <p className="text-sm sm:text-base font-bold text-[#18C8FF] leading-relaxed">
                  “Điều bạn cần là một phương pháp đúng, công cụ phù hợp và người hướng dẫn giúp bạn biến kiến thức thành sản phẩm thực tế.”
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#D5DCF8]/70">
              Chỉ cần biết gõ phím và tư duy theo mục tiêu bài dạy, AI sẽ làm phần việc kỹ thuật cho bạn.
            </div>
          </div>

          {/* Card Right: TRIẾT LÝ CỦA MS HƯƠNG AI */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B0870]/90 border-2 border-[#FFB800]/60 shadow-[0_4px_30px_rgba(255,184,0,0.15)] hover:border-[#FFC21C] transition-all duration-300 relative flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FFB800]/15 border border-[#FFB800]/60 flex items-center justify-center text-[#FFC21C] mb-6 group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                TRIẾT LÝ CỦA MS HƯƠNG AI
              </h3>

              {/* Quote */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#08065B] border-l-4 border-l-[#FFB800] border-y border-r border-[#2774FF]/40 mb-6 relative">
                <Quote className="w-6 h-6 text-[#FFB800]/40 absolute top-2 right-2" />
                <p className="text-base sm:text-lg font-bold text-white italic leading-relaxed">
                  “AI không thay thế người giáo viên. AI giúp người giáo viên có thêm thời gian để tập trung vào điều quan trọng nhất – người học.”
                </p>
              </div>

              {/* Content */}
              <p className="text-sm sm:text-base text-[#D5DCF8] leading-relaxed">
                Công nghệ chỉ thực sự có giá trị khi nó giúp công việc trở nên đơn giản hơn, hiệu quả hơn và sáng tạo hơn.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#FFC21C]/80 font-medium">
              Lấy người thầy và người học làm trung tâm trong mọi bước chuyển đổi số.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
