import React, { useState, useRef } from 'react';
import { Facebook, Globe, MessageCircle, Quote, Sparkles, CheckCircle2, Upload, Camera } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export const AboutSection: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhoto(event.target.result as string);
          setImageError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#08065B]/60 relative overflow-hidden border-t border-[rgba(39,116,255,0.25)]">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#168BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-[#FFB800]/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT: Portrait Card sang trọng (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing aura frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#168BFF] via-[#18C8FF] to-[#FFB800] rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

              <div className="relative rounded-3xl bg-[#0B0870] border-2 border-[rgba(39,116,255,0.5)] overflow-hidden shadow-2xl">
                {/* Top Badge on image */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <Badge variant="gold">
                    {siteConfig.personName}
                  </Badge>
                </div>

                {/* Upload & Change Photo quick trigger */}
                <div className="absolute top-4 right-4 z-20">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload-input"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Tải lên ảnh của bạn (ANH HUONG 2.jpeg hoặc ảnh khác)"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#050447]/90 hover:bg-[#168BFF] text-white text-xs font-semibold border border-[rgba(24,200,255,0.4)] backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span className="hidden sm:inline">Đổi ảnh</span>
                  </button>
                </div>

                {/* Portrait Image Container */}
                <div className="relative aspect-[3/4] w-full bg-[#050447] overflow-hidden">
                  <img
                    src={customPhoto || (imageError ? siteConfig.portraitFallback : siteConfig.portraitImage)}
                    alt="Ms Hương AI - Mộc Hương Giảng viên & Chuyên gia đào tạo AI"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />

                  {/* Gradient shadow overlay at bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0870] via-[#0B0870]/75 to-transparent pointer-events-none" />
                </div>

                {/* Footer Image Banner */}
                <div className="p-5 sm:p-6 bg-[#0B0870] border-t border-[rgba(39,116,255,0.4)] text-center relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-wider uppercase">
                    {siteConfig.brandName}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#18C8FF] tracking-widest uppercase mt-1">
                    {siteConfig.roleTitle}
                  </p>
                  <p className="text-[11px] text-[#D5DCF8]/70 mt-1.5 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FFB800]" />
                    <span>Giảng viên Tiếng Anh &amp; Huấn luyện viên Prompt</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content & Philosophy (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <Badge variant="cyan" className="mb-3">
                NGƯỜI TRUYỀN CẢM HỨNG SỐ
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-4.5xl font-black uppercase tracking-tight text-white leading-tight">
                VỀ MS HƯƠNG AI
              </h2>
            </div>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#D5DCF8] leading-relaxed">
              Tôi là <strong className="text-white font-bold">MS HƯƠNG AI</strong> – giảng viên Tiếng Anh, người đào tạo và chia sẻ về AI, Prompt và ứng dụng công nghệ số trong giáo dục.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#D5DCF8] leading-relaxed">
              Từ kinh nghiệm giảng dạy và quá trình trực tiếp ứng dụng công nghệ vào công việc, tôi nhận thấy rằng giáo viên không cần trở thành chuyên gia công nghệ để sử dụng AI hiệu quả.
            </p>

            {/* Quote Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#08065B] border-l-4 border-l-[#FFB800] border-y border-r border-[rgba(39,116,255,0.4)] shadow-lg relative my-4">
              <Quote className="w-8 h-8 text-[#FFB800]/30 absolute top-3 right-3" />
              <p className="text-base sm:text-lg font-bold text-white italic leading-relaxed">
                “Điều quan trọng là biết chọn đúng công cụ – viết đúng câu lệnh – xây dựng đúng quy trình và ứng dụng AI vào đúng công việc.”
              </p>
            </div>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base text-[#D5DCF8] leading-relaxed">
              Tôi tập trung nghiên cứu, thực hành và chia sẻ những giải pháp AI có tính ứng dụng cao, giúp người học có thể <span className="text-[#18C8FF] font-semibold">học hôm nay – thực hành ngay – tạo được sản phẩm thực tế</span>.
            </p>

            {/* Key highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-[#18C8FF] shrink-0" />
                <span>Phương pháp sư phạm trực quan, dễ hiểu</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-[#18C8FF] shrink-0" />
                <span>Thực hành trên tình huống lớp học thực tế</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>Đồng hành hỗ trợ sau khóa học</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
                <span>Chia sẻ kho tài liệu Prompt độc quyền</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="md"
                  icon={<Facebook className="w-4 h-4 text-[#168BFF]" />}
                >
                  FACEBOOK CÁ NHÂN
                </Button>
              </a>

              <a
                href={siteConfig.fanpageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="md"
                  icon={<Globe className="w-4 h-4 text-[#18C8FF]" />}
                >
                  FANPAGE MS HƯƠNG AI
                </Button>
              </a>

              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="gold"
                  size="md"
                  icon={<MessageCircle className="w-4 h-4 text-[#050447]" />}
                >
                  ZALO: {siteConfig.zalo}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
