import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { Course } from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { LeadForm } from '../sections/LeadForm';
import { siteConfig } from '../../config/siteConfig';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onSuccess
}) => {
  if (!isOpen || !course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#08065B] border-2 border-[rgba(39,116,255,0.6)] rounded-3xl shadow-[0_20px_60px_rgba(5,4,71,0.95)] overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#0B0870] border-b border-[rgba(39,116,255,0.4)] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black tracking-widest text-[#FFC21C] uppercase px-2.5 py-0.5 rounded bg-[#FFB800]/15 border border-[#FFB800]/30">
                {course.number}
              </span>
              {course.tag && <Badge variant="cyan">{course.tag}</Badge>}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {course.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#D5DCF8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ chi tiết khóa học"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="p-4 rounded-2xl bg-[#0B0870]/80 border border-[#2774FF]/40">
            <h4 className="text-xs font-extrabold uppercase text-[#18C8FF] tracking-wider mb-1.5">
              Mục tiêu &amp; Ứng dụng thực tế
            </h4>
            <p className="text-sm text-[#D5DCF8] leading-relaxed">
              {course.description}
            </p>
          </div>

          {course.highlights && course.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold uppercase text-white tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                Nội dung trọng tâm trong khóa học:
              </h4>
              <div className="space-y-2">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#050447]/60 border border-white/5 text-xs sm:text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#18C8FF] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration form attached to this course */}
          <div className="pt-2">
            <LeadForm
              id="course-modal-form"
              source={`Đăng ký khóa học: ${course.number} - ${course.title}`}
              onSuccessCallback={() => {
                onSuccess();
                setTimeout(() => onClose(), 2500);
              }}
            />
          </div>

          {/* Direct hotline contact option */}
          <div className="pt-2 flex items-center justify-between text-xs text-[#D5DCF8]">
            <span>Cần tư vấn lịch học riêng?</span>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC21C] font-bold hover:underline flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat Zalo: {siteConfig.zalo}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
