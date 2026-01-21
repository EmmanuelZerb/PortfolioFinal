import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fermer le menu avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const navItems = [
    { href: '#work', labelKey: 'nav.projects' },
    { href: '#journey', labelKey: 'nav.journey' },
    { href: '#skills', labelKey: 'nav.skills' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Language Switcher - Left side on desktop */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current origin-center"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current origin-center"
              />
            </div>
          </button>

          {/* GitHub Icon - Desktop only */}
          <a
            href="https://github.com/EmmanuelZerb"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-zinc-500 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-xl"
            onClick={closeMenu}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {/* Language Switcher in Mobile Menu */}
              <motion.div
                custom={0}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={(e) => e.stopPropagation()}
              >
                <LanguageSwitcher />
              </motion.div>

              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  custom={i + 1}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={closeMenu}
                  className="text-3xl font-semibold text-zinc-300 hover:text-zinc-50 transition-colors"
                >
                  {t(item.labelKey)}
                </motion.a>
              ))}

              {/* GitHub Link in Mobile Menu */}
              <motion.a
                href="https://github.com/EmmanuelZerb"
                target="_blank"
                rel="noopener noreferrer"
                custom={navItems.length + 1}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex items-center gap-3 text-xl text-zinc-400 hover:text-zinc-200 transition-colors mt-4"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
