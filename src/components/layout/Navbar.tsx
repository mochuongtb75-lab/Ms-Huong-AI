import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Download, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { Button } from '../common/Button';

interface NavbarProps {
  onOpenDocumentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocumentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = siteConfig.navigation.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050447]/95 backdrop-blur-xl border-b border-[rgba(39,116,255,0.4)] shadow-[0_10px_30px_rgba(5,4,71,0.8)] py-3'
          : 'bg-[#050447]/80 backdrop-blur-md border-b border-[rgba(39,116,255,0.25)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#18C8FF] rounded-lg p-1"
          >
            {/* Minimalist AI Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#08065B] to-[#0B0870] border border-[#2774FF]/60 flex items-center justify-center shadow-[0_0_15px_rgba(24,200,255,0.2)] group-hover:border-[#18C8FF] transition-all">
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#18C8FF] group-hover:scale-110 transition-transform" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-wider text-white flex items-center gap-1 leading-none">
                MS HƯƠNG{' '}
                <span className="bg-gradient-to-r from-[#18C8FF] to-[#168BFF] bg-clip-text text-transparent">
                  AI
                </span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#18C8FF] tracking-wider uppercase mt-1 leading-none">
                {siteConfig.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-[#18C8FF] bg-[#168BFF]/15 border-b-2 border-[#18C8FF]'
                      : 'text-[#D5DCF8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              id="nav-cta-button"
              variant="gold"
              size="sm"
              icon={<Download className="w-4 h-4" />}
              onClick={onOpenDocumentModal}
            >
              NHẬN TÀI LIỆU AI
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="gold"
              size="sm"
              className="sm:hidden px-3 text-xs"
              onClick={onOpenDocumentModal}
            >
              Tài Liệu
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#08065B] border border-[#2774FF]/50 text-white hover:text-[#18C8FF] focus:outline-none focus:ring-2 focus:ring-[#18C8FF]"
              aria-label="Mở menu chuyển hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060447]/98 border-b border-[#2774FF]/50 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 mb-4">
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#168BFF]/20 text-[#18C8FF] border-l-4 border-[#18C8FF]'
                      : 'text-[#D5DCF8] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Button
              fullWidth
              variant="gold"
              size="md"
              icon={<Download className="w-4 h-4" />}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocumentModal();
              }}
            >
              NHẬN TÀI LIỆU AI
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/\./g, '')}`}
              className="w-full text-center py-2.5 text-xs text-[#D5DCF8] font-semibold"
            >
              Hotline: <strong className="text-white">{siteConfig.phoneDisplay}</strong>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
