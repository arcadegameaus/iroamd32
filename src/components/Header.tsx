import { useState, useEffect } from 'react';
import { Menu, X, Instagram, ChevronDown } from 'lucide-react';
import { navItems, contactInfo, projects } from '@/data/projects';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProjectsOpen(false);
    setMobileProjectsOpen(false);
  }, [currentPath]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    setProjectsOpen(false);
    setMobileProjectsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/logos/iroamd3-logo.png"
              alt="Iroamd3"
              className="h-10 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.label === 'Projects') {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                  >
                    <button
                      onClick={() => handleNav(item.path)}
                      className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded inline-flex items-center gap-1 ${
                        isActive(item.path)
                          ? 'text-amber-400'
                          : 'text-white/90 hover:text-amber-300'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                        projectsOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="bg-stone-900/97 backdrop-blur-md shadow-2xl rounded-sm w-80 max-h-[70vh] overflow-y-auto border border-white/10">
                        <div className="py-2">
                          <button
                            onClick={() => handleNav('/projects')}
                            className="w-full text-left px-5 py-2 text-amber-400 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors border-b border-white/10 mb-1"
                          >
                            View All Projects
                          </button>
                          {projects.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => handleNav(`/projects/${p.slug}`)}
                              className={`w-full text-left px-5 py-2 text-sm transition-colors flex items-center gap-3 group ${
                                currentPath === `/projects/${p.slug}`
                                  ? 'text-amber-400 bg-amber-500/10'
                                  : 'text-white/70 hover:text-amber-300 hover:bg-white/5'
                              }`}
                            >
                              <img
                                src={p.image}
                                alt=""
                                className="w-10 h-10 object-cover rounded-sm shrink-0"
                              />
                              <div className="min-w-0">
                                <div className="truncate text-xs font-medium">{p.title}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-wider">
                                  {p.category}{p.year && ` · ${p.year}`}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded ${
                    isActive(item.path)
                      ? 'text-amber-400'
                      : 'text-white/90 hover:text-amber-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-amber-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-stone-900 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6 pb-6 h-full overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                if (item.label === 'Projects') {
                  return (
                    <div key={item.path}>
                      <button
                        onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        className={`w-full flex items-center justify-between text-left px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'text-white/90 hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${mobileProjectsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileProjectsOpen && (
                        <div className="ml-4 mt-1 mb-2 max-h-[40vh] overflow-y-auto">
                          <button
                            onClick={() => handleNav('/projects')}
                            className="w-full text-left px-4 py-2 text-amber-400 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 rounded-lg transition-colors"
                          >
                            View All Projects
                          </button>
                          {projects.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => handleNav(`/projects/${p.slug}`)}
                              className={`w-full text-left px-4 py-2 text-xs rounded-lg transition-colors ${
                                currentPath === `/projects/${p.slug}`
                                  ? 'text-amber-400 bg-amber-500/10'
                                  : 'text-white/60 hover:bg-white/5'
                              }`}
                            >
                              {p.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`text-left px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'text-white/90 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href={`tel:${contactInfo.phone}`}
                className="block text-white/70 text-sm mb-2"
              >
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-white/70 text-sm mb-4"
              >
                {contactInfo.email}
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300 transition-colors"
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
