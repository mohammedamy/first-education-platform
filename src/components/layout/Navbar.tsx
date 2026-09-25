import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useTrackSelection } from '../../context/TrackSelectionContext';
import { Menu, X, ArrowLeft, ArrowRight, User, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, direction, t } = useLanguage();
  const { openFutureAccountModal, setSelectedTrackId } = useTrackSelection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.tracks, href: '#tracks' },
    { label: t.nav.subjects, href: '#subjects' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.whyFirst, href: '#why-first' },
    { label: t.nav.teachers, href: '#teachers' },
    { label: t.nav.learningExp, href: '#learning-experience' },
    { label: t.nav.faq, href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo (Modular & Replaceable) */}
          <BrandLogo
            size="md"
            onClick={() => handleNavClick('#hero')}
          />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-full transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => openFutureAccountModal('student')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.nav.signIn}</span>
            </button>

            <Button
              size="sm"
              variant="primary"
              onClick={() => handleNavClick('#tracks')}
              rightIcon={<ArrowIcon className="w-3.5 h-3.5" />}
            >
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher variant="compact" />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-slate-800">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick('#tracks');
                }}
              >
                {t.nav.getStarted}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openFutureAccountModal('student');
                }}
              >
                {t.nav.signIn}
              </Button>
            </div>

            <nav className="flex flex-col gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-900 rounded-xl transition-colors text-start"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                {language === 'ar' ? 'تغيير اللغة' : 'Language'}
              </span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
