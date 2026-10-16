import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles, BookOpen, Copy, Check } from 'lucide-react';
import { LeadForm } from '../sections/LeadForm';
import { Badge } from '../common/Badge';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'register' | 'preview'>('register');
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  if (!isOpen) return null;

  const samplePrompts = [
    {
      title: 'Prompt Soạn Giáo Án 5E Chuẩn Phát Triển Năng Lực',
      text: 'Bạn là chuyên gia sư phạm hàng đầu. Hãy thiết kế kế hoạch bài dạy theo quy trình 5E (Engage - Explore - Explain - Elaborate - Evaluate) cho chủ đề [Nhập Tên Bài Học], đối tượng học sinh [Lớp X]. Yêu cầu nêu rõ mục tiêu phẩm chất năng lực, hoạt động học tập tương tác của học sinh và công cụ đánh giá.'
    },
    {
      title: 'Prompt Tạo Bộ Câu Hỏi Trắc Nghiệm 4 Mức Độ',
      text: 'Hãy tạo bảng ma trận và 10 câu hỏi trắc nghiệm khách quan gồm 4 đáp án (A, B, C, D) có đáp án đúng và lời giải thích chi tiết cho nội dung [Nhập Nội Dung], phân bố theo 4 mức độ nhận thức: Nhận biết (40%), Thông hiểu (30%), Vận dụng (20%), Vận dụng cao (10%).'
    },
    {
      title: 'Prompt Thiết Kế Trò Chơi Khởi Động Hứng Khởi',
      text: 'Hãy sáng tạo 1 trò chơi học tập khởi động thời lượng 7-10 phút để dẫn dắt vào bài [Nhập Tên Bài]. Trò chơi cần đơn giản, không tốn nhiều đạo cụ, kích thích 100% học sinh tham gia và kết nối tự nhiên với kiến thức trọng tâm.'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(index);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#08065B] border-2 border-[rgba(39,116,255,0.6)] rounded-3xl shadow-[0_20px_60px_rgba(5,4,71,0.95)] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top header bar */}
        <div className="p-5 sm:p-6 bg-[#0B0870] border-b border-[rgba(39,116,255,0.4)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#168BFF]/20 border border-[#18C8FF]/50 flex items-center justify-center text-[#18C8FF]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="gold">BỘ TÀI LIỆU ĐỘC QUYỀN</Badge>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                Tài Liệu AI &amp; Bộ Prompt Thực Chiến Cho Giáo Dục
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#D5DCF8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation tabs */}
        <div className="flex border-b border-white/10 px-6 pt-3 bg-[#060447]">
          <button
            onClick={() => setActiveTab('register')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'register'
                ? 'border-[#18C8FF] text-[#18C8FF]'
                : 'border-transparent text-[#D5DCF8] hover:text-white'
            }`}
          >
            Đăng ký nhận tài liệu đầy đủ
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'preview'
                ? 'border-[#18C8FF] text-[#18C8FF]'
                : 'border-transparent text-[#D5DCF8] hover:text-white'
            }`}
          >
            Xem trước Prompt mẫu
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {activeTab === 'register' ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#0B0870]/70 border border-[#2774FF]/40 text-xs sm:text-sm text-[#D5DCF8] space-y-2">
                <p className="font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFB800]" />
                  Gói tài liệu gửi tới bạn bao gồm:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18C8FF] shrink-0" />
                    <span>Bộ 100+ Prompt soạn giáo án &amp; đề thi</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18C8FF] shrink-0" />
                    <span>Mẫu thiết kế slide &amp; infographic AI</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                    <span>Hướng dẫn tạo App bằng Google AI Studio</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB800] shrink-0" />
                    <span>Ebook tự động hóa công việc hành chính</span>
                  </div>
                </div>
              </div>

              <LeadForm
                id="modal-lead-form"
                source="Modal Document Form"
                onSuccessCallback={() => {
                  onSuccess();
                  setTimeout(() => onClose(), 2500);
                }}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#D5DCF8]">
                Bạn có thể sao chép ngay các Prompt thực chiến dưới đây để áp dụng vào ChatGPT, Gemini hoặc Google AI Studio:
              </p>

              {samplePrompts.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0B0870] border border-[rgba(39,116,255,0.4)] space-y-2.5 relative group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-extrabold text-[#FFC21C]">
                      {p.title}
                    </h4>
                    <button
                      onClick={() => handleCopy(p.text, idx)}
                      className="px-2.5 py-1 rounded-lg bg-[#168BFF]/20 border border-[#18C8FF]/50 text-xs font-bold text-[#18C8FF] hover:bg-[#18C8FF] hover:text-[#050447] transition-all flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPrompt === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Đã sao chép!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 font-mono bg-[#050447]/90 p-3 rounded-xl border border-white/10 leading-relaxed whitespace-pre-wrap">
                    {p.text}
                  </p>
                </div>
              ))}

              <div className="pt-2 text-center">
                <button
                  onClick={() => setActiveTab('register')}
                  className="text-xs text-[#18C8FF] hover:underline font-bold"
                >
                  Nhận trọn bộ 100+ Prompt độc quyền &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
