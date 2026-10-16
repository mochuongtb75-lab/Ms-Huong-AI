import React, { useState } from 'react';
import { User, Phone, Mail, Briefcase, CheckCircle2, AlertCircle, Loader2, Sparkles, Send } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { leadService } from '../../services/leadService';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface LeadFormProps {
  id?: string;
  source?: string;
  onSuccessCallback?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ 
  id = 'hero-lead-form',
  source = 'Hero Lead Form',
  onSuccessCallback
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    occupation: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Vui lòng nhập họ và tên.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại hoặc Zalo.';
    } else if (!/^[0-9+.\s()-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại chưa hợp lệ.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Email chưa đúng định dạng.';
    }
    if (!formData.occupation) {
      errs.occupation = 'Vui lòng chọn nghề nghiệp.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) return;

    setIsLoading(true);
    const result = await leadService.submitLead({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      occupation: formData.occupation,
      source: source
    });

    setIsLoading(false);
    if (result.success) {
      setIsSuccess(true);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      setApiError(result.message || 'Có lỗi xảy ra, vui lòng thử lại.');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      occupation: ''
    });
    setErrors({});
    setIsSuccess(false);
    setApiError('');
  };

  return (
    <div
      id={id}
      className="bg-[#0B0870]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-[#2774FF]/60 p-6 sm:p-8 shadow-[0_15px_45px_rgba(5,4,71,0.9)] relative overflow-hidden"
    >
      {/* Decorative top accent glow */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#18C8FF] via-[#168BFF] to-[#FFB800]" />

      {isSuccess ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#18C8FF]/15 border border-[#18C8FF] flex items-center justify-center mx-auto text-[#18C8FF] shadow-[0_0_25px_rgba(24,200,255,0.35)]">
            <CheckCircle2 className="w-10 h-10 text-[#18C8FF]" />
          </div>

          <Badge variant="gold">ĐÃ GỬI THÀNH CÔNG</Badge>

          <h3 className="text-xl sm:text-2xl font-black text-white">
            Cảm ơn bạn đã đăng ký!
          </h3>

          <p className="text-sm sm:text-base text-[#D5DCF8] leading-relaxed max-w-sm mx-auto">
            MS HƯƠNG AI sẽ gửi tài liệu và thông tin lộ trình cá nhân hóa tới bạn qua Email/Zalo trong thời gian sớm nhất.
          </p>

          <div className="p-4 rounded-xl bg-[#08065B] border border-[#2774FF]/40 text-xs text-left space-y-1.5 text-[#D5DCF8]">
            <p className="font-semibold text-white">Thông tin đăng ký:</p>
            <p>• Họ tên: <span className="text-white">{formData.fullName}</span></p>
            <p>• SĐT/Zalo: <span className="text-white">{formData.phone}</span></p>
            <p>• Email: <span className="text-[#18C8FF]">{formData.email}</span></p>
            <p>• Nghề nghiệp: <span className="text-white">{formData.occupation}</span></p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
            >
              Gửi một đăng ký khác
            </Button>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#18C8FF] hover:underline pt-1 inline-block"
            >
              Cần nhận tài liệu ngay lập tức? Nhắn Zalo: {siteConfig.zalo}
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="cyan">ĐĂNG KÝ TRỰC TIẾP</Badge>
              <span className="text-[11px] text-[#FFC21C] font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Miễn phí 100%
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase">
              ĐĂNG KÝ NHẬN TÀI LIỆU PROMPT &amp; TƯ VẤN ĐÀO TẠO
            </h3>

            <p className="text-xs sm:text-sm text-[#D5DCF8] leading-relaxed">
              Điền thông tin bên dưới để nhận trọn bộ tài liệu thực hành và lộ trình cá nhân hóa.
            </p>
          </div>

          {apiError && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{apiError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Field 1: Họ và tên */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Họ và tên <span className="text-[#FFC21C]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Ví dụ: Nguyễn Thị Hương"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#08065B]/90 border text-white placeholder-white/35 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#18C8FF] ${
                    errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-[#2774FF]/60 hover:border-[#18C8FF]'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-300 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Field 2: Số điện thoại / Zalo */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Số điện thoại / Zalo <span className="text-[#FFC21C]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ví dụ: 0979 289 198"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#08065B]/90 border text-white placeholder-white/35 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#18C8FF] ${
                    errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-[#2774FF]/60 hover:border-[#18C8FF]'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-300 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Field 3: Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Email nhận tài liệu <span className="text-[#FFC21C]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#08065B]/90 border text-white placeholder-white/35 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#18C8FF] ${
                    errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#2774FF]/60 hover:border-[#18C8FF]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-xs text-red-300 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Field 4: Nghề nghiệp / Đơn vị công tác */}
            <div>
              <label htmlFor="occupation" className="block text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                Nghề nghiệp / Đơn vị công tác <span className="text-[#FFC21C]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                  <Briefcase className="w-4 h-4" />
                </div>
                <select
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#08065B] border text-white text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#18C8FF] appearance-none ${
                    errors.occupation ? 'border-red-400 focus:ring-red-400' : 'border-[#2774FF]/60 hover:border-[#18C8FF]'
                  }`}
                >
                  <option value="" className="bg-[#050447] text-white/50">
                    -- Chọn nghề nghiệp phù hợp --
                  </option>
                  {siteConfig.occupations.map((occ) => (
                    <option key={occ} value={occ} className="bg-[#050447] text-white">
                      {occ}
                    </option>
                  ))}
                </select>
              </div>
              {errors.occupation && (
                <p className="mt-1 text-xs text-red-300 font-medium">{errors.occupation}</p>
              )}
            </div>

            {/* CTA Lớn màu vàng */}
            <div className="pt-2">
              <Button
                id="submit-lead-btn"
                type="submit"
                variant="gold"
                size="lg"
                fullWidth
                disabled={isLoading}
                icon={
                  isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )
                }
              >
                {isLoading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ NGAY'}
              </Button>
            </div>

            <p className="text-[11px] text-center text-[#D5DCF8]/70 pt-1">
              🔒 Thông tin của bạn được bảo mật tuyệt đối 100%.
            </p>
          </form>
        </>
      )}
    </div>
  );
};
