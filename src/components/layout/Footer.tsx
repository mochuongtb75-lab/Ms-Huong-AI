import React from 'react';
import { Phone, Mail, MapPin, Facebook, Globe, Cpu, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

interface FooterProps {
  onOpenRegisterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegisterModal }) => {
  return (
    <footer id="contact" className="bg-[#030230] border-t border-[rgba(39,116,255,0.4)] text-[#D5DCF8] pt-16 pb-28 sm:pb-20">
      <Container>
        {/* Main 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[rgba(39,116,255,0.25)]">
          {/* Column 1: Brand & Slogan (5 cols on md) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#08065B] border border-[#2774FF]/60 flex items-center justify-center shadow-[0_0_15px_rgba(24,200,255,0.25)]">
                <Cpu className="w-5 h-5 text-[#18C8FF]" />
              </div>
              <div>
                <h3 className="text-xl font-black tracking-wider text-white">
                  MS HƯƠNG <span className="text-[#18C8FF]">AI</span>
                </h3>
                <p className="text-[10px] font-bold text-[#18C8FF] tracking-wider uppercase">
                  {siteConfig.brandSubtitle}
                </p>
              </div>
            </div>

            <p className="text-[#FFC21C] font-semibold text-sm sm:text-base italic">
              “{siteConfig.tagline}”
            </p>

            <p className="text-sm text-[#D5DCF8] leading-relaxed max-w-md">
              Tôi giúp giáo viên, giảng viên và người đi làm ứng dụng AI một cách đơn giản, thực tế và hiệu quả để tiết kiệm thời gian – nâng cao năng suất – sáng tạo trong công việc.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0870] border border-[#2774FF]/50 text-xs font-semibold text-white hover:text-[#18C8FF] hover:border-[#18C8FF] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#18C8FF]" />
                <span>Chat Zalo: {siteConfig.zalo}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details (4 cols on md) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-[#18C8FF] pl-2.5">
              THÔNG TIN LIÊN HỆ
            </h4>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 text-xs block">Địa chỉ:</span>
                  <span className="text-white font-medium">{siteConfig.address}</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#18C8FF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 text-xs block">Hotline / Zalo:</span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
                    className="text-white font-bold hover:text-[#18C8FF] transition-colors text-base"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#168BFF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/60 text-xs block">Email liên hệ:</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white hover:text-[#18C8FF] transition-colors font-medium break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Channels (3 cols on md) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-l-2 border-[#18C8FF] pl-2.5">
              KÊNH CHÍNH THỨC
            </h4>

            <div className="space-y-2.5">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0870]/60 border border-[#2774FF]/40 text-sm font-medium hover:border-[#18C8FF] hover:text-white transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <Facebook className="w-4 h-4 text-[#168BFF]" />
                  <span>Facebook Cá Nhân</span>
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={siteConfig.fanpageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#0B0870]/60 border border-[#2774FF]/40 text-sm font-medium hover:border-[#18C8FF] hover:text-white transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#18C8FF]" />
                  <span>Fanpage Ms Hương AI</span>
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-1">
            <p className="text-sm font-bold text-white">
              MS HƯƠNG AI: <span className="text-[#FFC21C]">Biến AI thành trợ lý – Biến ý tưởng thành sản phẩm</span>
            </p>
            <p className="text-xs text-[#D5DCF8]/70">
              Đào tạo AI • Viết Prompt thực chiến • Ứng dụng giáo dục
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\./g, '')}`}>
              <Button
                variant="outline"
                size="sm"
                icon={<Phone className="w-3.5 h-3.5 text-[#18C8FF]" />}
              >
                Hotline: {siteConfig.phoneDisplay}
              </Button>
            </a>

            <Button
              variant="gold"
              size="sm"
              onClick={onOpenRegisterModal}
            >
              ĐĂNG KÝ ĐÀO TẠO AI
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
