import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { navItems, contactInfo } from '@/data/projects';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img
              src="/images/logos/iroamd3-footer.png"
              alt="Iroamd3"
              className="h-20 w-20 mb-4 rounded-lg"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Design driven architectural practice producing elegant and crafted solutions.
            </p>
          </div>

          <div>
            <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(item.path)}
                    className="text-white/60 hover:text-amber-300 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-amber-300 transition-colors text-sm"
                >
                  <Phone size={16} className="text-amber-400/70" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-amber-300 transition-colors text-sm break-all"
                >
                  <Mail size={16} className="text-amber-400/70 shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-5">
              Visit
            </h3>
            <div className="flex items-start gap-3 text-white/60 text-sm mb-6">
              <MapPin size={16} className="text-amber-400/70 shrink-0 mt-0.5" />
              <span>
                238 Darebin Drive,<br />
                Lalor,<br />
                VIC 3075
              </span>
            </div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-amber-300 transition-colors text-sm"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2024, Iroamd3. Design by <span className="font-semibold text-white/60">Web Solution Sydney</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
