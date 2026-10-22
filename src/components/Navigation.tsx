import { Download, Menu, Moon, Sun } from 'lucide-react';
import { navItems, personal } from '@/lib/data';

type NavigationProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Navigation({ theme, onToggleTheme }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-40 mx-auto mb-8 w-full max-w-6xl px-4 pt-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3 shadow-[0_12px_30px_rgba(17,17,17,0.04)] backdrop-blur-xl">
        <a href="#top" className="text-sm font-semibold tracking-[-0.05em] text-[var(--text)] sm:text-base">
          {personal.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-soft)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] text-[var(--text)] shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--text)]"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={personal.resumeHref}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[linear-gradient(135deg,var(--panel-strong),var(--highlight))] px-3 py-2 text-xs font-medium text-[var(--text)] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:border-[var(--text)]"
          >
            <Download className="h-3.5 w-3.5" />
            Resume ↓
          </a>
          <button
            type="button"
            aria-label="Open navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
