import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
  onNavigate: (path: string) => void;
}

export default function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.path ? (
            <button
              onClick={() => item.path && onNavigate(item.path)}
              className="hover:text-amber-500 transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-stone-600">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight size={14} className="text-stone-400" />
          )}
        </div>
      ))}
    </nav>
  );
}
