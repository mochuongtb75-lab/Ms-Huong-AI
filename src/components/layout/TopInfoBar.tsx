import React from 'react';
import { Phone, MapPin, Facebook, Globe } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const TopInfoBar: React.FC = () => {
  return (
    <div className="bg-[#040338] border-b border-[rgba(39,116,255,0.3)] text-xs text-[#D5DCF8] py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left info: Hotline & Location */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
          <a
            href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
            className="flex items-center gap-1.5 hover:text-[#18C8FF] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#18C8FF]" />
            <span>Hotline: <strong className="text-white font-semibold">{siteConfig.phoneDisplay}</strong></span>
          </a>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Địa điểm: <span className="text-white">{siteConfig.address}</span></span>
          </div>
        </div>

        {/* Right info: Social Channels */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#18C8FF] transition-colors"
          >
            <Facebook className="w-3.5 h-3.5 text-[#168BFF]" />
            <span>Facebook Cá Nhân</span>
          </a>
          <span className="text-white/30">•</span>
          <a
            href={siteConfig.fanpageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#18C8FF] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#18C8FF]" />
            <span>Fanpage Ms Hương AI</span>
          </a>
        </div>
      </div>
    </div>
  );
};
